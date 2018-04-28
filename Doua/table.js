var students =[
{
    name: "Brad Pitt",
    education:"General Medicine",
    city:"Lund",
    picture:  "https://drive.google.com/uc?id=11wyYBJMlCpcZ8UbrYcMnzcqz5Ei_5hzp" 

},
{
    name: "George Clooney",
    education:"Engineering",
    city:"Malmö",
    picture:  "https://drive.google.com/uc?id=1lqK0MS4X8pOgrVRhGwBJcMi3n7xiBl4j" 

},
{
    name: "Patrick Dempsey",
    education:"Economy",
    city:"Gutenberg",
    picture:  "https://drive.google.com/uc?id=1PKZG8Vgma-B4WWKFfXjRyeAtcxpgyBZu" 

}
]


function getStudents (student){

var div = document.createElement("div")
div.setAttribute("id","container")
document.body.appendChild(div);

var table = document.createElement('table');
table.setAttribute("class","table");
div.appendChild(table);


var th1 = document.createElement("th");
var th2 = document.createElement("th");
var th3 = document.createElement("th");
var th4 = document.createElement("th");

th1.innerHTML = "Name";
th2.innerHTML = "Education";
th3.innerHTML = "City";
th4.innerHTML = "Picture";

table.appendChild(th1);
table.appendChild(th2);
table.appendChild(th3);
table.appendChild(th4);



for (var i = 0; i < student.length; i++){

    var tr = document.createElement('tr'); 
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    var div1 = document.createElement("div")
div.setAttribute("id","imgStyle")
document.body.appendChild(div);
    var image = document.createElement("img");
    image.setAttribute("src", student[i].picture);
    image.setAttribute("width", "150");
    image.setAttribute("height", "150");
    image.setAttribute("alt", student[i].name);
    div1.appendChild(image);

    td1.innerHTML = student[i].name;
    td2.innerHTML = student[i].education;
    td3.innerHTML = student[i].city;
    

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    
    tr.appendChild(image);

    table.appendChild(tr);
}
}


getStudents(students);