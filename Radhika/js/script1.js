    function StudentTable() {
    //Build an array containing Student records.
    var Students = new Array();
    Students.push(["Student Id", "Name", "Education", "City", "Picture"]);
    Students.push([1, "Radhika Sonawane", "BSC", "Malmo",  "<img src='https://name.mynamepix.net/images/styles/itm_beautiful-redhead-doll_name_pix_2014-06-05_20-00-29_1.jpg' width='100px' height='100px'>"]);
    Students.push([2, "Kevin Johanson", "Bca", "Lund", "<img src='https://i.pinimg.com/originals/9d/3a/c5/9d3ac5ed43fddefe4000e4664be16744.jpg' width='100px' height='100px'>" ]);
    Students.push([3, "Sara Jonson", "BE", "Oslo", "<img src='http://1.bp.blogspot.com/-icACPnYx504/VEfuE0zEy_I/AAAAAAAABYw/dYziAFB8_mM/s1600/Pretty-Cute-Doll-240x320-Wallpaper.jpg' width='100px' height='100px'>" ]);
    Students.push([4, "Sharvri", "Bcs", "Lund", "<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp60OEQKUA9VOAkUaN7nxYA_DMfumdTBdCTqfGX9TmdZo8P0A-' width='100px' height='100px'>"]);
 
    //Create a HTML Table element.
    var table = document.createElement("TABLE");
    table.border = "1";
 
    //Get the count of columns.
    var columnCount = Students[0].length;
 
    //Add the header row.
    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = Students[0][i];
        row.appendChild(headerCell);
    }
 
    //Add the data rows.
    for (var i = 1; i < Students.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = Students[i][j];
        }
    }
 
    var dvTable = document.getElementById("dvTable");
    dvTable.innerHTML = "Students";
    dvTable.appendChild(table);
}
