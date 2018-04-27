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
        '<td><img width="100%" height="100%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFz0tmMS4g9uoL8CsgkhXHDTKvYeQclI4aqvK8-e6idbNbo8to" /></td>' +
  '</tr>' +

  '<tr>' +
       '<td>2</td>' +
        '<td>Johan Nilsson</td>' +
        '<td>System Developer</td>' +
        '<td>Lund</td>' +
        '<td><img width="100%" height="100%" src="https://pickaface.net/gallery/avatar/Vatandoust578e6bcd5bd37.png" /></td>' +
  '</tr>' +

  '<tr>' +
        '<td>3</td>' +
        '<td>Maria andersson</td>' +
        '<td>Computer science</td>' +
        '<td>Oslo</td>' +
        '<td><img width="100%" height="100%" src="https://pickaface.net/gallery/avatar/rlmaloo1755d3daf58fe6f.png" /></td>' +
  '</tr>'
};
