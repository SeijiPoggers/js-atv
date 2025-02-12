const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")
frm.addEventListener("submit", (e)=>{
    e.preventDefault();
    const Total = Number(frm.inNum.value)
    let Rariz = Math.sqrt(Total)
    resp1.innerHTML = `A raíz quadrada de ${Total} é ${Rariz}`
})
