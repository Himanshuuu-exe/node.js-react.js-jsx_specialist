const fs=require('fs');
var thisModule=this;

exports.processRequest=function(request,response) //might be somewhere problem in resour or resor
{
    response.setContentType("text/html");
    response.write("<!DOCTYPE HTML>");
    response.write("<HTML lang='en'>");
    response.write("<head>");
    response.write("<title>College Message Board</title>");
    response.write("<meta charset='utf-8'>");
    console.log("Current directory :"+process.cwd());
    console.log("Exixtence : fs.existSync(./private/data/admin.conf)");
    if(fs.existsSync("./private/data/admin.conf"))
    {

        response.write("<script>"); 
        response.write("function validateForm(f)"); 
        response.write("{"); 
        response.write("var username=f.username.value.trim();");
        response.write("var password=f.password.value.trim();");
        response.write("if(username.length==0)"); 
        response.write("{"); 
        response.write("alert('username required');"); 
        response.write("f.username.focus();"); 
        response.write("return false;"); 
        response.write("}"); 
        response.write("if(password.length==0)"); 
        response.write("{"); 
        response.write("alert('password required');"); 
        response.write("f.password.focus();"); 
        response.write("return false;"); 
        response.write("}"); 
        response.write("return true;"); 
        response.write("}"); 
        response.write("</script>"); 

        response.write("<body>");
        response.write("<h1>Administrator Module</h1>");
        response.write("<h3>Authentication</h3>");                                 //yaha this client side hh yani form tag ka address
        response.write("<form action='authenticateAdmin' method='post' onsubmit='return validateForm(this)'>");
        response.write("<table border='0'>");
        response.write("<tr>"); 
        response.write("<td>Username</td>");
        response.write("<td><input type='test' id='username' name='username' maxlength='15' size='16'></td>");
        response.write("</tr>");
        response.write("<tr>");
        response.write("<td>Password</td>");
        response.write("<td><input type='password' id='password' name='password' maxlength='15' size='16'></td>");
        response.write("</tr>");
        response.write("<tr>");
        response.write("<td colspan='2' align='center'><button type='submit'>Login</button></td>");
        response.write("</tr>");
        response.write("</table>");
        response.write("</form>");
    }

    else 
    {
        response.write("<body>");
        response.write("<h1>Administrator Module</h1>");
        response.write("<h3>Setup Administrator Account</h3>");
        response.write("<form action='createAdmin' method='post'>");
        response.write("<table border='0'>");
        response.write("<tr>");
        response.write("<td>Username</td>");
        response.write("<td><input type='text' id='username' name='username' maxlength='15' size='16'></td>");
        response.write("</tr>");
        response.write("<tr>");
        response.write("<td>Password</td>");
        response.write("<td><input type='password' id='password' name='password' maxlength='15' size='16'></td>");
        response.write("<tr>");
        response.write("</tr>");
        response.write("<td>Renter Password</td>");
        response.write("<td><input type='password' id='repassword' name='repassword' maxlength='15' size='16'></td>");
        response.write("<tr>");
        response.write("</tr>");
        response.write("<td colspan='2' align='centre'><button type='submit'>Create</button></td>");
        response.write("</tr>");
        response.write("</table>");
        response.write("</form>");
    }
    response.write("</body>");
    response.write("</html>");
    response.close();
}

/*
    var name=request.data["nm"];
    var city=request.data["ct"];
    var gender=request.data["gender"];

    console.log("Name :" + name);
    console.log("City :" + city);
    console.log("Gender :" + gender);

    response.setContentType("text/html");

    response.write("<!DOCTYPE HTML>");
    response.write("<HTML Lang='en'>");
    response.write("<head>");
    response.write("<title> Cool Stuff </title>");
    response.write("<meta charset='utf-8'>");
    response.write("</head>");
    response.write("<body>");
    response.write("<h1> All Is Well <br> </h1>");
    response.write("Hello" + name + "<br>");
    response.write("<p>" + city + "is city of gods </p>"); //resou thing check
    response.write("</body>");
    response.write("</html>");
}

*/