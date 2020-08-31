export let ships = (data)=>{
    let divWrappper = document.createElement('div')
    divWrappper.classList.add('wrapDiv')
    data.forEach(el => {
        divWrappper.innerHTML += `<div class ="innerDiv"><a href=${el.url}><img src="${el.image}" alt="missing pic" class="slika"></a>
<p>Ship name : ${el.ship_name}</p>
<p>Ship Type: ${el.ship_type}</p>
<p>Activity : ${el.active}</p> <hr> </div>`


    });
return divWrappper

}