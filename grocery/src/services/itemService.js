import config from '../config'

const itemService = {
    //fetch call to GET items
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
    //fetch call to POST items
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