Class {
	#name : #BaselineOfAssets,
	#superclass : #BaselineOf,
	#category : #BaselineOfAssets
}

{ #category : #baseline }
BaselineOfAssets >> baseline: spec [
	<baseline>
		^ spec for: #common do: [
			spec package: 'Assets'
		]
]
