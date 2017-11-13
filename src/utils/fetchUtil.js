import * as securityConstants from '../constants/security'

export const fetchObject = (username, password) =>
`username=${username}` +
`&password=${password}` +
`&grant_type=${securityConstants.PASSWORD_GRANT_TYPE}` +
`&client_id=${securityConstants.CLIENT_ID}` +
`&client_secret=${securityConstants.CLIENT_SECRET}`
