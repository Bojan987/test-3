import  axios from 'axios'

export let getShips= ()=>{
    return axios.get('https://api.spacexdata.com/v3/ships')
}

export let getInfo= ()=>{
    return axios.get('https://api.spacexdata.com/v3/info')
}
