export interface GridPosition {
	readonly x: number;
	readonly y: number;
}

export type CardSize = 
	| '1x1' 
	| '1x2' 
	| '2x1' 
	| '2x2' 
	| '3x1' 
	| 'L-shaped';

export interface GridBounds {
	readonly minX: number;
	readonly maxX: number;
	readonly minY: number;
	readonly maxY: number;
}

export interface ViewportInfo {
	readonly width: number;
	readonly height: number;
	readonly centerX: number;
	readonly centerY: number;
	readonly zoomLevel: number;
}

export interface GridCell {
	readonly id: string;
	readonly position: GridPosition;
	readonly size: CardSize;
	readonly isVisible: boolean;
	readonly priority: number;
}

export interface GridState {
	position: GridPosition;
	zoomLevel: number;
	selectedCard: string | null;
	visibleCells: readonly GridCell[];
	isAnimating: boolean;
}