function validate1()
{
    var uname = document.getElementById("username");
    var mobile = document.getElementById("mobile");
    var mail = document.getElementById("mail");
    
    var regx = /sf/i;
    var regx_mobile = /^[7-9]\d{9}$/;
    var regx_mail =/^([a-z 0-9\.-]+)@([a-z0-9-]+).([a-z]{2,8})(.[a-z]{2,8})?$/;
    
    if(regx.test(uname.value))
    {
        document.write("Valid user name<br>")
    }
    else
    {
        document.write("InValid user name<br>");
    }
    if(regx_mobile.test(mobile.value))
    {
        document.write("Valid mobile<br>");
    }
    else{
        document.write("InValid mobile<br>");
    }
    if(regx_mail.test(mail.value))
    {
        document.write("Valid mail<br>");
    }
    else
    {
        document.write("InValid mail<br>");
    }
    // if(username.value=="" || pass.value=="")
    // {
    //     document.getElementById("invalid").style.visibility="visible";
    //     return false
    // }
    // return true
}