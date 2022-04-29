Object variableSubclass: #Mosaic	instanceVariableNames: 'tileDictionary '	classVariableNames: ''	poolDictionaries: ''	category: 'Plumbin-Framework'!Mosaic comment:'A Mosaic is a collection of Tiles.  An integer coordinate associated with each Tile determins its neighbors, if any. 

Copyright (c) 1985 by Ward Cunningham.  All rights reserved.'!!Mosaic methodsFor: 'initialize' stamp: 'ward 7/31/97 20:36'!initialize

	tileDictionary _ Dictionary new! !!Mosaic methodsFor: 'accessing' stamp: 'ward 7/31/97 20:36'!at: aPoint
	"Answer the Tile at aPoint."

	^tileDictionary at: aPoint ifAbsent: [Tile emptyTile]! !!Mosaic methodsFor: 'accessing' stamp: 'ward 7/31/97 20:36'!at: aPoint put: newTile
	"Add newTile to the receiver at aPoint.  Release existing Tile if any.
	Set neighbors on all four sides."

	| aTile | 
	(tileDictionary includesKey: aPoint)
		ifTrue: [self removeAt: aPoint].
	tileDictionary at: aPoint put: newTile.
	aTile _ self at: 0 @ -1 + aPoint.	newTile top: aTile.		aTile bottom: newTile.
	aTile _ self at: 0 @ 1 + aPoint.	newTile bottom: aTile.	aTile top: newTile.
	aTile _ self at: -1 @ 0 + aPoint.	newTile left: aTile.		aTile right: newTile.
	aTile _ self at: 1 @ 0 + aPoint.	newTile right: aTile.		aTile left: newTile.
	self changed: aPoint.
	newTile changeAll.
	^newTile! !!Mosaic methodsFor: 'accessing' stamp: 'ward 7/31/97 20:36'!keys
	"Answer a Set of Points locating non-empty tiles."

	^tileDictionary keys! !!Mosaic methodsFor: 'accessing' stamp: 'ward 7/31/97 20:36'!remove: aTile
	"Remove aTile.  Revise all four neighbors."

	^self removeAt: (tileDictionary keyAtValue: aTile)! !!Mosaic methodsFor: 'accessing' stamp: 'ward 7/31/97 20:36'!removeAt: aPoint
	"Remove the tile at aPoint.  Revise all four neighbors."

	| oldTile |
	oldTile _ (tileDictionary removeKey: aPoint).
	(self at: 0 @ -1 + aPoint) bottom: Tile emptyTile.
	(self at: 0 @ 1 + aPoint) top: Tile emptyTile.
	(self at: -1 @ 0 + aPoint) right: Tile emptyTile.
	(self at: 1 @ 0 + aPoint) left: Tile emptyTile.
	self changed: aPoint.
	oldTile changeAll.
	^oldTile! !!Mosaic methodsFor: 'user interface' stamp: 'ward 7/31/97 20:36'!edit
	"Open a View on the receiver."

	MosaicView openOn: self! !"-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- "!Mosaic class	instanceVariableNames: ''!!Mosaic class methodsFor: 'instance creation' stamp: 'ward 7/31/97 20:36'!new

	^super new initialize! !!Mosaic class methodsFor: 'examples' stamp: 'ward 8/1/97 14:38'!example
	"Answer a Mosaic with some typical Tiles."	

	| aMosaic aPoint | 
	aMosaic _ Mosaic new.
	aPoint _ 1@1.
	Tile allSubclasses do:
		[:aClass | aMosaic at: aPoint put: aClass new.
		aPoint _ aPoint + (1@0)].
	^aMosaic

	"Mosaic example edit"! !View subclass: #MosaicView	instanceVariableNames: ''	classVariableNames: ''	poolDictionaries: ''	category: 'Plumbin-Framework'!MosaicView comment:'A MosaicView collects TileViews as subviews.  Its window coordinates are that of its model, a Mosaic, while its viewport reflects display coordinates.'!!MosaicView methodsFor: 'updating' stamp: 'ward 7/31/97 20:36'!update: aPoint
	"The receiver's model has changed at aPoint.  Add or remove a subView
	as appropriate."

	| changed | 
	changed _ subViews
		select: [:each | each key = aPoint].
	changed isEmpty
		ifTrue: [self at: aPoint addViewOn: (model at: aPoint)]
		ifFalse: [self removeSubView: changed first]! !!MosaicView methodsFor: 'private' stamp: 'ward 7/31/97 20:36'!at: aPoint addViewOn: aTile
	| tileView | 

	aTile = nil ifTrue: [self error: 'nil unexpected'].	tileView _ aTile defaultViewClass new
		model: aTile.
	self addSubView: tileView viewport: (aPoint extent: 1@1)! !!MosaicView methodsFor: 'private' stamp: 'ward 7/31/97 20:36'!removeSubView: aSubView
	"Remove aSubView from the receiver.  Erase its viewport.  Release its dependents."

	aSubView erase.
	super removeSubView: aSubView.
	aSubView release! !"-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- "!MosaicView class	instanceVariableNames: ''!!MosaicView class methodsFor: 'instance creation' stamp: 'ward 8/1/97 14:37'!openOn: aMosaic

	| topView mosaicView | 
	mosaicView _ MosaicView new
		model: aMosaic;
		window: (0@0 extent: 10@8) viewport: (0@0 extent: 400@320);		backgroundColor: Color white.
 	aMosaic keys do:
		[:each | mosaicView at: each addViewOn: (aMosaic at: each)].
	topView _ ColorSystemView new
		model: aMosaic;
		label: 'Plumbin''';
		borderWidth: 2;
		addSubView: mosaicView.
	topView
		maximumSize: topView viewport extent;
		minimumSize: topView viewport extent.
	topView controller open! !Object subclass: #Tile	instanceVariableNames: 'left top right bottom '	classVariableNames: 'ChangeLimit MaxLoops '	poolDictionaries: ''	category: 'Plumbin-Framework'!Tile comment:'A Tile models a fluid conduit.  A Tile connects to four neighbors, top, bottom, left and right.  The fluid at each connection has a pressure and a flow rate.  Often pressure or flow is computed by consulting other neighbors.  A Tile will be advised of changes at its connections.  These may result in a change in the tile and may be propagated to downstream Tiles.

