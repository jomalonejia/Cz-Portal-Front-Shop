import { fetchObject } from 'src/utils/fetchUtil'

export const login = (username, password) =>
  fetch('/api/security/oauth/token', {
    method: 'POST',
    headers: {
      /*'Accept': 'application/json',*/
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: fetchObject(username, password)
  })
    .then(response => {
      if (!response.ok) {
        throw Error();
      }
      return response.json();
    })
