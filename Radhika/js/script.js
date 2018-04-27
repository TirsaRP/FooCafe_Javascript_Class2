var btn = document.createElement('button'); 
    btn.innerHTML = "Create Table";
    document.body.appendChild(btn);
    btn.addEventListener("click", createTable, true);
    function createTable(){
    var div = document.createElement('div');
    div.setAttribute("id", "tbl");
    document.body.appendChild(div)
    document.getElementById("tbl").innerHTML = "</br> <table border = '1'>" +
          '<tr>' +
                '<th>Student ID</th>' +
                '<th>Student Name</th> ' +
                '<th>Education</th>' +
                '<th>City</th>' +
                '<th>Student Picture</th> ' +
          '</tr>' +

          '<tr>' +
                '<td>1</td>' +
                '<td>Radhika Sonawane</td>' +
                '<td>Web Developer CMS</td>' +
                '<td>Malmö</td>' +
                '<td><img width="100px" height="100px" src="https://name.mynamepix.net/images/styles/itm_beautiful-redhead-doll_name_pix_2014-06-05_20-00-29_1.jpg" /></td>' +
          '</tr>' +

          '<tr>' +
               '<td>2</td>' +
                '<td>Johan Nilsson</td>' +
                '<td>System Developer</td>' +
                '<td>Lund</td>' +
                '<td><img width="100px" height="100px" src="https://i.pinimg.com/originals/9d/3a/c5/9d3ac5ed43fddefe4000e4664be16744.jpg" /></td>' +
          '</tr>' +

          '<tr>' +
                '<td>3</td>' +
                '<td>Maria andersson</td>' +
                '<td>Computer science</td>' +
                '<td>Oslo</td>' +
                '<td><img width="100px" height="100px" src="data:image/jpeg;base64,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" /></td>' +
          '</tr>'+

           '<tr>' +
                  '<td>4</td>' +
                  '<td>Sharvri Sonawane</td>' +
                  '<td>PYP 5</td>' +
                  '<td>Malmö</td>' +
                  '<td><img width="100px" height="100px" src="http://1.bp.blogspot.com/-icACPnYx504/VEfuE0zEy_I/AAAAAAAABYw/dYziAFB8_mM/s1600/Pretty-Cute-Doll-240x320-Wallpaper.jpg" /></td>' +
           '</tr>'


};

