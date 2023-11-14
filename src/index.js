import { getCets, getCat } from './cat-api';
const selectEl = document.querySelector('.breed-select');
const divEl = document.querySelector('.cat-info');

selectEl.addEventListener('change', onBreedSelectChange);

window.addEventListener('DOMContentLoaded', onContentLoaded);

// selectEl.addEventListener('DOMContentLoaded', event => {
//   console.log('DOM fully loaded and parsed');
// });

function onContentLoaded() {
  getCets().then(function (response) {
    renderMarkup(response);
  });
}

function templateCats({ name, id }) {
  return `
  
  <option value="${id}">${name} </option>`;
}

function templateCat(cats) {
  const template = cats.map(templateCats).join('');
  return template;
}

function renderMarkup(cats) {
  const markup = templateCat(cats);
  selectEl.insertAdjacentHTML('afterbegin', markup);
}

// function selectCat() {}
function onBreedSelectChange() {
  const selectedBreedId = selectEl.value;

  getCat(selectedBreedId).then(function (response) {
    // debugger;
    renderinfoCats(response);
  });
}

function templateDivCat(data) {
  console.log(data);
  return `<div class="image-container">
    <img
      src="${data[0].url}"
      alt="#"
      class="cat-image"
    />
  </div>
  <div class="cat-body">
    <h4 class="cat-name">${data[0].breeds[0].name}</h4>
    <p class="cat-bio">
      ${data[0].description}
    </p>
  </div>`;
}

// function templateDivCats(cat) {
//   const templates = cat.map(templateDivCat).join('');
//   return templates;
// }

function renderinfoCats(cat) {
  const markupinfoCats = templateDivCat(cat);

  divEl.insertAdjacentHTML('afterbegin', markupinfoCats);
}

// !!!!!!!!!!!!!!!!

// function templateDivCats(cats) {
//   const templates = cats.map(templateDivCat).join('');
//   return templates;
// }

// function renderinfoCats(cats) {
//   divEl.innerHTML = '';

//   const markupinfoCats = templateDivCats(cats);
//   divEl.insertAdjacentHTML('afterbegin', markupinfoCats);
// }
