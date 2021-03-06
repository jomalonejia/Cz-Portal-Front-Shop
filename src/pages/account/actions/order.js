export const GET_ORDERS = '[Account][Order] Get_Orders'
export const GET_ORDERS_SUCCESS = '[Account][Order] Get_Orders_Success'


export const getOrders = pageNum => ({
  type: GET_ORDERS,
  payload: pageNum
})

export const getOrdersSuccess = orders => ({
  type: GET_ORDERS_SUCCESS,
  payload: orders
})

