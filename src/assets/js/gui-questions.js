
$(document).ready(function(){
    $('#salute-menu').on('click', function(e){
        var $target = $(e.target);
        $target.is('li') && $('#GUI-salute').text($target.text())
    });

    $('#age-menu').on('click', function(e){
        var $target = $(e.target);
        $target.is('li') && $('#GUI-agegroup').text($target.text())
    });
    
    $('#emgy-salute-menu').on('click', function(e){
        var $target = $(e.target);
        $target.is('li') && $('#GUI-emgy-salute').text($target.text())
    });
});

//prevent the form submit on enter
$(document).ready(function(){ 
    $(".GUI-Birth-form").submit(function(event){ 
        event.preventDefault(); 
    }); 
    $(".GUI-Phonenum-form").submit(function(event){ 
        event.preventDefault(); 
    });
});

function checkbirth(inputText){
  var dateformat = /^(0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])[\/\-]\d{4}$/;  
  // Match the date format through regular expression  
  if(inputText.value.match(dateformat)) 
  {  
    //Test which seperator is used '/' or '-'  
    var opera1 = inputText.value.split('/');  
    var opera2 = inputText.value.split('-');  
    lopera1 = opera1.length;  
    lopera2 = opera2.length;  
    // Extract the string into month, date and year  
    if (lopera1>1) 
    {  
      var pdate = inputText.value.split('/');  
    }  
    else if (lopera2>1)  
    {  
      var pdate = inputText.value.split('-');  
    }  
    var mm = parseInt(pdate[0]);  
    var dd = parseInt(pdate[1]);  
    var yy = parseInt(pdate[2]);  
    // Create list of days of a month [assume there is no leap year by default]  
    var ListofDays = [31,28,31,30,31,30,31,31,30,31,30,31];  
    if (mm==1 || mm>2)  
    {  
      if (dd>ListofDays[mm-1])  
        {  
          //alert('Invalid date format!');  
          inputText.value = '';
          document.getElementById('birth-warning').innerHTML = 'Invalid date format!';
          return false;  
         }  
     }  
    if (mm==2)  
    {  
      var lyear = false;  
      if ( (!(yy % 4) && yy % 100) || !(yy % 400))   
      {  
        lyear = true;  
      }  
      if ((lyear==false) && (dd>=29))  
      {  
        inputText.value = '';
        inputText.placeholder = 'mm/dd/yyyy or mm-dd-yyyy';
        document.getElementById('birth-warning').innerHTML = 'Invalid date format!';
        return false;  
      }  
      if ((lyear==true) && (dd>29))  
      { 
        inputText.value = ''; 
        inputText.placeholder = 'mm/dd/yyyy or mm-dd-yyyy';
        document.getElementById('birth-warning').innerHTML = 'Invalid date format!';
        return false;  
      }  
    }  
  }  
  else  
  {  
    inputText.value = '';
    inputText.placeholder = 'mm/dd/yyyy or mm-dd-yyyy';
    document.getElementById('birth-warning').innerHTML = 'Invalid date format!';
    return false; 
  }  
}



function checkzipcode(inputElem){
  var inputText = inputElem.value;
  var isValidZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(inputText);
    if(false==isValidZip) 
    {  
      if (inputElem.id == 'zipcode'){
        inputElem.value = '';
        document.getElementById('zipcode-warning').innerHTML = 'Please match the requested format.';
      }
      
      //for the emergency contact
      if (inputElem.id == 'emgyzipcode'){
        inputElem.value = '';
        document.getElementById('emgy-zipcode-warning').innerHTML = 'Please match the requested format.';
      }
    }
  }

  
function checkphone(inputElem){
  var inputText = inputElem.value;
  var isValid = /^(?:\(\d{3}\)|\d{3})[- ]?\d{3}[- ]?\d{4}$/.test(inputText);
  if(false==isValid) 
    {  
      inputElem.value = '';
      document.getElementById('phone-warning').innerHTML = 'Please match the requested format.';
    }
}  




function removewarning(inputElem){
  if(inputElem.id == 'zipcode'){
    document.getElementById('zipcode-warning').innerHTML = '';
  }
  
  //for the emergency contact
  if(inputElem.id == 'emgyzipcode'){
    document.getElementById('emgy-zipcode-warning').innerHTML = '';
  }

  if(inputElem.id == 'phonenum'){
    document.getElementById('phone-warning').innerHTML = '';
  }

  if(inputElem.id == 'birth'){
    document.getElementById('birth-warning').innerHTML = '';
  }
}
