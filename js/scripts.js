

//  Message Sent!
//   Thanks for completing the form. We'll be in touch soon!

// Select contact form

let form = document.querySelector("#contact-form");
const success = document.querySelector('div.success');


// form.addEventListener("submit")

if(form){
    form.addEventListener("submit",validateForm)
}


function validateForm(e){
    clearErrors();
    let isValid = true;

    
    let fname = document.getElementById("first-name");

    let lname = document.getElementById("last-name");

    let email = document.getElementById("email");

    let message = document.getElementById("message");

    let checkbox = document.getElementById("consent");
    

    if(fname.value.trim() === ''){
        showError(fname,'First Name is required')
        isValid = false
    }

    if(lname.value.trim() === ''){
        showError(lname,'Last Name is Required')
        isValid = false;
    }

    if(email.value.trim() === ''){
        showError(email,"Email is Required")
        isValid = false
    } 

    else if (!isValidEmail(email.value.trim())){
        showError(email,'Please enter a valid email address')
        isValid = false;
    }

    // Query type validation
    // const queryType = document.querySelector('input[name="query-type"]:checked');
    // console.log (queryType)
    // if(!queryType){
    //     const queryTypeGroup = document.querySelector('.radio-group-response');
    //     showError(queryTypeGroup, 'Please select a query type');
    //     isValid = false;
    // }

    if(message.value.trim() === ''){
        showError(message, 'Message is required');
        isValid = false;
    }

    if(!checkbox.checked){
        showError(checkbox,'You Must consent to being contacted');
        isValid = false
    }

    if (!isValid) {
        e.preventDefault();
      } 
      else {
        e.preventDefault(); 

        window.scroll({
            top: 0,
            behavior: 'smooth'
        });

        setTimeout(() => {
            success.classList.add('submitted');
        }, 300);
        
        setTimeout(() => {
            success.classList.remove('submitted');
        }, 5000);

       form.reset(); // Reset the form fields
      }

}


function showError(element,message){
    // console.log('Inside show error',element,message)

    const errorSpan = element.closest('.form-group, .input-group-response, .name-area , .checkbox-group, .radio-group-response')?.querySelector('.error-message');
    if (errorSpan) {  // Check if errorSpan is not null
        errorSpan.textContent = message;
        errorSpan.style.display = 'block';
        element.classList.add('error');
    } else {
        console.error('Error span not found for', element);
    }
}


function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function clearErrors(){
    const erroMessage = document.querySelectorAll('.error-message');
    erroMessage.forEach(function(span){
        span.style.display = 'none';
        span.textContent = '';
    });

    const errorInput = document.querySelectorAll('.error');
    errorInput.forEach(function(input){
        input.classList.remove('error')
    })
}