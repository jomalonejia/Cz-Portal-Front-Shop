export const CHECKOUT = '[Checkout] Checkout'
export const GO_TO_PAY = '[Checkout] GoToPay'


export const checkout = carts => ({
  type: CHECKOUT,
  payload: carts
})

export const goToPay = carts => ({
  type: GO_TO_PAY,
  payload: carts
})


