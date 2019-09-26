var request = new XMLHttpRequest();

request.open('GET', 'https://jsonplaceholder.typicode.com/users', true);

request.onload = function() {
  var data  =  JSON.parse(this.response);
  console.log(data);
  for(i = 0; i < data.length; i++) {
    console.log("Persona # "+ data[i].id + "\n" + 
    "Nombre: "+ data[i].name + "\n" +
    "Correo: "+ data[i].email + "\n" +
    "Ciudad: "+ data[i].address.city + "\n" +
    "Latitud: "+ data[i].address.geo.lat + "\n" +
    "Longitud: "+ data[i].address.geo.lng + "\n" +
    "--------------------------------------"
    );
  }
}

request.send();
