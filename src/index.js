import { getInfo, getShips } from "./services";
import { element } from "./components/Element";
import { ships } from "./components/ShipsElements";

console.log('Hello project');

let headerDiv = document.querySelector('#header')
// let shipInfo = document.querySelector('#info')
let sbox = document.querySelector('#sbox')
let allShips = document.querySelector('#allships')




getInfo().then(res=>{
    // console.log(res)
    
    headerDiv.appendChild(element(res.data))

})

getShips().then(res =>{
console.log(res.data)
allShips.appendChild(ships(res.data))


})


sbox.addEventListener('change',e=>{
    console.log(typeof e.target.value)

    allShips.innerHTML=''
    getShips().then(res=>{
        
     let filteredShips = res.data.filter(el=>el.active.toString() === e.target.value)
        console.log(filteredShips)
        allShips.appendChild(ships(filteredShips))
        if(e.target.value ==="svi") allShips.appendChild(ships(res.data))
    })

    
    
})