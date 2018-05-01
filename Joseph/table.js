var students = [
    {
        StudentID: "12334", 
        StudentName: "John Doe", 
        Education: "BA", 
        City:  "Atlanta", 
        StudentPic: "JohnDoe.jpg"
    },
    {
        StudentID: "12f34", 
        StudentName: "Jane Doe", 
        Education: "BA", 
        City:  "LA", 
        StudentPic: "JohnDoe.jpg"
    },
    {
        StudentID: "12224", 
        StudentName: "Jim Bob", 
        Education: "MA", 
        City:  "Paris", 
        StudentPic: "JohnDoe.jpg"
    }    
];


/**
 * The first half creates a table header and the second half the rest of the table...
 * @param {Object[]} rows Table rows data
 */
//TODO: split this function into two, header & rest-of-table
function renderTable(rows){

        var table = document.createElement('TABLE');
        document.body.appendChild(table);

        var tableRow = document.createElement('TR');
        table.appendChild(tableRow);
        

        for (var key in rows[0]){
            var heading = document.createElement('TH');
            var headingText = document.createTextNode(key);
            heading.appendChild(headingText);
            table.appendChild(heading);
        }
    
  
    for (var i = 0; i < rows.length; i++){
        
            var nextTableRow = document.createElement('TR');
            table.appendChild(nextTableRow);
            
            for (var key in rows[i]){
                if (key == "StudentPic"){
                    var studentIMG = document.createElement('IMG');
                    studentIMG.setAttribute("src", rows[i][key]);
                    nextTableRow.appendChild(studentIMG);
                } else {
                    var dataRow = document.createElement('TD');
                    var dataText = document.createTextNode(rows[i][key]);
                    dataRow.appendChild(dataText);
                    nextTableRow.appendChild(dataRow);
                }
        }
    }


    
}

renderTable(students);

