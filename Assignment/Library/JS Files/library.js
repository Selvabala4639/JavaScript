function validate()
{

     
    var rowCount=2;
    var table = document.getElementById("bookTable");
    var bookName = checkBookName();
    var email = checkEmail();
    var authorName = checkAuthorName();
    var year = checkYear();
    var price = checkPrice();

    var category = document.getElementById("category");
    var categorySelected;
    if(category[0].selected)
    {
        categorySelected = category[0].value;
    }
    else if(category[1].selected)
    {
        categorySelected = category[1].value;
    }
    else if(category[2].selected)
    {
        categorySelected = category[2].value;
    }
    AddBookTitle(bookName+" Book Details");
    AddRow("Category", categorySelected);
    AddRow("Book", bookName);
    AddRow("Author Email", email);
    AddRow("Author Name", authorName);
    AddRow("Published Year", year);
    AddRow("Price", price);
    function AddBookTitle(section)
    {
        var row = table.insertRow(rowCount);
        var cell1 = row.insertCell(0);
        
        cell1.innerHTML = section;
        rowCount++;
    }
    function AddRow(section, userDetail)
    {
        var row = table.insertRow(rowCount);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = section;
        cell2.innerHTML = userDetail;
        rowCount++;
    }
    
    return false;
}

function Back()
{
    document.getElementById("bookDetails").style.display="none";
    document.getElementById("addBook").style.display="block";
    return false;
}
function Show()
{
    document.getElementById("bookDetails").style.display="block";
    document.getElementById("addBook").style.display="none";
    return false;
}

function checkBookName()
{
    var bookName = document.getElementById("bookName").value;
    var regx_bookName = /^[a-zA-Z]{2,50}$/;
    if(bookName=="")
    {
        document.getElementsByClassName("invalid")[0].style.visibility="visible";
        document.getElementsByClassName("valid")[0].style.visibility="hidden";
        return false;
    }
    else
    {
        if(bookName.length>50)
        {
            document.getElementsByClassName("booklength")[0].style.visibility="visible";
            document.getElementsByClassName("invalid")[0].style.visibility="visible";
                document.getElementsByClassName("valid")[0].style.visibility="hidden";
        }
        else
        {
            if(regx_bookName.test(bookName))
            {   
                document.getElementsByClassName("valid")[0].style.visibility="visible";
                document.getElementsByClassName("invalid")[0].style.visibility="hidden";
                return bookName;
            }
            else{
                
                document.getElementsByClassName("invalid")[0].style.visibility="visible";
                document.getElementsByClassName("valid")[0].style.visibility="hidden";
                return false;
            }
        }
    }
}

function checkEmail()
{
    var email = document.getElementById("email").value;
    var regx_email = /^([a-z 0-9\.-]+)@([a-z0-9-]+).([a-z]{2,8})$/;
    if(email=="")
    {
        document.getElementsByClassName("invalid")[1].style.visibility="visible";
        document.getElementsByClassName("valid")[1].style.visibility="hidden";
        return false;
    }
    else
    {
        if(regx_email.test(email))
        {
            document.getElementsByClassName("valid")[1].style.visibility="visible";
            document.getElementsByClassName("invalid")[1].style.visibility="hidden";
            return email;
        }
        else{
            document.getElementsByClassName("invalid")[1].style.visibility="visible";
            document.getElementsByClassName("valid")[1].style.visibility="hidden";
            return false;
        }
    }
}

function checkAuthorName()
{
    var authorName = document.getElementById("authorName").value;
    var regx_authorName = /^[a-zA-Z]{2,50}$/;
    if(authorName=="")
    {
        document.getElementsByClassName("invalid")[2].style.visibility="visible";
        document.getElementsByClassName("valid")[2].style.visibility="hidden";
        return false;
    }
    else
    {
        if(authorName.length>50)
        {
            document.getElementsByClassName("authorlength")[0].style.visibility="visible";
            document.getElementsByClassName("invalid")[2].style.visibility="visible";
            document.getElementsByClassName("valid")[2].style.visibility="hidden";
            return false;
        }
        else
        {
            if(regx_authorName.test(authorName))
            {   
                document.getElementsByClassName("valid")[2].style.visibility="visible";
                document.getElementsByClassName("invalid")[2].style.visibility="hidden";
                return authorName;
            }
            else{
                document.getElementsByClassName("specialChar")[0].style.visibility="visible";
                document.getElementsByClassName("invalid")[2].style.visibility="visible";
                document.getElementsByClassName("valid")[2].style.visibility="hidden";
                return false;
            }
        }
        
    }
}

function checkYear()
{
    var year = document.getElementById("year").value;
    var regx_year =/^[0-9]{4,4}$/;
    if(year=="")
    {
        document.getElementsByClassName("invalid")[3].style.visibility="visible";
        document.getElementsByClassName("valid")[3].style.visibility="hidden";
        return false;
    }
    else
    {
        if(year>=1000 && year<=2025)
        {
            if(regx_year.test(year))
            {   
                document.getElementsByClassName("valid")[3].style.visibility="visible";
                document.getElementsByClassName("invalid")[3].style.visibility="hidden";
                return year;
            }
            else{
                document.getElementsByClassName("invalid")[3].style.visibility="visible";
                document.getElementsByClassName("valid")[3].style.visibility="hidden";
                return false;
            }
        }
        else
        {
            document.getElementsByClassName("invalid")[3].style.visibility="visible";
                document.getElementsByClassName("valid")[3].style.visibility="hidden";
                return false;
        }
    }
}

function checkPrice()
{
    var price = document.getElementById("price").value;
    var regx_price = /^([0-9]{1,10})\.([0-9]{2,2})$/;
    if(price=="")
    {
        document.getElementsByClassName("invalid")[4].style.visibility="visible";
        document.getElementsByClassName("valid")[4].style.visibility="hidden";
        return false;
    }
    else
    {
        if(regx_price.test(price))
            {   
                document.getElementsByClassName("valid")[4].style.visibility="visible";
                document.getElementsByClassName("invalid")[4].style.visibility="hidden";
                return price;
            }
            else{
                document.getElementsByClassName("invalid")[4].style.visibility="visible";
                document.getElementsByClassName("valid")[4].style.visibility="hidden";
                return false;
            }
    }
}