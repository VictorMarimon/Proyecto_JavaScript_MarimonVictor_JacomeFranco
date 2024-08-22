let PERSONAJES;

fetch("https://swapi.py4e.com/api/people")
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


//la siguiente función nos permite desestructurar la url de cada personaje para posteriormente obtener su imágen

function idCharacter(url){
  const pieces = url.split('/');
  return pieces[pieces.length - 2];
}

document.addEventListener("DOMContentLoaded", () => {
  var bandera = 0;
  setTimeout(() => {
    const content = document.querySelector('.cards-grid')
    for (const dato of PERSONAJES.results) {
      const card = document.createElement('div');
      card.classList.add('card');
      card.innerHTML = `
                    <img src="https://starwars-visualguide.com/assets/img/characters/${idCharacter(dato.url)}.jpg" alt="${(dato.name)}">
                    <div class="card-content">
                        <h3>${dato.name}</h3>
                        <p>${dato.height + " cm"}</p>
                        <p>${dato.birth_year}</p>
                        <p>${dato.gender}</p>
                    </div>
      `;

      content.append(card);
      bandera++;
    }
  }, 200);
});
