 const fs=require('fs');
var thisModule=this;

exports.processRequest=function(request,response)
{
    /*
    1- Extract rollNumber and name form request object
    2- check if the roll number exist
        if yes then send back the same form, but the textboxes
        should contain the same data that the user had feeded,
        by with the respective error message
    3- add record to data file
    2- send back the same StudentAddForm.html, but this time
    with a message that the student has been added

    */
    response.close();
}
