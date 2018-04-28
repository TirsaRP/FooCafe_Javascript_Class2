
var rows = [{
    id: 01,
    name: "Radhika Sonawane",
    education: "Web Developer CMS",
    city: "Malmö",
    picture:"<img src='https://name.mynamepix.net/images/styles/itm_beautiful-redhead-doll_name_pix_2014-06-05_20-00-29_1.jpg' width='100px' height='100px'>"

},{
    id: 02,
    name: "Sharvri Sonawane",
    education: "Computer science",
    city: "Lund",
    picture:"<img src='http://1.bp.blogspot.com/-icACPnYx504/VEfuE0zEy_I/AAAAAAAABYw/dYziAFB8_mM/s1600/Pretty-Cute-Doll-240x320-Wallpaper.jpg' width='100px' height='100px'>"
},{
    id: 03,
    name: "Sara Nilson",
    education: "Bcs",
    city: "Oslo",
    picture:"<img src='http://images6.fanpop.com/image/photos/35000000/cute-dolls-stya-E2-99-AC-35067989-176-220.jpg' width='100px' height='100px'>"
}];

var html = "<table border='1|1'>";
for (var i = 0; i < rows.length; i++) {
    html+="<tr>";
    html+="<td>"+rows[i].id+"</td>";
    html+="<td>"+rows[i].name+"</td>";
    html+="<td>"+rows[i].education+"</td>";
    html+="<td>"+rows[i].city+"</td>";
    html+="<td>"+rows[i].picture+"</td>";


    html+="</tr>";

}
html+="</table>";
document.getElementById("box").innerHTML = html;
