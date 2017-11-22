export const GET_ORDERS = '[Account][Order] Get_Orders'
export const GET_ORDERS_SUCCESS = '[Account][Order] Get_Orders_Success'


export const getOrders = () => ({
  type: GET_ORDERS,
})

export const getOrdersSuccess = orders => ({
  type: GET_ORDERS_SUCCESS,
  payload: orders
})

