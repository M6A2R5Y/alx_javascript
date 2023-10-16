function welcome(firstName, lastName) 
//function named welcome with two arguments
{
    let fullName = firstName + " " + lastName;
    //concatenating firstName and lastName with a space in between to create a full name variable
  
    function displayFullName()
    ///function named displayFullName nested within welcome function
    {
      alert("Welcome " + fullName + "!");
      //alert message that includes the full name variable and an exclamation mark
    }
  
    displayFullName();
    //calling the displayFullName function
  }