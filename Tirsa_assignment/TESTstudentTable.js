// 1) Create a dynamic student table with 5 columns 
// (Student ID, Student Name, Education, City, Student Picture) using javaScript.

var studentArray = [                       //array of objects= [{},{},{}];
    {
        studentId: 12345,
        studentName: "Robert Johnson",
        education: "Psychology",
        city: "Malmö",
        studentPicture: "<img src='student1.jpg' width='150px'>"
    },
    {
        studentId: 12346,
        studentName: "Mary Howard",
        education: "Physics",
        city: "Malmö",
        studentPicture: "<img src='student2.jpg' width='150px'>"
    },
    {
        studentId: 12347,
        studentName: "John Micheals",
        education: "Art History",
        city: "Malmö",
        studentPicture: "<img src='student3.jpg' width='150px'>"
    }
];
// var i = 0;

console.log(Object.values(studentArray));

function createTableContainer(array) {                       //this function creates a div, a table, and a caption element
    let container = document.createElement("div")
    container.setAttribute("class", "box");
    document.body.appendChild(container);

    let table = document.createElement("table")
    table.setAttribute("class", "table");
    container.appendChild(table);

    let caption = document.createElement("caption")
    caption.setAttribute("class", "captionTitle");
    table.appendChild(caption)
    let captionText = caption.innerHTML = "Table";

    for (const prop in array[0]) {                         //creates a <th> from each property
        let header = document.createElement("th");
        header.setAttribute("class", "headerValues");
        header.innerHTML = prop;
        table.appendChild(header);
        //console.log(prop);
    };

    for (const object of array) {                        //creates rows for each object in the array with <td> for each property value 
        let row = document.createElement("tr");
        row.setAttribute("class", "newRow");
        table.appendChild(row);

        for (const prop in object) {                  //NEW ISSUE: only shows the first object's values
            let tBody = document.createElement("td");
            tBody.setAttribute("class", "property");
            tBody.innerHTML = object[prop];
            row.appendChild(tBody);
        };
    };
};
    /*for (const prop in array) {
                                                 //ISSUE: when i use prop it gives me the value but of only the last property, everything else doesn't work
                                                 // i want output to be the property values. Without  specifying property names, so it could be used with multiple arrays

        row.innerHTML = <td>${array[i][prop]}</td>;                            
                            `<td>${array[i][0]}</td>
                            <td>${array[i][prop]}</td>                             
                            <td>${array[i][1]}</td>
                            <td>${array[i][prop]}</td>
                            <td>${array[i].studentPicture}</td>`;
                        table.appendChild(row); 
    };    */



createTableContainer(studentArray);
//createHeader(studentArray);
//createRowAndTd(studentArray);



const familyArray = [
    {
        member: "mom",
        age: 32,
        occupation: "student",
        birthdate: "XX/XX/86",
        favColor: "blue"
    },
    {
        member: "dad",
        age: 33,
        occupation: "consultant",
        birthdate: "XX/XX/85",
        favColor: "orange"
    },
    {
        member: "son",
        age: 5,
        occupation: "student",
        birthdate: "XX/XX/13",
        favColor: "red"
    },
    {
        member: "daughter",
        age: 2,
        occupation: "student",
        birthdate: "XX/XX/15",
        favColor: "purple"
    }
];

createTableContainer(familyArray);
//createHeader(familyArray);
//createRowAndTd(familyArray);


/*

////////////////////////// PREVIOUS SOLUTION ///////////////////////////////////////////////

// 1) Create a dynamic student table with 5 columns 
// (Student ID, Student Name, Education, City, Student Picture) using javaScript.

var studentObj = {                       //obj = {property:value}
    1: {
        studentId: 12345,
        studentName: "Robert Johnson",
        education: "Psychology",
        city: "Malmö",
        studentPicture: "<img src='student1.jpg' width='150px'>"
    },
    2: {
        studentId: 12346,
        studentName: "Mary Howard",
        education: "Physics",
        city: "Malmö",
        studentPicture: "<img src='student2.jpg' width='150px'>"
    },
    3: {
        studentId: 12347,
        studentName: "John Micheals",
        education: "Art History",
        city: "Malmö",
        studentPicture: "<img src='student3.jpg' width='150px'>"
    }
};
console.log(Object.values(studentObj));

var studentTable = document.createElement("table");             //created <table>
studentTable.setAttribute("id", "studentTable2");
document.body.appendChild(studentTable);

var row1 = document.createElement("caption");                    //created <caption>
row1.setAttribute("id", "title");
row1.innerHTML = "Student Table";
document.getElementById("studentTable2").appendChild(row1);


var row2 = document.createElement("tr");                         //created <tr> 
row2.setAttribute("id", "row2content");                         //assigned an id to <tr>
document.getElementById("studentTable2").appendChild(row2);     //added my row to the table 
var row2Cell1 = row2content.insertCell(0);                      //added 5 cells to row 2 (studentId,StudentName,Education,City,StudentPicture)
row2Cell1.setAttribute("class", "content");
row2Cell1.innerHTML = "Student ID";
var row2Cell2 = row2content.insertCell(1);
row2Cell2.setAttribute("class", "content");
row2Cell2.innerHTML = "Student Name";
var row2Cell3 = row2content.insertCell(2);
row2Cell3.setAttribute("class", "content");
row2Cell3.innerHTML = "Education";
var row2Cell4 = row2content.insertCell(3);
row2Cell4.setAttribute("class", "content");
row2Cell4.innerHTML = "City";
var row2Cell5 = row2content.insertCell(4);
row2Cell5.setAttribute("class", "content");
row2Cell5.innerHTML = "Student Picture";

function addToTable() {
    for (key in studentObj) {
        var rowN = document.createElement("tr");
        rowN.setAttribute("class", "info");
        document.getElementById("studentTable2").appendChild(rowN); //everytime you iterate through the object keys, add a row (3 keys = 3 rows)

        var student = studentObj[key];                              //iterate through the properties of each object(student) within the studentObj
        var rowNCell1 = rowN.insertCell(0);                     //create a new cell in the row
        rowNCell1.innerHTML = student.studentId;                 //and make the innerHTML of each cell be equal to the value of each property
        var rowNCell2 = rowN.insertCell(1);
        rowNCell2.innerHTML = student.studentName;
        var rowNCell3 = rowN.insertCell(2);
        rowNCell3.innerHTML = student.education;
        var rowNCell4 = rowN.insertCell(3);
        rowNCell4.innerHTML = student.city;
        var rowNCell5 = rowN.insertCell(4);
        rowNCell5.innerHTML = student.studentPicture;
    }

}

addToTable();
*/