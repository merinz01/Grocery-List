function generation(){

    //Creation of XHR object
    var xhttp=new XMLHttpRequest();

    //Event listener
    xhttp.onreadystatechange = function(){
    
        //Condition
    if(this.readyState==4 && this.status==200){
        var response = JSON.parse(this.responseText);
        var Jgrocery= response.grocery;
        var table="<tr><th>Sl_No</th><th>Name</th><th>Quantity</th><th>Unit</th><th>Department</th><th>Notes</th></tr>"
        
        for(var i=0;i<Jgrocery.length;i++){
            table+="<td>"+Jgrocery[i].Sl_No+"</td>";
            table+="<td>"+Jgrocery[i].Name+"</td>";
            table+="<td>"+Jgrocery[i].Quantity+"</td>";
            table+="<td>"+Jgrocery[i].Unit+"</td>";
            table+="<td>"+Jgrocery[i].Department+"</td>";
            table+="<td>"+Jgrocery[i].Notes+"</td></tr>";
        }

        document.getElementById("data").innerHTML=table;
        }    
    }

    xhttp.open("GET","grocery.json",true);
    xhttp.send();
}