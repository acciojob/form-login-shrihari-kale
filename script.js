function getFormvalue() {
    //Write your code here
    let firstName = document.forms[0].fname.value.trim();
    let lastName = document.forms[0].lname.value.trim();

    let fullName = firstName + " " + lastName;

    alert(fullName.trim());
	}

