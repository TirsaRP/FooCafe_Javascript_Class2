const students = [
    {
        name: "Brad Pitt",
        education: "General Medicine",
        city: "Lund",
        picture: "https://drive.google.com/uc?id=11wyYBJMlCpcZ8UbrYcMnzcqz5Ei_5hzp"
    },
    {
        name: "George Clooney",
        education: "Engineering",
        city: "Malmö",
        picture: "https://drive.google.com/uc?id=1lqK0MS4X8pOgrVRhGwBJcMi3n7xiBl4j"
    },
    {
        name: "Patrick Dempsey",
        education: "Economy",
        city: "Gutenberg",
        picture: "https://drive.google.com/uc?id=1PKZG8Vgma-B4WWKFfXjRyeAtcxpgyBZu"
    }
];

const container = createElementInElement('container', 'div', document.body);
const table = createElementInElement('student-table', 'table', container);

addStudentsToTable(students, table);

/**
 * Adds a header to a html table
 * 
 * @param {String[]} columnNames, Values for the headers, column names, on header row. 
 */
function addHeaderToTable(table, columnNames) {
    const row = document.createElement('tr');

    columnNames.forEach(columnName => {
        const cell = document.createElement('th');
        cell.innerText = columnName;
        row.appendChild(cell);
    });

    table.appendChild(row);
}

/**
 * Adds a student to a html table
 * 
 * @param {<table>} table The table html-element
 * @param {*} student 
 */
function addStudentToTable(table, student){
    const row = document.createElement('tr');

    for(const key in student){
        const cell = document.createElement('td');
        
        if(key === 'picture'){
            cell.appendChild(createImageElement(student[key], student['name']));
        }else{
            cell.innerText = student[key];
        }
        
        row.appendChild(cell);
    }

    table.appendChild(row);    
}

/**
 * Creates an img html element
 * 
 * @param {String} src Url to the image file
 * @param {String} alt Description of image
 */
function createImageElement(src, alt) {
    const image = document.createElement("img");
    image.setAttribute("src", src);
    image.setAttribute("width", "150");
    image.setAttribute("height", "150");
    image.setAttribute("alt", alt);

    return image;
}

/**
 * Adds students to a html table
 * 
 * @param {Object[]} students List of students, each object describes a student
 * @param {<table>} table The table to add the students to
 */
function addStudentsToTable(students, table) {
    addHeaderToTable(table, ['Name', 'Education', 'City', 'Picture']);

    students.forEach(student=>{
        addStudentToTable(table, student);
    })
}

function createElementInElement(childElementClassName, childElementType, parentElement){
    const childElement = document.createElement(childElementType);
    childElement.setAttribute('class', childElementClassName);
    parentElement.appendChild(childElement);
    
    return childElement;
}
