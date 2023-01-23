// Js code

function navToGitHub(event)
{
    
     switch(event.target.name) {
        case "bmiCalc":
              location.href ="https://github.com/Virendra360/BMI-Calculator.git";
          break;
        case "tempConv":
            location.href ="https://github.com/Virendra360/Temperature-Convertor.git";
          break;
        case "ageCalc":
            location.href ="https://github.com/Virendra360/Age-Calculator.git";
        break; 
        default:
                 alert("Something went wrong!!")
      }

}

function openProject(event)
{
    //here href are change for template engine use 
    //for clean url
    switch(event.target.name) {
        case "bmiCalc":
              location.href ="projects/bmiCalculator";
          break;
        case "tempConv":
            location.href ="projects/tempConvertor";
          break;
        case "ageCalc":
            location.href ="projects/ageCalculator";
        break; 
        default:
                 alert("Something went wrong!!")
      }

}

// navigate to home from error page
function navToHome()
{
  location.href ="/";
}