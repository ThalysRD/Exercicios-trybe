function clica () {
    const button = document.querySelector("#button")
    let click = 0 
    button.addEventListener("click", () => {
        let count = document.querySelector("#count")
        click+=1
        
        count.innerHTML = click
    })
}

clica ()