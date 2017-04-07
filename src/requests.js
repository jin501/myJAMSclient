export function getData() {
  return fetch('http://localhost:3002/actions')
    .then( res => {
      return res.json()
    })
}

export function createAction(action){
  const requestURL = 'http://localhost:3002/actions/'
  let data = {
    method: "post",
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({event: action})
  };
  debugger
  return fetch(requestURL, data)
    .then(res => res.json());
}
