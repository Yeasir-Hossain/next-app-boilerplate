export const routes = {
  home: "/",
  adminLogin: "/login",
  admin: {
    dashboard: "/admin/dashboard",
    manageOrders: {
      new: "/admin/manage-orders/new",
      running: "/admin/manage-orders/running",
      completed: "/admin/manage-orders/completed",
      cancelled: "/admin/manage-orders/cancelled"
    },
    manageModerator: {
      moderators: "/admin/manage-moderators/moderators",
      reports: "/admin/manage-moderators/reports"
    },
    manageStudioPartner: {
      studioPartners: "/admin/manage-studio-partners/studio-partners",
      reports: "/admin/manage-studio-partners/reports"
    },
    manageDeliveryPartner: {
      deliveryPartners: "/admin/manage-delivery-partners/delivery-partners",
      reports: "/admin/manage-delivery-partners/reports"
    },
    managePhotoRatio: {
      documentCategory: "/admin/manage-photo-ratio/document-category",
      assignDocType: "/admin/manage-photo-ratio/assign-doc-type"
    },
    manageAreaAndCharges: {
      deliveryCharges: "/admin/manage-area-and-charges/delivery-charges",
      serviceableAreas: "/admin/manage-area-and-charges/serviceable-areas"
    },
    manageCoupons: "admin/manage-coupons",
    manageBanners: "admin/manage-banners",
    manageUsers: "admin/manage-users",
    manageAdmins: "admin/manage-admins",
    generalSettings: "admin/general-settings"
  },
  moderator: {
    dashboard: "/moderator/dashboard",
    newOrders: "/moderator/new-orders",
    reAssignOrders: "/moderator/re-assign-orders",
    pastOrders: "/moderator/past-orders"
  },
  studioPartner: {
    dashboard: "/studio-partner/dashboard",
    newOrders: "/studio-partner/new-orders",
    pastOrders: "/studio-partner/past-orders"
  },
  deliveryPartner: {
    dashboard: "/delivery-partner/dashboard",
    newOrders: "/delivery-partner/new-orders",
    pastOrders: "/delivery-partner/past-orders",
    deliveryBoys: "/delivery-partner/delivery-boys"
  },
  deliveryBoy: {
    dashboard: "/delivery-boy/dashboard",
    newOrders: "/delivery-boy/new-orders",
    pastOrders: "/delivery-boy/past-orders"
  },

  manageLive: {
    home: "/admin/manage-live-matches",
    create: "/admin/manage-live-matches/create",
    details: (id: string) => `/admin/manage-live-matches/${id}`,
    edit: (id: number) => `/admin/manage-live-matches/update/${id}`
  },
  fixture: {
    football: "/admin/fixtures/football",
    cricket: "/admin/fixtures/cricket"
  },
  manageUser: "/admin/manage-users",
  manageAdmin: "/admin/manage-admins",
  generalSettings: "/admin/general-settings",
  highlights: {
    football: {
      home: "/admin/highlights/football",
      create: "/admin/highlights/football/create",
      details: (id: string) => `/admin/highlights/football/${id}`,
      edit: (id: string) => `/admin/highlights/football/update/${id}`
    },
    cricket: {
      home: "/admin/highlights/cricket",
      create: "/admin/highlights/cricket/create",
      details: (id: string) => `/admin/highlights/cricket/${id}`,
      edit: (id: string) => `/admin/highlights/cricket/update/${id}`
    }
  },
  popularFootballEntity: "/admin/popular/football-entities",
  popularCricketEntity: "/admin/popular/cricket-entities",
  eCommerce: {
    dashboard: "/ecommerce",
    products: "/ecommerce/products",
    createProduct: "/ecommerce/products/create",
    productDetails: (slug: string) => `/ecommerce/products/${slug}`,
    ediProduct: (slug: string) => `/ecommerce/products/${slug}/edit`,
    categories: "/ecommerce/categories",
    createCategory: "/ecommerce/categories/create",
    editCategory: (id: string) => `/ecommerce/categories/${id}/edit`,
    orders: "/ecommerce/orders",
    createOrder: "/ecommerce/orders/create",
    orderDetails: (id: string) => `/ecommerce/orders/${id}`,
    editOrder: (id: string) => `/ecommerce/orders/${id}/edit`,
    reviews: "/ecommerce/reviews",
    shop: "/ecommerce/shop",
    cart: "/ecommerce/cart",
    checkout: "/ecommerce/checkout",
    trackingId: (id: string) => `/ecommerce/tracking/${id}`
  },
  searchAndFilter: {
    realEstate: "/search/real-estate",
    nft: "/search/nft",
    flight: "/search/flight"
  },
  support: {
    dashboard: "/support",
    inbox: "/support/inbox",
    supportCategory: (category: string) => `/support/inbox/${category}`,
    messageDetails: (id: string) => `/support/inbox/${id}`,
    snippets: "/support/snippets",
    createSnippet: "/support/snippets/create",
    viewSnippet: (id: string) => `/support/snippets/${id}`,
    editSnippet: (id: string) => `/support/snippets/${id}/edit`,
    templates: "/support/templates",
    createTemplate: "/support/templates/create",
    viewTemplate: (id: string) => `/support/templates/${id}`,
    editTemplate: (id: string) => `/support/templates/${id}/edit`
  },
  logistics: {
    dashboard: "/logistics",
    shipmentList: "/logistics/shipments",
    customerProfile: "/logistics/customer-profile",
    createShipment: "/logistics/shipments/create",
    editShipment: (id: string) => `/logistics/shipments/${id}/edit`,
    shipmentDetails: (id: string) => `/logistics/shipments/${id}`,
    tracking: (id: string) => `/logistics/tracking/${id}`
  },
  executive: {
    dashboard: "/executive"
  },
  analytics: "/analytics",
  file: {
    dashboard: "/file",
    manager: "/file-manager",
    upload: "/file-manager/upload",
    create: "/file-manager/create"
  },
  pos: {
    index: "/point-of-sale"
  },
  eventCalendar: "/event-calendar",
  rolesPermissions: "/roles-permissions",
  invoice: {
    home: "/invoice",
    create: "/invoice/create",
    details: (id: string) => `/invoice/${id}`,
    edit: (id: string) => `/invoice/${id}/edit`
  },
  widgets: {
    cards: "/widgets/cards",
    icons: "/widgets/icons",
    charts: "/widgets/charts",
    maps: "/widgets/maps",
    banners: "/widgets/banners"
  },
  tables: {
    basic: "/tables/basic",
    collapsible: "/tables/collapsible",
    enhanced: "/tables/enhanced",
    pagination: "/tables/pagination",
    search: "/tables/search",
    stickyHeader: "/tables/sticky-header"
  },
  multiStep: "/multi-step",
  forms: {
    profileSettings: "/forms/profile-settings",
    notificationPreference: "/forms/profile-settings/notification",
    personalInformation: "/forms/profile-settings/profile",
    newsletter: "/forms/newsletter"
  },
  emailTemplates: "/email-templates",
  profile: "/profile",
  welcome: "/welcome",
  comingSoon: "/coming-soon",
  accessDenied: "/access-denied",
  notFound: "/not-found",
  maintenance: "/maintenance",
  blank: "/blank",
  auth: {
    signUp1: "/auth/sign-up-1",
    signUp2: "/auth/sign-up-2",
    signUp3: "/auth/sign-up-3",
    signUp4: "/auth/sign-up-4",
    signUp5: "/auth/sign-up-5",
    // sign in
    signIn1: "/auth/sign-in-1",
    signIn2: "/auth/sign-in-2",
    signIn3: "/auth/sign-in-3",
    signIn4: "/auth/sign-in-4",
    signIn5: "/auth/sign-in-5",
    // forgot password
    forgotPassword1: "/auth/forgot-password-1",
    forgotPassword2: "/auth/forgot-password-2",
    forgotPassword3: "/auth/forgot-password-3",
    forgotPassword4: "/auth/forgot-password-4",
    forgotPassword5: "/auth/forgot-password-5",
    // OTP
    otp1: "/auth/otp-1",
    otp2: "/auth/otp-2",
    otp3: "/auth/otp-3",
    otp4: "/auth/otp-4",
    otp5: "/auth/otp-5",

    // bible
    adminLogin: "/super-admin/login",
    dashboard: "/super-admin",
    contentManagement: {
      home: "/super-admin/content-management",
      create: "/super-admin/content-management/create",
      edit: (id: number | string) => `/super-admin/content-management/update/${id}`
    },
    songs: {
      home: "/super-admin/songs",
      create: "/super-admin/songs/create",
      edit: (id: number | string) => `/super-admin/songs/update/${id}`
    },
    songBook: {
      home: "/super-admin/song-book",
      create: "/super-admin/song-book/create",
      edit: (id: number | string) => `/super-admin/song-book/update/${id}`
    },
    video: {
      home: "/super-admin/videos",
      create: "/super-admin/videos/create",
      edit: (id: number | string) => `/super-admin/videos/update/${id}`
    },
    videoCategory: {
      home: "/super-admin/video-category",
      create: "/super-admin/video-category/create",
      edit: (id: number | string) => `/super-admin/video-category/update/${id}`
    },
    language: {
      home: "/super-admin/language",
      create: "/super-admin/language/create",
      edit: (id: number | string) => `/super-admin/language/update/${id}`
    },
    version: {
      home: "/super-admin/version",
      create: "/super-admin/version/create",
      edit: (id: number | string) => `/super-admin/version/update/${id}`
    },
    book: {
      home: "/super-admin/book",
      create: "/super-admin/book/create",
      edit: (id: number | string) => `/super-admin/book/update/${id}`
    },
    chapter: {
      home: "/super-admin/chapter",
      create: "/super-admin/chapter/create",
      edit: (id: number | string) => `/super-admin/chapter/update/${id}`
    },
    verse: {
      home: "/super-admin/verse",
      create: "/super-admin/verse/create",
      edit: (id: number | string) => `/super-admin/verse/update/${id}`
    },
    dailyManna: {
      home: "/super-admin/daily-manna",
      create: "/super-admin/daily-manna/create",
      edit: (id: number | string) => `/super-admin/daily-manna/update/${id}`
    },
    dailyPrayer: {
      home: "/super-admin/daily-prayer",
      create: "/super-admin/daily-prayer/create",
      edit: (id: number | string) => `/super-admin/daily-prayer/update/${id}`
    },
    poster: {
      home: "/super-admin/poster",
      create: "/super-admin/poster/create",
      edit: (id: number | string) => `/super-admin/poster/update/${id}`
    },
    posterCategory: {
      home: "/super-admin/poster-category",
      create: "/super-admin/poster-category/create",
      edit: (id: number | string) => `/super-admin/poster-category/update/${id}`
    },
    questionAnswers: {
      home: "/super-admin/question-answers",
      create: "/super-admin/question-answers/create",
      edit: (id: number | string) => `/super-admin/question-answers/update/${id}`
    },
    questionAnswersCategories: {
      home: "/super-admin/question-answers-categories",
      create: "/super-admin/question-answers-categories/create",
      edit: (id: number | string) => `/super-admin/question-answers-categories/update/${id}`
    },
    tag: {
      home: "/super-admin/tag",
      create: "/super-admin/tag/create",
      edit: (id: number | string) => `/super-admin/tag/update/${id}`
    },
    example: {
      home: "/super-admin/example",
      create: "/super-admin/example/create",
      edit: (id: number | string) => `/super-admin/example/update/${id}`
    },
    dictionary: {
      home: "/super-admin/dictionary",
      create: "/super-admin/dictionary/create",
      edit: (id: number | string) => `/super-admin/dictionary/update/${id}`
    },
    manageLive: {
      home: "/super-admin/manage-live-matches",
      create: "/super-admin/manage-live-matches/create",
      edit: (id: number | string) => `/super-admin/manage-live-matches/update/${id}`
    },
    fixture: {
      football: "/super-admin/fixtures/football",
      cricket: "/super-admin/fixtures/cricket"
    },
    news: {
      news: `/super-admin/news`,
      category: "/super-admin/news/category",
      create: "/super-admin/news/create"
    },
    users: {
      users: `/super-admin/users`,
      create: "/super-admin/users/create"
    },
    dailyMannas: {
      dailyMannas: `/super-admin/daily-mannas`,
      create: "/super-admin/daily-mannas/create"
    },
    manageUser: "/super-admin/manage-users",
    manageAdmin: "/super-admin/manage-admins"
  }
};
