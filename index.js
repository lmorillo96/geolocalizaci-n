function initMap() {
  const posicion = {
    lat: -25.363,
    lng: 131.044,
  };

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: posicion,
  });

  const marker = new google.maps.Marker({
    position: posicion,
    map,
    title: "posición inicial",
  });

  //
  //Obejeter la geolocalizacion
  geoPosiciona();
}

function geoPosiciona() {
  if (navigator.geolocation) {
    const geoLoc = navigator.geolocation
    const options = { timeout : 60000 }
    const watchPos = geoLoc.watchPosition(centraMapa, onError, {timeout: 60000});
  } else {
    alert("Tu navogador no admite geolocalización");
  }
}

function centraMapa(position) {
  const nuevaPos = {
    lat: position.coord.latitude,
    lng: position.coord.longitude
  }
  marker.setPosition(nuevaPos)
  map.setCenter(nuevaPos)
}

function onError(error) {
  console.log("Se ha producido un error y lo hemos gestionado")
  console.log(error)
}