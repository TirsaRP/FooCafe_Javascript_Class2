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

createTableContainer(studentArray);


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
