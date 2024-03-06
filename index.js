 //max 3 cisel: Napište funkci max3, která vrátí největší ze tří zadaných čísel. Opět se vyhněte použití funkce Math.max.

  
  const max3 = (num1, num2, num3) => {
    if ((num1 > num2 && num1 > num3))  {
        return num1
    } else { 
    if ((num2 > num1 && num2 > num3)) {
        return num2
    } else {
        return num3
    }

  }
}

 num1 = Number(prompt("Zadej prvni cislo: "))
 num2 = Number(prompt("Zadej druhe cislo: "))
 num3 = Number(prompt("Zadej treti cislo: "))

 document.body.innerHTML += `<p>Největší číslo je: ${max3(num1,num2,num3)}</p>`
 document.body.innerHTML += `<div>Vaše první číslo bylo: ${num1}</div>`
 document.body.innerHTML += `<div>Vaše druhé číslo bylo: ${num2}</div>`
 document.body.innerHTML += `<div>Vaše třetí číslo bylo: ${num3}</div>`


 