const planetName=document.getElementById("name");
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange=function(){
    if(this.readyState==4 && this.status==200){
        // console.log(xhttp.responseText);
        const resp=JSON.parse(xhttp.responseText);
        var nam=resp.destinations[1].name;
        // planetName.textContent=nam;
        console.log(typeof(nam));
    }
};
xhttp.open("GET" , "data.json" , true);
xhttp.send();   