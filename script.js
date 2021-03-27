function check(input) {
    if (input.value <= 0) {
      alert('The number must  be greater than zero!');
      input.value=input.defaultValue;  
    } else {
      // input is fine -- reset the error message
      input.setCustomValidity('');
    }
  }


function compute()
{

    const currentYear  = new Date().getFullYear();
    
    var Amount = document.getElementById("principal").value;

    var rate = document.getElementById("rate").value/100;
    var years= document.getElementById("Years").value;
    var final_year=Number(currentYear)+Number(years);

    var total=Amount*(1+rate)**years;

    var result="If you deposit "+"<mark>"+Amount.toString()+"</mark>"+",<br>"
    +"at an interest rate of "+"<mark>"+(rate*100).toFixed(1)+"%."+"</mark>"+"<br>"+
    "You will receive an amount of "+"<mark>"+total.toFixed(1)+"</mark>"+"<br>"+
    "in the year "+"<mark>"+final_year.toString()+"</mark>";
 
    return result

    
    
}