Copyright (c) 1985 by Ward Cunningham.  All rights reserved.'!!Tile methodsFor: 'initialize' stamp: 'ward 7/31/97 20:36'!initialize
	"Initialize the receiver's neighbors to be emptyTiles."

	top _ Tile emptyTile.
	bottom _ Tile emptyTile.
	left _ Tile emptyTile.
	right _ Tile emptyTile.! !!Tile methodsFor: 'accessing' stamp: 'ward 7/31/97 20:36'!bottom: aTile
	"Set the receiver's bottom neighbor to aTile."

	^bottom _ aTile! !!Tile methodsFor: 'accessing' stamp: 'ward 7/31/97 20:36'!form
	"Answer a Form representing the receiver."

	^Form
		extent: 40@40
		fromArray: #( 4 32 0 7 65504 0 0 33024 0 0 65280 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 49152 0 768 16384 0 512 28672 0 3584 20480 0 2560 20480 0 2560 20480 0 2560 20480 0 2560 20480 0 2560 20480 0 2560 20480 0 2560 20480 0 2560 28672 0 3584 16384 0 512 49152 0 768 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 65408 0 1 128 0 7 65504 0 4 32 0)
		offset: 0@0! !!Tile methodsFor: 'accessing' stamp: 'ward 7/31/97 20:36'!left: aTile
	"Set the receiver's left neighbor to aTile."

	^left _ aTile! !!Tile methodsFor: 'accessing' stamp: 'ward 7/31/97 20:36'!right: aTile
	"Set the receiver's right neighbor to aTile."

	^right _ aTile! !!Tile methodsFor: 'accessing' stamp: 'ward 7/31/97 20:36'!top: aTile
	"Set the receiver's top neighbor to aTile."

	^top _ aTile! !!Tile methodsFor: 'checking' stamp: 'ward 8/1/97 08:08'!loopCheck	"Check for loops in change, pressure or flow. By convention we only check	while going around the upper-right corner of a loop (see ElboPipe)."	(MaxLoops _ MaxLoops - 1) < 1 ifTrue:		[self error: 'Can''t simulate tiles in loops']	! !!Tile methodsFor: 'checking' stamp: 'ward 8/1/97 08:18'!resetLoopCheck	"Set how many upper-right corner pipes we will examine	without complaining about loops. Must be called before	every traversal."	MaxLoops _ 20.! !!Tile methodsFor: 'simulating' stamp: 'ward 7/31/97 20:36'!bottomFlow
	"Answer the fluid flow out the bottom of the receiver."

	^0.0! !!Tile methodsFor: 'simulating' stamp: 'ward 7/31/97 20:36'!bottomPressure
	"Answer the fluid pressure at the bottom of the receiver."

	^0.0! !!Tile methodsFor: 'simulating' stamp: 'ward 7/31/97 20:36'!leftFlow
	"Answer the fluid flow out the left of the receiver."

	^0.0! !!Tile methodsFor: 'simulating' stamp: 'ward 7/31/97 20:36'!leftPressure
	"Answer the fluid pressure at the left of the receiver."

	^0.0! !!Tile methodsFor: 'simulating' stamp: 'ward 7/31/97 20:36'!rightFlow
	"Answer the fluid flow out the right of the receiver."

	^0.0! !!Tile methodsFor: 'simulating' stamp: 'ward 7/31/97 20:36'!rightPressure
	"Answer the fluid pressure at the right of the receiver."

	^0.0! !!Tile methodsFor: 'simulating' stamp: 'ward 7/31/97 20:36'!topFlow
	"Answer the fluid flow out the top of the receiver."

	^0.0! !!Tile methodsFor: 'simulating' stamp: 'ward 7/31/97 20:36'!topPressure
	"Answer the fluid pressure at the top of the receiver."

	^0.0! !!Tile methodsFor: 'updating' stamp: 'ward 7/31/97 20:36'!bottomChanged
	"The bottom tile has changed.  Update the receiver then propogate the change."! !!Tile methodsFor: 'updating' stamp: 'ward 8/1/97 08:09'!changeAll
	"Change the receiver and all of its neighbors."

	self changed.	self resetLoopCheck.
	top bottomChanged.
	bottom topChanged.
	left rightChanged.
	right leftChanged! !!Tile methodsFor: 'updating' stamp: 'ward 7/31/97 20:36'!leftChanged
	"The left tile has changed.  Update the receiver then propogate the change."! !!Tile methodsFor: 'updating' stamp: 'ward 7/31/97 20:36'!rightChanged
	"The right tile has changed.  Update the receiver then propogate the change."! !!Tile methodsFor: 'updating' stamp: 'ward 7/31/97 20:36'!topChanged
	"The top tile has changed.  Update the receiver then propogate the change."! !!Tile methodsFor: 'defaults' stamp: 'ward 7/31/97 20:36'!defaultControllerClass
	"Answer the class of the default controller for the receiver."

	^TileController! !!Tile methodsFor: 'defaults' stamp: 'ward 7/31/97 20:36'!defaultViewClass
	"Answer the class of the default view for the receiver."

	^TileView! !"-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- "!Tile class	instanceVariableNames: ''!!Tile class methodsFor: 'instance creation' stamp: 'ward 7/31/97 20:36'!emptyTile
	"Answer a Tile suitable as a neighbor of a Tile that has no neighbors."

	^self basicNew! !!Tile class methodsFor: 'instance creation' stamp: 'ward 7/31/97 20:36'!new
	"Answer an instance of the receiver.  Initialize its neighbors to emptyTiles."

	^super new initialize! !!Tile class methodsFor: 'examples' stamp: 'ward 7/31/97 20:36'!example
	"Refinements of Tile model fluid flow.  Each Tile cooperates with it's neighbors
	to compute pressures and flows on all sides of each tile."

	| f s p |
	f _ Faucet new.
	s _ Spout new.
	p _ StraightPipe new.

	f bottom: p.
	p bottom: s.
	s top: p.
	p top: f.

	f on.
	f off.

	s topFlow.
	f bottomFlow.! !MouseMenuController subclass: #TileController	instanceVariableNames: ''	classVariableNames: ''	poolDictionaries: ''	category: 'Plumbin-Framework'!TileController comment:'A TileController is a kind of MouseMenuController that provides for the positioning of its view as a redButtonActivity.'!!TileController methodsFor: 'control defaults' stamp: 'ward 7/31/97 20:36'!isControlActive
	"Answer whether the receiver wants to retain control.  Answer false if the
	receiver has been released (as happens with moveModel)."

	^view notNil and:
		[(view containsPoint: sensor cursorPoint) and:
			[sensor blueButtonPressed not]]! !!TileController methodsFor: 'control defaults' stamp: 'ward 7/31/97 20:36'!redButtonActivity
	"Move the reciever.  If leftShiftDown then copy it."

	sensor leftShiftDown
		ifTrue: [self copyModel]
		ifFalse: [self moveModel]! !!TileController methodsFor: 'private' stamp: 'ward 7/31/97 20:36'!copyModel
	"Move a copy of the receiver's model to a new location within its Mosaic."

	view mosaic
		at: self newLocation
		put: model copy.! !!TileController methodsFor: 'private' stamp: 'ward 7/31/97 20:38'!moveModel
	"Move the receiver's model to a new location within its Mosaic."
	view erase.
	view mosaic
		at: self newLocation
		put: (view mosaic remove: model)! !!TileController methodsFor: 'private' stamp: 'ward 7/31/97 20:36'!newLocation
	"Drag the receiver's form to a new location.  Answer the new location in 
	viewport coordinates."

	| releasePoint | 
	Cursor blank showWhile:
		[model form
			follow: [releasePoint _ sensor cursorPoint]
			while: [sensor anyButtonPressed]].
	^(view superView inverseDisplayTransform: releasePoint) rounded! !"-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- "!TileController class	instanceVariableNames: ''!View subclass: #TileView	instanceVariableNames: ''	classVariableNames: ''	poolDictionaries: ''	category: 'Plumbin-Framework'!TileView comment:'A TileView displays its model''s form as the contents of its viewport.  A TileView participates in editing operations performed by its controller.'!!TileView methodsFor: 'accessing' stamp: 'ward 7/31/97 20:36'!key
	"Answer the key of the receiver's model within its Mosaic.  This is the
	same as the receiver's location within its superView."

	^viewport origin rounded! !!TileView methodsFor: 'accessing' stamp: 'ward 7/31/97 20:36'!mosaic
	"Answer the Mosaic that contains the receiver's model."

	^superView model! !!TileView methodsFor: 'displaying' stamp: 'ward 7/31/97 20:36'!displayView
	"Display the Form representing the receiver's model."

	model form displayAt: self insetDisplayBox origin! !!TileView methodsFor: 'displaying' stamp: 'ward 8/1/97 14:21'!erase
	"Erase the receiver from the Display."

	Display		fill: self displayBox		fillColor: superView backgroundColor! !!TileView methodsFor: 'displaying' stamp: 'ward 7/31/97 20:36'!update: anObject
	"The receiver's model has changed.  Redisplay it."

	self displayView! !!TileView methodsFor: 'defaults' stamp: 'ward 7/31/97 20:36'!defaultControllerClass
	"Answer the class of the default controller for the receiver's Model."

	^model defaultControllerClass! !!TileView methodsFor: 'defaults' stamp: 'ward 7/31/97 20:36'!defaultWindow

	^0@0 extent: 40@40! !"-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- "!TileView class	instanceVariableNames: ''!