import request from 'superagent'


export function getProducts () {
  return request
  .get('api/vi/products')
    .then(res => res.body
    )
}
