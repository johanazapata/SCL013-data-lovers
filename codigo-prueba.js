//esta forma es mejor porque se inserta html una sola vez al DOM
let html = "";
gryfinddorMembers.forEach(character => {
      return html += `
    <div class="card-box">
        <img src = "${character.image}" alt="character-img">
        <ul class="card-info">
          <li>Nombre: ${character.name}</li>
          <li>Género: ${character.gender}</li>
          <li>Fecha de nacimiento: ${character.yearOfBirth}</li>
          <li>Patronus: ${character.patronus}</li>
        </ul>
      </div>

    `