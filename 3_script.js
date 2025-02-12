const form = document.querySelector('form')
const resp1 = document.getElementById('one')
const resp2 = document.getElementById('two')
const resp3 = document.getElementById('three')

form.addEventListener("submit", (e)=>{
    e.preventDefault()
    resp1.innerHTML = ` `
    resp2.innerHTML = ` `
    resp3.innerHTML = ` `

    const saque = Number(form.inSaque.value)
    let final = saque

    let cem = Math.floor(final / 100)
    final = final - (cem*100)
    let cinquenta = Math.floor(final / 50)
    final = final - (cinquenta*50)
    let dez = Math.floor(final / 10)
    final = final - (dez*10)
    
    if(final > 0){
        resp1.innerHTML = `Saque inválido`
    }else{
        resp1.innerHTML = `Notas de cem: ${cem}`
        resp2.innerHTML = `Notas de cinquenta: ${cinquenta}`
        resp3.innerHTML = `Notas de dez: ${dez}`
    }
})