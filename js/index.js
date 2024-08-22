let PERSONAJES;

fetch("../json/datos.json")
  .then((res) => {
    if (!res.ok) {
      console.error("Error al cargar el archivo JSON");
      console.log(res);
    }
    return res.json();
  })
  .then((datos) => {
    PERSONAJES = datos;
  })
  .catch((res) => {
    console.error("Hubo un error en el JSON " + res);
  });

  