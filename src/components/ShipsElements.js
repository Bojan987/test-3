export let ships = (data)=>{
    let divWrappper = document.createElement('div')
    data.forEach(el => {
        divWrappper.innerHTML += `<a href=${el.url}><img src="${el.image}" alt="missing pic" class="slika"></a>
<p>Ship name : ${el.ship_name}</p>
<p>Ship Type: ${el.ship_type}</p>
<p>Activity : ${el.active}</p>`

    });
return divWrappper

}