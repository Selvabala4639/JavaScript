function chooseRadio(){
    var rd1 = document.getElementById("tamil");
    var rd2 = document.getElementById("english");
    if(rd1.checked==true)
    {
        alert(rd1.value);
    }
    else
    {
        alert(rd2.value);
    }
}