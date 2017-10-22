function checkEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);

}

function checkAge() {
	var regEx = new RegExp('^(([0-9][1-9])|([1-9][0-9])|[1-9])$');
	var age = document.getElementById('age').value;
    
    if(regEx.test(age))
	{
       console.log('contains illegal character: ' + document.getElementById('age').value);
	   document.getElementById('age').style.backgroundColor = 'red';
    } else 
	{
       document.getElementById('age').style.backgroundColor = '';
    }
}

function checkName()
{
	var regEx = new RegExp('<');
	
	if(regEx.test(document.getElementById('name').value))
	{
		console.log('contains illegal character');
		document.getElementById('name').style.backgroundColor = 'red';
	}
	else
	{
		document.getElementById('name').style.backgroundColor = '';
	}
}

function myAjaxFunction()
{
	alert('The AJAX has been made.');
	var userForm = document.getElementById('myForm');
	form.reset();
	
}

function validate()
{
	if(checkEmail(document.getElementById('email').value))
	{
		myAjaxFunction();
	}
	else
	{
		alert('User subscription could not be processed, email is invalid');
	}	
}

