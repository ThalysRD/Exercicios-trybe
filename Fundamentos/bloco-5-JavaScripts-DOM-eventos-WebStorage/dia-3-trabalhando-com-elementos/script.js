function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
function createDaysOfTheMonth(){
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    let calendar = document.querySelector("#days")
    for(let i = 0; i < dezDaysList.length; i+=1){
        let day = dezDaysList[i]

        let dayExato = document.createElement("li")
         
        if (day === 24 || day === 31){
            dayExato.className = "day holiday"
            dayExato.innerHTML = day
            calendar.appendChild(dayExato)
        } else if (day === 4 || day === 11 || day === 18) {
            dayExato.className = "day friday"
            dayExato.innerHTML = day
            calendar.appendChild(dayExato)
        } else if (day === 25){
            dayExato.className = "day holiday friday"
            dayExato.innerHTML = day
            calendar.appendChild(dayExato)
        } else {
            dayExato.innerHTML = day
            dayExato.className = "day"
            calendar.appendChild(dayExato)
        }
    }

    
}

createDaysOfTheMonth()


function createHolidayButton(nomeDoBotão){
    let buttonC = document.querySelector(".buttons-container")
    let newB = document.createElement("button")
    let newBId = "btn-holiday"

    newB.innerHTML = nomeDoBotão
    newB.id = newBId
    buttonC.appendChild(newB)
}


createHolidayButton("Feriados")

function displayHolidays(){
    let getHolidayButton = document.querySelector("#btn-holiday")
    let getHolidays = document.querySelectorAll(".holiday")
    let backgroundColor = "rgb(238,238,238)"
    let setnewColor = "white"

    getHolidayButton.addEventListener("click",function(){
        for (let i = 0; i < getHolidays.length; i+=1){
            if (getHolidays[i].style.backgroundColor === setnewColor){
                getHolidays[i].style.backgroundColor = backgroundColor
            } else {
                getHolidays[i].style.backgroundColor = setnewColor
            }
        }
    })
}

displayHolidays ()