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
var i = 0;
console.log(Object.values(studentArray));

function createTableContainer(array) {                       //this function creates a div, a table, and a caption element
    let container = document.createElement("div")           //{ class: "box" });
    container.setAttribute("class", "box"); 
    document.body.appendChild(container);

    let table = document.createElement("table")             //{ class: "table" });
    table.setAttribute("class", "table");
    container.appendChild(table);

    let caption = document.createElement("caption")        //{ class: "captionTitle" });
    caption.setAttribute("class", "captionTitle");
    table.appendChild(caption)
    let captionText = caption.innerHTML = "Table";

    for (prop in array[i]) {                         //creates a th from each property
        let header = document.createElement("th");
        header.setAttribute("class", "headerValues");
        header.innerHTML = prop;
        table.appendChild(header);
    };
    for (let i = 0; i < array.length; i++) {
        let row = document.createElement("tr");
        row.setAttribute("class", "newRow");
        for(var key in array){
        row.innerHTML =                         //ISSUE: when i use prop it gives me the value but of only the last property, everything else doesn't work
                                                // i want output to be the property values. Without  specifying property names, so it could be used with multiple arrays
                    `<td>${array[i][0]}</td>
                    <td>${array[i][prop]}</td>                             
                    <td>${array[i].key}</td>
                    <td>${array[i][prop][3]}</td>
                    <td>${array[i].studentPicture}</td>`; 
        table.appendChild(row);
    };
    };
};

createTableContainer(studentArray);

const familyArray = [
    {member: "mom",
    age:32,
    occupation:"student",
    birthdate: "XX/XX/86",
    favColor:"blue"
    },
    {member: "dad",
    age:33,
    occupation:"consultant",
    birthdate:"XX/XX/85",
    favColor:"orange"
    },
    {member: "son",
    age:5,
    occupation:"student",
    birthdate:"XX/XX/13",
    favColor:"red"
    },
    {member: "daughter",
    age:2,
    occupation:"student",
    birthdate:"XX/XX/15",
    favColor:"purple"
    }
];

createTableContainer(familyArray);

