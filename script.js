function compute()
{

    const currentYear  = new Date().getFullYear();
    
    var Amount = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value/100;
    var years= document.getElementById("Years").value;

    var final_year=Number(currentYear)+Number(years);

    var total=Math.round(Amount*(1+rate)**years);

    var result="If you deposit "+"<mark>"+Amount.toString()+"</mark>"+",<br>"
    +"at an interest rate of "+"<mark>"+(rate*100).toFixed(1)+"%."+"</mark>"+"<br>"+
    "You will receive an amount of "+"<mark>"+total.toString()+"</mark>"+"<br>"+
    "in the year "+"<mark>"+final_year.toString()+"</mark>";
 
    return result

    
    
}
