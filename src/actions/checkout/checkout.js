export const CHECKOUT = '[Checkout] Checkout'


export const checkout = carts => ({
  type: CHECKOUT,
  payload: carts
})


