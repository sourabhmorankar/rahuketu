// Grid state management with Svelte 5 runes
let gridPosition = $state({ x: 0, y: 0 });
let zoomLevel = $state(1);
let isDragging = $state(false);
let dragStart = $state({ x: 0, y: 0 });

// Grid bounds and constraints
const MIN_ZOOM = 0.5;
const MAX_ZOOM = 2;
const CELL_SIZE = 180;

export function useGridState() {
	function handlePanStart(event: MouseEvent | TouchEvent) {
		isDragging = true;
		const clientX = 'touches' in event ? event.touches[0].clientX : event.clientX;
		const clientY = 'touches' in event ? event.touches[0].clientY : event.clientY;
		dragStart = { x: clientX - gridPosition.x, y: clientY - gridPosition.y };
	}

	function handlePanMove(event: MouseEvent | TouchEvent) {
		if (!isDragging) return;
		event.preventDefault();
		
		const clientX = 'touches' in event ? event.touches[0].clientX : event.clientX;
		const clientY = 'touches' in event ? event.touches[0].clientY : event.clientY;
		
		gridPosition = {
			x: clientX - dragStart.x,
			y: clientY - dragStart.y
		};
	}

	function handlePanEnd() {
		isDragging = false;
	}

	function handleZoom(event: WheelEvent) {
		event.preventDefault();
		const delta = event.deltaY > 0 ? -0.1 : 0.1;
		const newZoom = Math.max(MIN_ZOOM, Math.min(MAX_ZOOM, zoomLevel + delta));
		zoomLevel = newZoom;
	}

	function centerGrid() {
		gridPosition = { x: 0, y: 0 };
		zoomLevel = 1;
	}

	return {
		get position() { return gridPosition; },
		get zoom() { return zoomLevel; },
		get isDragging() { return isDragging; },
		handlePanStart,
		handlePanMove,
		handlePanEnd,
		handleZoom,
		centerGrid
	};
}