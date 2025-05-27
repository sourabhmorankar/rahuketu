export interface Card {
	id: string;
	type: string;
	position: { x: number; y: number; };
	size: string;
	width?: number;
	height?: number;
	content?: Record<string, any>;
}
