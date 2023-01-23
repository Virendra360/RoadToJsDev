// Js code

	
// BMI Categories:
// Underweight = <18.5
// Normal weight = 18.5–24.9
// Overweight = 25–29.9
// Obesity = BMI of 30 or greater

//Quotes
// Maintaining a healthy weight is important for your heart health.
// Moving more can lower your risk factors for heart disease.
// Eating a healthy diet is the key to heart disease prevention.
// Tracking your heart health stats can help you meet your heart health goals.


//BMI calculations are not adjusted for gender (except when they're used for children and teens),
// so BMI charts are the same for adult men and women.
// Formula: weight (kg) / [height (m)]2

// With the metric system, the formula for BMI is weight in kilograms divided by height in meters squared. Because height is commonly measured in centimeters, divide height in centimeters by 100 to obtain height in meters.

// Example: Weight = 68 kg, Height = 165 cm (1.65 m)
// Calculation: 68 ÷ (1.65)2 = 24.98


const calculateBmi= ()=>{
     const w = document.getElementById('weight').value ;
     const h = document.getElementById('height').value ;
     
     var res = (w)/(Math.pow((h/100),2));
     var result = Math.round(res * 10) / 10

     
     if(result==0 || result==Infinity){
      document.getElementById('resultContainer').innerHTML =`Please enter correct values !!`;
      document.getElementById('resultContainer').style.color = "red";
     }
     else if(result < 18.5)
     {
        document.getElementById('resultContainer').innerHTML =`Status: Underweight <br> BMI: ${result} `;
        document.getElementById('resultContainer').style.color = "#FF6E31";
     }
     else if((result >= 18.5)&&(result<=24.9))
     {
        document.getElementById('resultContainer').innerHTML =`Status: Normal weight <br> BMI: ${result} `;
        document.getElementById('resultContainer').style.color = "green";
     }
     else if((result >= 24.5)&&(result<=29.9))
     {
        document.getElementById('resultContainer').innerHTML =`Status: Overweight <br> BMI: ${result} `;
        document.getElementById('resultContainer').style.color = "#FF6E31";
     }
     else if(result>=30){
        document.getElementById('resultContainer').innerHTML =`Status: Obesity <br> BMI: ${result} `;
        document.getElementById('resultContainer').style.color = "red";
     }
     else {
        document.getElementById('resultContainer').innerHTML =`Please enter correct values !!`;
        document.getElementById('resultContainer').style.color = "red";
     }
}