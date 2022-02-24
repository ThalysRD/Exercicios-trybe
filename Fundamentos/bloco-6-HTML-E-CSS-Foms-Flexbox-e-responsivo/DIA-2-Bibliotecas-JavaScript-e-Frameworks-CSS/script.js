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

var picker = new Pikaday({
    field: document.getElementById('datepicker'),
    format: 'D/M/YYYY',
    toString(date, format) {
        // you should do formatting based on the passed format,
        // but we will just return 'D/M/YYYY' for simplicity
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    },
    parse(dateString, format) {
        // dateString is the result of `toString` method
        const parts = dateString.split('/');
        const day = parseInt(parts[0], 10);
        const month = parseInt(parts[1], 10) - 1;
        const year = parseInt(parts[2], 10);
        return new Date(year, month, day);
    }
});

const validation = new JustValidate('#form');

validation
  .addField('#name', [
    {
        rule:'required',
        errorMessage:"Nome é necessário"
    },{
    
      rule: 'minLength',
      value: 10,
      errorMessage: "Nome completo por faovr"
      
    },
    {
      rule: 'maxLength',
      value: 50,
    }
  ])
  .addField('#email', [
    {
        rule:"minLength",
        value: 10,
        
    } , {
      rule: 'required',
      errorMessage: 'E-mail é necessário',
    },
    {
      rule: 'email',
      errorMessage: 'E-mail inválido',
      
    }, {
        rule:"maxLength",
        value: 50,
        
    }
  ]).addField('#text-area', [
    {
      rule: 'required',
      errorMessage: 'Conta alguma coisa ai pra gente por favor!',
     
    }
   
  ]);;

  function toodynhoSeu (){
      let img = document.getElementById("toodynhoSeu")
      img.addEventListener("click", (e) => {
          event = e.target
          
      })
  }