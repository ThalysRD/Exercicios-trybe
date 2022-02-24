function submit () {
    let button = document.getElementById("submit")
    button.addEventListener("click", (e) => {
      e.preventDefault()
    })
}

function clearText (){
   let button = document.getElementById("limpar-texto")
    button.addEventListener("clcik" , () => {
        let form = document.querySelectorAll("input")
         console.log(form.value)
        form.value = ""
    })
}