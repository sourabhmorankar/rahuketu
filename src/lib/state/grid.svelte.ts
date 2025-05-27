interface GridPosition {
	x: number;
	y: number;
}

interface Viewport {
	width: number;
	height: number;
	centerX: number;
	centerY: number;
	zoomLevel: number;
}

interface GridBounds {
	minX: number;
	maxX: number;
	minY: number;
	maxY: number;
}

let gridPosition = $state<GridPosition>({ x: 0, y: 0 });
let zoomLevel = $state<number>(1);
let selectedCard = $state<string | null>(null);
let isAnimating = $state<boolean>(false);
let viewport = $state<Viewport>({
	width: 0,
	height: 0,
	centerX: 0,
	centerY: 0,
	zoomLevel: 1
});

const gridBounds = $derived<GridBounds>({
	minX: gridPosition.x - 1000,
	maxX: gridPosition.x + 1000,
	minY: gridPosition.y - 1000,
	maxY: gridPosition.y + 1000
});

const centerPosition = $derived<GridPosition>({
	x: viewport.width / 2,
	y: viewport.height / 2
});

$effect(() => {
	if (typeof window !== 'undefined') {
		viewport.width = window.innerWidth;
		viewport.height = window.innerHeight;
		viewport.centerX = window.innerWidth / 2;
		viewport.centerY = window.innerHeight / 2;
		viewport.zoomLevel = zoomLevel;
	}
});

interface GridAPI {
	position: GridPosition;
	zoom: number;
	selected: string | null;
	animating: boolean;
	bounds: GridBounds;
	center: GridPosition;
	viewport: Viewport;
	setPosition: (pos: GridPosition) => void;
	setZoom: (zoom: number) => void;
	selectCard: (cardId: string | null) => void;
	setAnimating: (animating: boolean) => void;
	setViewport: (size: { width: number; height: number }) => void;
	move: (dx: number, dy: number) => void;
	zoomBy: (amount: number) => void;
}

export function useGrid(): GridAPI {
	return {
		get position() { return gridPosition; },
		get zoom() { return zoomLevel; },
		get selected() { return selectedCard; },
		get animating() { return isAnimating; },
		get bounds() { return gridBounds; },
		get center() { return centerPosition; },
		get viewport() { return viewport; },
		
		setPosition: (pos: GridPosition) => {
			gridPosition = pos;
		},
		
		setZoom: (zoom: number) => {
			zoomLevel = Math.max(0.5, Math.min(3, zoom));
		},
		
		selectCard: (cardId: string | null) => {
			selectedCard = cardId;
		},
		
		setAnimating: (animating: boolean) => {
			isAnimating = animating;
		},

		setViewport: (size: { width: number; height: number }) => {
			viewport.width = size.width;
			viewport.height = size.height;
		},

		move: (dx: number, dy: number) => {
			gridPosition.x += dx;
			gridPosition.y += dy;
		},

		zoomBy: (amount: number) => {
			zoomLevel = Math.max(0.5, Math.min(3, zoomLevel + amount));
		}
	};
}
