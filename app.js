// variabels
const names = ["Elin", "Sofia", "Neha", "Fanny", "Alestry", "Omid", "Irina", "Anna", "Matilda", "August", "Paul", "Reda"];
const generatorBtn = document.querySelector(".generator-btn");
const nameOneText = document.querySelector(".name1");
const nameTwoText = document.querySelector(".name2");

// eventlisterners
generatorBtn.addEventListener("click", generateName);

//functions
function generateName(){
    const nameOne = names[Math.floor(Math.random()*names.length)];
    nameOneText.innerText = nameOne;
    const nameTwo = names[Math.floor(Math.random()*names.length)];
    nameTwoText.innerText = nameTwo;
    
    if (nameOne == nameTwo) {
        console.log('samma namn');
        generateName();
    }
      
}

