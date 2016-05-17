var output = document.getElementById('output');
//output.innerHTML="update HTML";

//AJAX call
var ajaxhttp = new XMLHttpRequest();
console.log(ajaxhttp);
var url = "json.json";

ajaxhttp.open("GET",url,true);
output.innerHTML="Retrieving program requirements";
ajaxhttp.setRequestHeader("content-type","application/json");

ajaxhttp.send();

ajaxhttp.onreadystatechange = function(){
    if (ajaxhttp.readyState == 4 && ajaxhttp.statusText == "OK"){
        output.innerHTML = "";
        var jcontent = JSON.parse(ajaxhttp.responseText);
        for (program in jcontent){
        if (jcontent[program].College == "Daniel Felix Ritchie School of Engineering and Computer Science" && jcontent[program].Department == "Engineering"){ output.innerHTML += jcontent[program].College + ' , ' + jcontent[program].Department + ", " + jcontent[program].Degrees + '<br>';} 
        }
    } else if (ajaxhttp.statusText != "OK") {
        console.log(ajaxhttp.responseText);
    }
};




