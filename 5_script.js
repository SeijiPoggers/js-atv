const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")
frm.addEventListener("submit", (e)=>{
    e.preventDefault();
    const Hour = Number(frm.inHour.value)
    let France = Hour+5

    if(France>=24){
        France = France - 24
    }
    resp1.innerHTML = `O horário na França é ${France.toFixed(2)}`
})
