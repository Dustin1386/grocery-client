import config from '../config'

const itemService = {
    getItem(item){
        return fetch(`${config.API_ENDPOINT}/item`,{
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(item),
        })
        .then(res =>{
            (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()
        })
    },
    postItem(item){
        return fetch(`${config.API_ENDPOINT}/item`,{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(item),
        })
        .then(res =>{
            (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()
        })
    }
}

export default itemService