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

document.addEventListener("DOMContentLoaded", () => {
  var bandera = 0;
  setTimeout(() => {
    const content = document.querySelector('.cards-grid')
    for (let i = 0; i < 10; i++) {
      for (const dato of Array(PERSONAJES)) {
        const card = document.createElement('div');
        const imgCharacter = document.createElement('img');
        const contentCard = document.createElement('div');
        const tittleCard = document.createElement('h3');
        const heighCard = document.createElement('p');
        const birthYearCard = document.createElement('p');
        const genderCard = document.createElement('p');

        card.classList.add('card');

        contentCard.classList.add('card-content');

        card.appendChild(imgCharacter);
        card.appendChild(contentCard);
        contentCard.appendChild(tittleCard);
        contentCard.appendChild(heighCard);
        contentCard.appendChild(birthYearCard);
        contentCard.appendChild(genderCard);

        content.append(card);

        console.log(dato.results[bandera][bandera]);
        
      }
      bandera++;
    }
  }, 200);
});
