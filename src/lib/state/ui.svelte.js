let searchQuery = $state('');
/** @type {any[]} */
let searchResults = $state([]);
let isSearching = $state(false);
let searchDrawerOpen = $state(false);
let authDrawerOpen = $state(false);
let dashboardOpen = $state(false);
let legalDrawerOpen = $state(false);

const hasSearchQuery = $derived(searchQuery.trim().length > 0);
const searchResultsCount = $derived(searchResults.length);

export function useUI() {
	return {
		get searchQuery() { return searchQuery; },
		get searchResults() { return searchResults; },
		get isSearching() { return isSearching; },
		get hasSearchQuery() { return hasSearchQuery; },
		get resultsCount() { return searchResultsCount; },
		
		get searchDrawerOpen() { return searchDrawerOpen; },
		get authDrawerOpen() { return authDrawerOpen; },
		get dashboardOpen() { return dashboardOpen; },
		get legalDrawerOpen() { return legalDrawerOpen; },
		
		/**
		 * @param {string} query
		 */
		setSearchQuery: (query) => {
			searchQuery = query;
		},
		
		/**
		 * @param {any[]} results
		 */
		setSearchResults: (results) => {
			searchResults = results;
		},
		
		/**
		 * @param {boolean} searching
		 */
		setSearching: (searching) => {
			isSearching = searching;
		},

		toggleSearchDrawer: () => {
			searchDrawerOpen = !searchDrawerOpen;
		},
		
		toggleAuthDrawer: () => {
			authDrawerOpen = !authDrawerOpen;
		},
		
		toggleDashboard: () => {
			dashboardOpen = !dashboardOpen;
		},
		
		toggleLegalDrawer: () => {
			legalDrawerOpen = !legalDrawerOpen;
		},
		
		closeAllDrawers: () => {
			searchDrawerOpen = false;
			authDrawerOpen = false;
			dashboardOpen = false;
			legalDrawerOpen = false;
		}
	};
}