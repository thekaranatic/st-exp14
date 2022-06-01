function f1() {
	var name=document.getElementById("uname").value;
	if(name=="") {						
		alert("please enter your name: ");
		return false;
	}
	return true;
}

function f2() {
  var phno=document.getElementById("phno").value;
	if(phno.length!=10) {
		alert("please enter valid phone number: ");
		return false;
	}
	return true;
}


function f3() {
	var pswd=document.getElementById("pswd").value;
	return true;
}

function end() {
	if(f3())
		confirm("Thank you\nYour account has been created");
}
