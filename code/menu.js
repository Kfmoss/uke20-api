
const mybtn = document.getElementById('myList');
const tre = document.getElementById('btn');
tre.addEventListener("click", openmenu );
function openmenu() {
    if(mybtn.style.display != 'block') {
        mybtn.style.display = 'block';
    } else {
        mybtn.style.display = 'none';
    }
    console.log('clicked');
}




// map settings
const attribution = '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'

// var map = L.map('map1').setView([59.745164250056135, 10.164131070531106], 15);
// let marker = L.marker([59.745164250056135,10.164131070531106 ]).addTo(map)
// let tileURL =   L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { }).addTo(map);
// const tiles =L.tileLayer(tileURL,{attribution})



let place = document.getElementById("searchbar").value;


// const api_url = 'https://nominatim.openstreetmap.org/search?format=json&q=' + place; 




async function show_me(){
    let lat;
    let long;
    

    
    let resp = await fetch('https://api.openbrewerydb.org/v1/breweries?by_city=san_diego');
    let mydata = await resp.json();
    console.log(mydata);
    lat = mydata[0].latitude;
    long = mydata[0].longitude;
    var map = L.map('map1').setView([lat,long], 13);
    mydata.forEach(element => {
        let marker = L.marker([element.latitude, element.longitude]).addTo(map);
        marker.bindPopup(`<b>${element.name}</b><br>${element.street}`).openPopup();
    });
    let tileURL =   L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { }).addTo(map);

}




