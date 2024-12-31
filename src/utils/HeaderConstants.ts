export interface ActiveState {
  login: boolean;
  home: boolean;
  aboutUs: boolean;
  contactUs: boolean;
  showCart: boolean;
}

export const ACTIVE_STATES: Record<string, ActiveState> = {
  login: {
    login: false,
    home: false,
    aboutUs: false,
    contactUs: false,
    showCart: false,
  },
  home: {
    login: false,
    home: true,
    aboutUs: false,
    contactUs: false,
    showCart: true,
  },
  aboutsUs: {
    login: false,
    home: false,
    aboutUs: true,
    contactUs: false,
    showCart: true,
  },
  contactUs: {
    login: false,
    home: false,
    aboutUs: false,
    contactUs: true,
    showCart: true,
  },
  bookDetails: {
    login: false,
    home: true,
    aboutUs: false,
    contactUs: false,
    showCart: true,
  },
  cartPage: {
    login: false,
    home: true,
    aboutUs: false,
    contactUs: false,
    showCart: true,
  },
  none: {
    login: false,
    home: false,
    aboutUs: false,
    contactUs: false,
    showCart: true,
  },
};
