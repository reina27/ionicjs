var boton = document.getElementById("submit")




function enviarDatos(){
    var name = document.getElementById("nombre").value;
    var age = document.getElementById("edad").value;

    console.log {"Nombre" + name + "Edad" + age}

    var persona = {
        nombre: name,
        edad: age
    }

    persona_json =JSON.stringify(persona);
    console.log(persona_json);

    XMLHttp.onreadystatechange = ProcesarEventos;
    XMLHttp.open("POST", DIR_SERVER, true);
    XMLHttp.setRequestHeader("Content-type", "application/json");
    XMLHttp.send(persona_json);
}

function procesarEventos(){
    console.log("Procedimiento invocado" + xmlHttp.readyState);
}