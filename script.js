let weight = document.getElementById("weight");
let height = document.getElementById("height");
let system = document.getElementById("system");
var w, h, bmi;

let weightLabel = document.getElementById("weightLabel");
let heightLabel = document.getElementById("heightLabel");

let calculateBtn = document.getElementById("calculateBtn");
let convertBtn = document.getElementById("convertBtn");
let bmiDisplay = document.getElementById("bmiDisplay");
let category = document.getElementById("category");

function categoryBMI(){
 if (bmi<18.5){
  category.innerText = "You are Underweight";
 }
 else if(bmi>18.5 || bmi<24.9){
  category.innerText = "You hold a Normal Weight";
 }
 else if (bmi>24.9 || bmi<29.9){
  category.innerText = "You are Overweighted";
 }
 else if (bmi>29.9){
  category.innerText = "You are Obesed";
 }
 else{
  alert("Invalid data entered");
 }
}

function calculate(){
   w = weight.value;
   h = height.value;
   if(weightLabel.innerText == "Enter Weight in Kilograms" && heightLabel.innerText == "Enter Height in CM" && system.innerText == "Metric System"){
   bmi = (w/((h*h)/10000));
  bmiDisplay.innerText = `Your BMI is ${bmi}`;
  categoryBMI();
}
else{
   bmi = 703 * (w/((h*h)));
  bmiDisplay.innerText = `Your BMI is ${bmi}`;
  categoryBMI();
}
}


function convert(){
    if(weightLabel.innerText == "Enter Weight in Kilograms" && heightLabel.innerText == "Enter Height in CM" && system.innerText == "Metric System"){
    weightLabel.innerText = "Enter Weight in Pounds";
    heightLabel.innerText = "Enter Height in Inches";
    system.innerText = "Imperial System";
}
else{
    weightLabel.innerText = "Enter Weight in Kilograms";
    heightLabel.innerText = "Enter Height in CM";
    system.innerText = "Metric System";
}
}

calculateBtn.addEventListener("click", calculate);
convertBtn.addEventListener("click",convert);