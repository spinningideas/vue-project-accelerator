/*
	Encapsulates all outbound http communication from the application to get/set data
	and forms	the basic building block and adaptor for http requests made by the application.
	Also provides way to set auth headers needed by some requests
*/
const httpClient = () => {
  const fetchResponseHandler = (response: any) => {
    // Wraps fetch response and traps most errors and returns raw response as well.
    // Ensures consistent response in form of:
    // {data: [PAYLOADRETURNED_MAY_BE_JSON], code: response.status, response: response }
    if (response.ok) {
      return response
        .json()
        .then((json: any) => {
          // the status was ok and there is a json body
          return Promise.resolve({
            data: json,
            code: response.status,
            response: response
          })
        })
        .catch((err: any) => {
          // the status was ok but there is no json body
          return Promise.resolve({
            data: response,
            code: response.status,
            response: response
          })
        })
    } else {
      return response
        .json()
        .catch((err: any) => {
          // the status was not ok and there is no json body
          return Promise.resolve({
            data: response.statusText,
            code: response.status,
            response: response
          })
        })
        .then((json: any) => {
          // the status was not ok but there is a json body
          return Promise.resolve({
            data: json.error.message,
            code: response.status,
            response: response
          })
        })
    }
  }

  // Modern fetch based methods to put into full use
  // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
  const getDataAuthenticated = async (url: string, token: string) => {
    return await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer ' + token
      }
    }).then((response) => {
      return fetchResponseHandler(response)
    })
  }

  const getData = async (url: string) => {
    return await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json'
      }
    }).then((response) => {
      return fetchResponseHandler(response)
    })
  }

  const postDataAuthenticated = async (url: string, data = {}, token?: string) => {
    let postHeaders = {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    } as any
    if (token && token.length) {
      postHeaders['Authorization'] = 'Bearer ' + token
    }
    return await fetch(url, {
      method: 'POST',
      headers: postHeaders,
      body: JSON.stringify(data)
    }).then((response) => {
      return fetchResponseHandler(response)
    })
  }

  return {
    getData,
    getDataAuthenticated,
    postDataAuthenticated
  }
}

export default httpClient
