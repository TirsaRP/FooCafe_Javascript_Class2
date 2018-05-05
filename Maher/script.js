// creating an array of 5 students info
var listOfStudents = [
  {
    id: 11111,
    name: "student 1",
    education: "kurs 1",
    city: "Stockholm",
    picture: "<img src='./pics/studentsponge1.jpg'>"
  },
  {
    id: 22222,
    name: "student 2",
    education: "kurs 2",
    city: "Malmö",
    picture: "<img src='./pics/studentsponge2.jpg'>"
  },
  {
    id: 33333,
    name: "student 3",
    education: "kurs 3",
    city: "Kalmar",
    picture: "<img src='./pics/studentsponge3.jpg' >"
  },
  {
    id: 44444,
    name: "student 4",
    education: "kurs 4",
    city: "Uppsala",
    picture: "<img src='./pics/studentsponge4.jpg'>"
  },
  {
    id: 55555,
    name: "student 5",
    education: "kurs 5",
    city: "Paris",
    picture: "<img src='./pics/studentsponge4.jpg'>"
  }
];

//creating a function
function createStudentsTable() {
  // get the reference for the body
  var body = document.getElementsByTagName("body")[0];

  // creating a <table> element andappending it
  var tbl = document.createElement("table");
  body.appendChild(tbl);

  // sets the border attribute of tbl to 2;
  tbl.setAttribute("border", "3");

  // creating a <tableBody> element andappending it
  var tblBody = document.createElement("tbody");
  tbl.appendChild(tblBody);

  // creating the first row and appending it
  var th1 = document.createElement("th");
  var th2 = document.createElement("th");
  var th3 = document.createElement("th");
  var th4 = document.createElement("th");
  var th5 = document.createElement("th");

  th1.innerHTML = "id";
  th1.setAttribute("class", "heading");
  th2.innerHTML = "Name";
  th2.setAttribute("class", "heading");
  th3.innerHTML = "Education";
  th3.setAttribute("class", "heading");
  th4.innerHTML = "City";
  th4.setAttribute("class", "heading");
  th5.innerHTML = "Picture";
  th5.setAttribute("class", "heading");

  tblBody.appendChild(th1);
  tblBody.appendChild(th2);
  tblBody.appendChild(th3);
  tblBody.appendChild(th4);
  tblBody.appendChild(th5);

  //adding for loop, to take every student in the array
  listOfStudents.forEach(student => {
    var row = document.createElement("tr");
    tblBody.appendChild(row);

    var cell1 = document.createElement("td");
    var cell2 = document.createElement("td");
    var cell3 = document.createElement("td");
    var cell4 = document.createElement("td");
    var cell5 = document.createElement("td");

    cell1.innerHTML = student.id;
    cell1.setAttribute("class", "style");
    cell2.innerHTML = student.name;
    cell2.setAttribute("class", "style");
    cell3.innerHTML = student.education;
    cell3.setAttribute("class", "style");
    cell4.innerHTML = student.city;
    cell4.setAttribute("class", "style");
    cell5.innerHTML = student.picture;

    row.appendChild(cell1);
    row.appendChild(cell2);
    row.appendChild(cell3);
    row.appendChild(cell4);
    row.appendChild(cell5);
  });
}

function addStudent() {
  var id = document.querySelector("#id").value;
  var name = document.querySelector("#name").value;
  var city = document.querySelector("#city").value;
  var education = document.querySelector("#education").value;
  var pic = document.querySelector("#pic").value; //TODO: this is how you get the file user selected. Uploading it to the server is a different story...

  var tbl = document.getElementsByTagName("table")[0];
  var newRow = tbl.insertRow(listOfStudents.length);

  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  var cell3 = newRow.insertCell(2);
  var cell4 = newRow.insertCell(3);
  var cell5 = newRow.insertCell(4);

  cell1.innerHTML = id;
  cell1.setAttribute("class", "style");
  cell2.innerHTML = name;
  cell2.setAttribute("class", "style");
  cell3.innerHTML = city;
  cell3.setAttribute("class", "style");
  cell4.innerHTML = education;
  cell4.setAttribute("class", "style");
  cell5.innerHTML = "<img src='./pics/studentsponge1.jpg' />";

  listOfStudents.push({
    id: id,
    name: name,
    education: education,
    city: city,
    picture: pic
  });
}

/*
function addStudent(){
        var id = document.getElementById("id").value;
        var sname= document.getElementById("sname").value;
         var scity = document.getElementById("scity").value;
         var seducation= document.getElementById("seducation").value;
         var spic= document.getElementById("spic").value;
    
        listOfStudents.push({
            id: id,
            name: sname,
             education: seducation,
             city: scity,
             picture: spic
         })
    
             var tbl = document.getElementsByTagName("table")[0];
    
             tbl.remove();
             studentListTable();
    
     }
     */
