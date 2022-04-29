'From Squeak 1.2 of June 29, 1997 on 1 July 1997 at 2:18:40 pm'!"Change Set:		ColorMapFix-di
Date:			1 July 1997
Author:			Dan Ingalls

This fixes two calls on BitBlt that allowed invalid color maps to slip by.

It also adds an optimization that saves one send on every color map check.

The problem was discovered by Erik Husby running Ward Cunningham's Plumbin', which did a depth-1 Form>>followWhile: on a depth-8 display.
"!


!BitBlt methodsFor: 'copying' stamp: 'di 7/1/97 14:07'!
copyForm: srcForm to: destPt rule: rule
	sourceForm _ srcForm.
	halftoneForm _ nil.
	combinationRule _ rule.
	destX _ destPt x + sourceForm offset x.
	destY _ destPt y + sourceForm offset y.
	sourceX _ 0.
	sourceY _ 0.
	width _ sourceForm width.
	height _ sourceForm height.
	colorMap _ srcForm colormapIfNeededForDepth: destForm depth.
	self copyBits.
! !

!BitBlt methodsFor: 'copying' stamp: 'di 7/1/97 14:09'!
copyFrom: sourceRectangle in: srcForm to: destPt
	| sourceOrigin |
	sourceForm _ srcForm.
	halftoneForm _ nil.
	combinationRule _ 3.  "store"
	destX _ destPt x.
	destY _ destPt y.
	sourceOrigin _ sourceRectangle origin.
	sourceX _ sourceOrigin x.
	sourceY _ sourceOrigin y.
	width _ sourceRectangle width.
	height _ sourceRectangle height.
	colorMap _ srcForm colormapIfNeededForDepth: destForm depth.
	self copyBits! !


!Form methodsFor: 'displaying' stamp: 'di 7/1/97 14:06'!
colormapIfNeededForDepth: destDepth
	"Return a colormap for displaying the receiver at the given depth, or nil if no colormap is needed."

	depth = destDepth ifTrue: [^ nil].  "not needed if depths are the same"
	^ Color colorMapIfNeededFrom: depth to: destDepth
! !


