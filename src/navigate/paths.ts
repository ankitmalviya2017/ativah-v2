import WishlistPage from "@/app/(customer)/wishlist/page"

const paths = {
  home: () => '/',
  customers: () => '/',

  // Auth
  auth: () => '/auth',
  signIn: () => `${paths.auth()}/login`,
  signUp: () => `${paths.auth()}/register`,
  forgotPassword: () => `${paths.auth()}/forgot-password`,
  resetPassword: () => `${paths.auth()}/reset-password`,

  // Customer
  shop: () => '/shop',
  product: (id: string) => `/p/${id}`,
  wishlist: () => '/wishlist',
  cart: () => '/cart',
  checkout: () => '/checkout',
  order: (id: string) => `/order/${id}`,
  orders: () => '/orders',
  profile: () => '/profile',
  settings: () => '/settings',
  sale: () => '/sale',

}

export default paths
