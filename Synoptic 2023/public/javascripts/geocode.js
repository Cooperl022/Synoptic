function simpleGeocoding(sel) {

    const address = document.getElementById('geocoder');
    const postcode = sel.options[sel.selectedIndex].title;
    const formattedAddress = address.value.replaceAll(' ', '+') // Replace all spaces with ''
    let url = 'https://nominatim.openstreetmap.org/search?q=' + formattedAddress + ',+' + postcode + '&format=xml&polygon_geojson=1&addressdetails=1'

    if (window.XMLHttpRequest) {
        // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    }
    else {
        // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.open("GET", url, false);
    xmlhttp.send(null);

    if (xmlhttp.status==200) {
        xmlDoc = xmlhttp.responseXML;
        lat = [];
        lon= [];

        x = xmlDoc.getElementsByTagName('place');
        for (i = 0; i < x.length; i++) {
            lat.push(x[i].getAttribute('lat'));
            lon.push(x[i].getAttribute('lon'));
        }

        const coord = [parseFloat(lon[0]), parseFloat(lat[0])];
        console.log(coord)

        addMarker(coord);
    }
    else if (xmlhttp.status==404) {
        alert("XML could not be found");
    }
}