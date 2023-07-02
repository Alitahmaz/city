let form  = document.querySelector('form');
let input = document.querySelector('input')
let button = document.querySelector('button')

form.addEventListener("submit",async (e)=>{
    e.preventDefault();
    getdata()
})



 async function getdata(){
    console.log('fgfg');
     const Apikey ="f960bcba87999b57e43f2a3354fc3584"
    let response =await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${Apikey}`)
    let result = await response.json()
console.log(result)
 }