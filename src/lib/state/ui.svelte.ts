interface UIState {
  searchOpen: boolean;
  authDrawerOpen: boolean;
  dashboardOpen: boolean;
  legalDrawerOpen: boolean;
}

let uiState = $state<UIState>({
  searchOpen: false,
  authDrawerOpen: false,
  dashboardOpen: false,
  legalDrawerOpen: false
});

interface UIAPI {
  searchOpen: boolean;
  authDrawerOpen: boolean;
  dashboardOpen: boolean;
  legalDrawerOpen: boolean;
  toggleSearch: () => void;
  toggleAuthDrawer: () => void;
  toggleDashboard: () => void;
  toggleLegalDrawer: () => void;
  closeAll: () => void;
}

export function useUI(): UIAPI {
  return {
    get searchOpen() { return uiState.searchOpen; },
    get authDrawerOpen() { return uiState.authDrawerOpen; },
    get dashboardOpen() { return uiState.dashboardOpen; },
    get legalDrawerOpen() { return uiState.legalDrawerOpen; },
    
    toggleSearch: () => {
      uiState.searchOpen = !uiState.searchOpen;
      if (uiState.searchOpen) {
        uiState.authDrawerOpen = false;
        uiState.dashboardOpen = false;
        uiState.legalDrawerOpen = false;
      }
    },
    
    toggleAuthDrawer: () => {
      uiState.authDrawerOpen = !uiState.authDrawerOpen;
      if (uiState.authDrawerOpen) {
        uiState.searchOpen = false;
        uiState.dashboardOpen = false;
        uiState.legalDrawerOpen = false;
      }
    },
    
    toggleDashboard: () => {
      uiState.dashboardOpen = !uiState.dashboardOpen;
      if (uiState.dashboardOpen) {
        uiState.searchOpen = false;
        uiState.authDrawerOpen = false;
        uiState.legalDrawerOpen = false;
      }
    },
    
    toggleLegalDrawer: () => {
      uiState.legalDrawerOpen = !uiState.legalDrawerOpen;
      if (uiState.legalDrawerOpen) {
        uiState.searchOpen = false;
        uiState.authDrawerOpen = false;
        uiState.dashboardOpen = false;
      }
    },
    
    closeAll: () => {
      uiState.searchOpen = false;
      uiState.authDrawerOpen = false;
      uiState.dashboardOpen = false;
      uiState.legalDrawerOpen = false;
    }
  };
}
