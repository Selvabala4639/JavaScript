function validate()
{
    var firstName = document.getElementById("fname");
    var lastName = document.getElementById("lname");
    var password = document.getElementById("password");
    alert(firstName.value);
    if(firstName.value.trim()=="")
    {
        // alert("No blank values allowed");
        document.getElementsById("invalid").style.visibility ="visible";
        return false;
    }
    else{
        return true;
    }
}
 
function reset()
{

}
