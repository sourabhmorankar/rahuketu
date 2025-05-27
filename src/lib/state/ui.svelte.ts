let searchQuery: string = $state('');
let searchResults: any[] = $state([]);
let isSearching: boolean = $state(false);
let searchDrawerOpen: boolean = $state(false);
let authDrawerOpen: boolean = $state(false);
let dashboardOpen: boolean = $state(false);
let legalDrawerOpen: boolean = $state(false);

const hasSearchQuery: boolean = $derived(searchQuery.trim().length > 0);
const searchResultsCount: number = $derived(searchResults.length);

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
		
		setSearchQuery: (query: string) => {
			searchQuery = query;
		},
		
		setSearchResults: (results: any[]) => {
			searchResults = results;
		},
		
		setSearching: (searching: boolean) => {
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