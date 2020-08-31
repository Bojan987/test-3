export let element = (data)=>{
let wrapDiv = document.createElement('div')

let title = document.createElement('h1')
title.textContent = data.name
let founder = document.createElement('p')
founder.textContent = `Founder:  ${data.founder}`
let founded = document.createElement('p')
founded.textContent = `Founded: ${data.founded}`
let line = document.createElement('hr')
// let sbox = document.createElement('select')
// let option1 = document.createElement('option')
// option1.textContent = "svi"
// option1.value = "svi"
// let option2 = document.createElement('option')
// option2.textContent = "Aktivni"
// option2.value = "Aktivni"
// let option3 = document.createElement('option')
// option3.textContent = "Neaktivni"
// option3.value = "Neaktivni"
// sbox.append(option1,option2,option3)
wrapDiv.append(title,founder,founded,line)

return wrapDiv
}