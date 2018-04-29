
function addTable() {
    var myTableDiv = document.getElementById("div");
    var table = document.createElement('table');
    var tableBody = document.createElement('tbody');

    document.body.appendChild(table);

    table.border = '1';
    table.appendChild(tableBody);

    var heading = new Array();
    heading[0] = "Student's Id";
    heading[1] = "Student's Name";
    heading[2] = "Student's Education";
    heading[3] = "Student's City";
    heading[4] = "Student's Picture";

    var stock = new Array();
    stock[0] = new Array('S903922', "Adam", "IT", "London", "C:\Users\Dalia\Desktop\JavaScript2\week2\adam.jpg");
    stock[1] = new Array("S203822", "Ali", "Computer Engineering", "Iran", "https://drive.google.com/uc?id=1JZkxGNEl26lG1caLLBGgr2zZTgeb7t0H");
    stock[2] = new Array("S984398", "Asia", "Teacher", "Qatar", "./JavaScript2/week2/asia.jpg");
    stock[3] = new Array("S839737", "Mark", "Technical", "Swedish", "./JavaScript2/week2/mark.jpg");
    stock[4] = new Array("S792873", "Dave", "Civil Engineering.", "Swedish", "./JavaScript2/week2/dave.jpg");


    /*let StudentImages = ['./ studentimages /adam.jpg', "./ studentimages /ali.jpg", "./ studentimages /asia.jpg",
        , "./ studentimages /mark.jpg", "./ studentimages /dave.jpg"]*/
    // let studentImages = ["./img/benhur.jpg", "./img/twilight.jpg", "./img/mobydick.jpg", "./img/thegreatgatsby.jpg", "./img/hamlet.jpg"]


    var tr = document.createElement('TR');
    tableBody.appendChild(tr);
    for (i = 0; i < heading.length; i++) {
        var th = document.createElement('TH')
        th.style.backgroundColor = 'lightblue';

        th.appendChild(document.createTextNode(heading[i]));
        tr.appendChild(th);

    }
    for (i = 0; i < stock.length; i++) {
        var tr = document.createElement('TR');
        for (j = 0; j < stock[i].length; j++) {

            var td = document.createElement('TD');
            if (j === 4) {
                var img = document.createElement("IMG");

                img.setAttribute("src", stock[i][j]);

                img.setAttribute("width", "100");

                img.setAttribute("height", "100");



                td.appendChild(img);
            }


            table.appendChild(tr);
            td.innerHTML = stock[i][j];

            tr.appendChild(td);

        }
    }
}


addTable();
