let map = L.map('map').setView([23.977497933660768, -102.16618216696168], 4);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaGFiYWN1Y3MiLCJhIjoiY2wzN2dqaHBpMGFoNDNpbXg5Nnc5YnN5YiJ9.aS0XNJKC9wwEZubrtaZaQA', {
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiaGFiYWN1Y3MiLCJhIjoiY2wzN2dqaHBpMGFoNDNpbXg5Nnc5YnN5YiJ9.aS0XNJKC9wwEZubrtaZaQA'
}).addTo(map);

let marker = L.marker([26.970739898815513, -110.68795275496632]).addTo(map);
marker.bindPopup("Totoaba")
let marker2 = L.marker([19.17454794691813, -96.13734984604399]).addTo(map);
marker2.bindPopup("Tortuga carey")
let marker3 = L.marker([19.850177, -90.539670]).addTo(map);
marker3.bindPopup("Tortuga carey")
let marker4 = L.marker([21.385203981484796, -89.58185284601805]).addTo(map);
marker4.bindPopup("Tortuga carey")
let marker5 = L.marker([19.134871538533837, -87.10634744055037]).addTo(map);
marker5.bindPopup("Tortuga carey")
let marker6 = L.marker([30.419369241423123, -113.78667546081714]).addTo(map);
marker6.bindPopup("Vaquita marina")
let marker7 = L.marker([26.027286530418145, -111.02406804877116]).addTo(map);
marker7.bindPopup("Ballena azul")
let marker8 = L.marker([32.791773966359514, -120.36597067234635]).addTo(map);
marker8.bindPopup("León marino de Steller")
let marker9 = L.marker([25.917443187461263, -89.69909885459177]).addTo(map);
marker9.bindPopup("Tiburón martillo gigante")
let marker10 = L.marker([21.50711838524134, -97.17021242261201]).addTo(map);
marker10.bindPopup("Tortuga verde")
