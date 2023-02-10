const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
const result = numeros.map(valor => {
    delete ","
    return `<div class="square" id="${valor}"><p>${valor}</p></div>`
}).join("");
document.querySelector('.container').innerHTML = result;

function changecolor(element){
    switch (element.target.id){
        case "1":
            element.target.style.color = "cyan";
        break;    
        case "2":
            element.target.style.color = "pink";
        break;  
        case "3":
            element.target.style.color = "purple";
        break;     
        case "4":
            element.target.style.color = "green";
        break; 
        case "5":
            element.target.style.color = "red";
        break;             
        case "6":
            element.target.style.color = "yellow";
        break;
        case "7":
            element.target.style.color = "white";
        break;     
        case "8":
            element.target.style.color = "crimson";
        break; 
        case "9":
            element.target.style.color = "orange";
        break; 
        case "10":
            element.target.style.color = "blue";
        break; 
        case "11":
            element.target.style.color = "grey";
        break;
        case "12":
            element.target.style.color = "black";
        break; 
    }
}

document.querySelector('.container').addEventListener("mouseover", (element) => changecolor(element));
document.querySelector('.container').addEventListener("click", (e) => document.querySelector('.clonecontainer').innerHTML =  e.target.outerHTML);
