var names_of_people = [];

function Submit(){
    var GuestName = document.getElementById("name1").value;
    names_of_people.push(GuestName);
    document.getElementById("display_names").innerHTML = names_of_people;  
}

function Show(){                                            
    var i=names_of_people.join("<br>");
    document.getElementById("show_names").innerHTML= i.toString(); 
}

function Sorted(){
    names_of_people.sort();
    var i=names_of_people.join("<br>");
    document.getElementById("sorted_names").innerHTML = i.toString(); 
}

function Search(){
    var s= document.getElementById("search_name").value;
    var found=0;
    var j;
    for (j=0; j<names_of_people.length; j++) 
    {
        if(s==names_of_people[j]){
            found=found+1;
        }
    }
    document.getElementById("search_names").innerHTML="name found "+ found +" time/s";
    console.log("name found"+ found +"time/s")
}