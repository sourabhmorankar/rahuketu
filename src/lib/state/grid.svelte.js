let gridPosition = $state({ x: 0, y: 0 });
let zoomLevel = $state(1);
let selectedCard = $state(null);
let isAnimating = $state(false);
let viewport = $state({
	width: 0,
	height: 0,
	centerX: 0,
	centerY: 0,
	zoomLevel: 1
});

const gridBounds = $derived({
	minX: gridPosition.x - 1000,
	maxX: gridPosition.x + 1000,
	minY: gridPosition.y - 1000,
	maxY: gridPosition.y + 1000
});

const centerPosition = $derived({
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

export function useGrid() {
	return {
		get position() { return gridPosition; },
		get zoom() { return zoomLevel; },
		get selected() { return selectedCard; },
		get animating() { return isAnimating; },
		get bounds() { return gridBounds; },
		get center() { return centerPosition; },
		get viewport() { return viewport; },
		
		/**
		 * @param {{x:number, y:number}} pos
		 */
		setPosition: (pos) => {
			gridPosition = pos;
		},
		
		/**
		 * @param {number} zoom
		 */
		setZoom: (zoom) => {
			zoomLevel = Math.max(0.5, Math.min(3, zoom));
		},
		
		/**
		 * @param {null} cardId
		 */
		selectCard: (cardId) => {
			selectedCard = null;
		},
		
		/**
		 * @param {boolean} animating
		 */
		setAnimating: (animating) => {
			isAnimating = animating;
		},

		/**
		 * @param {{width:number, height:number}} size
		 */
		setViewport: (size) => {
			viewport.width = size.width;
			viewport.height = size.height;
		},

		/**
		 * @param {number} dx
		 * @param {number} dy
		 */
		move: (dx, dy) => {
			gridPosition.x += dx;
			gridPosition.y += dy;
		},

		/**
		 * @param {number} amount
		 */
		zoomBy: (amount) => {
			zoomLevel = Math.max(0.5, Math.min(3, zoomLevel + amount));
		}
	};
}