const students = [

    {
        ID: "196780",
        name: "Adam",
        educ: "IT",
        city: "Kalmar",
        picture: "<img src= 'adam.jpg'>"
    },
    {
        ID: "1so334",
        name: "Asia",
        educ: "teacher",
        city: "Malmö",
        picture: "https://drive.google.com/uc?id=1PKZG8Vgma-B4WWKFfXjRyeAtcxpgyBZu"
    },
    {
        ID: "13t867",
        name: "Ali",
        educ: "Engineering",
        city: "Lund",
        picture: "https://drive.google.com/uc?id=11wyYBJMlCpcZ8UbrYcMnzcqz5Ei_5hzp"
    }

];



function studTable(studArray) {
    //create table and added to the body

    var table = document.createElement('table');
    table.border = '1';
    document.body.appendChild(table);

    //create row and added to the table
    var headerRow = document.createElement('tr');

    table.appendChild(headerRow);

    //use for...in loop to display the array elements
    //key = studID,studname,studEduc,studCity,studPic
    for (var key in studArray[0]) {

        var header = document.createElement('th');

        var headerText = document.createTextNode(key); //the header will contain the keys.

        header.appendChild(headerText);

        table.appendChild(header);

    }

    //add students data to the table
    for (var i = 0; i < studArray.length; i++) {

        var studInfoRow = document.createElement('tr');

        table.appendChild(studInfoRow);



        for (var key in studArray[i]) {

            if (key == "pictuter") {

                var studImg = document.createElement('img');


                studImg.setAttribute("src", array[i][key]);

                studInfoRow.appendChild(studImg);

            } else {

                var dataRow = document.createElement('td');

                var dataText = document.createTextNode(studArray[i][key]);

                dataRow.appendChild(dataText);

                studInfoRow.appendChild(dataRow);

            }

        }

    }

}
studTable(students);
