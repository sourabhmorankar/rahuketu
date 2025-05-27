let searchQuery = $state('');
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
		
		setSearchQuery: (query) => {
			searchQuery = query;
		},
		
		setSearchResults: (results) => {
			searchResults = results;
		},
		
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