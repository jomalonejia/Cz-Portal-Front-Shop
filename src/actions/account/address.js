export const ADD_ADDRESS = '[Account][Address] Add_Address'
export const ADD_ADDRESS_SUCCESS = '[Account][Address] Add_Address_Success'
export const GET_ADDRESS = '[Account][Address] Get_Address'
export const GET_ADDRESS_SUCCESS = '[Account][Address] Get_Address_Success'
export const UPDATE_ADDRESS_SUCCESS = '[Account][Address] Update_Address_Success'
export const TOGGLE_ADDRESS = '[Account][Address] Toggle_Address'

export const addAddress = address => ({
  type: ADD_ADDRESS,
  payload: address
})

export const addAddressSuccess = address => ({
  type: ADD_ADDRESS_SUCCESS,
  payload: address
})
export const getAddress = () => ({
  type: GET_ADDRESS,
})

export const getAddressSuccess = addresses => ({
  type: GET_ADDRESS_SUCCESS,
  payload: addresses
})

export const updateAddressSuccess = (address,index) => ({
  type: UPDATE_ADDRESS_SUCCESS,
  payload: {address:address,index:index}
})

export const toggleAddress = addressId => ({
  type: TOGGLE_ADDRESS,
  payload: addressId
})
