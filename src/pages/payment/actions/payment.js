export const PAY = '[Checkout] Pay'

export const pay = carts => ({
  type: PAY,
  payload: carts
})
