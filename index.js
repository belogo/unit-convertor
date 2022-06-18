/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const table = {
    length: 3.281,
    volume: 0.264,
    mass: 2.204
}

const form  = document.getElementById('form-units')
const units = document.getElementById('input-units')
const convertBtn = document.getElementById('convert-btn')
const length = document.getElementById('length')
const volume = document.getElementById('volume')
const mass   = document.getElementById('mass')


/* Metric to Imperial */
function m2i(value, unit){
    return (value * table[unit]).toFixed(3)
}

/* Imperial to Metric */
function i2m(value, unit){
    return (value / table[unit]).toFixed(3)
}


function render(){
    let inputValue = Number(units.value)
    if (inputValue){
        const u = units.value
        length.textContent = `
            ${u} meters = ${m2i(u, 'length')} feet |
            ${u} feet = ${i2m(u, 'length')} meters
        `
       volume.textContent = `
            ${u} liters = ${m2i(u, 'volume')} gallons |
            ${u} gallons = ${i2m(u, 'volume')} liters
       `
       mass.textContent = `
            ${u} kilos = ${m2i(u, 'mass')} pounds |
            ${u} pounds = ${i2m(u, 'mass')} kilos
       `
    }
}

function elasticWidth(){
    let currentInput = String(units.value).length
    
    let widthRems
    for(widthRems = 3 ; currentInput > 0; currentInput--){
        widthRems += 2.4
    }
    
    units.style.width = `${widthRems}rem`
    units.style.backgroundColor = randomBgColor()
}


function randomBgColor(){
    const max = 256
    let c = Math.floor(Math.random() * max)
    return `hsl(${c}, 50%, 50%)`
}

/* Changing width */
units.addEventListener('keyup', elasticWidth)


convertBtn.addEventListener('click', render)


/* Handle form submit on Enter */
form.addEventListener('keypress', function(event){
    if(event.key == "Enter"){
        event.preventDefault()
        render()
    }
})
