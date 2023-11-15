import { getCets, getCat } from './cat-api';
import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';

const selectEl = document.querySelector('.breed-select');
const divEl = document.querySelector('.cat-info');
const spanLoader = document.querySelector('.loader');
selectEl.addEventListener('change', onBreedSelectChange);

window.addEventListener('DOMContentLoaded', onContentLoaded);

function onContentLoaded() {
  getCets().then(function (response) {
    renderMarkup(response);
    new SlimSelect({
      select: '#single',
    });
    // hideLoader();
    onBreedSelectChange();
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

function onBreedSelectChange() {
  const selectedBreedId = selectEl.value;
  showLoader();
  getCat(selectedBreedId)
    .then(function (response) {
      renderinfoCats(response);
      // hideLoader();
    })
    .catch(function (error) {
      console.error('Error fetching cat:', error);
      hideLoader();
    });
}
function showLoader() {
  spanLoader.classList.add('loader');
}
function hideLoader() {
  // spanLoader.classList.remove('loader');
}

function templateDivCat(data) {
  console.log(data);
  return `<div class="container  ">
 
  <div class="image-container">
    <img 
      src="${data[0].url}"
      alt="#"
      class="cat-image"
    />
  </div>
  <div class="cat-body">
    <h1 class="cat-name">${data[0].breeds[0].name}</h1>
    <ul class="cat-ul">
  <li class="cat-li">
  <p>Description: ${data[0].breeds[0].description}</p></li>
  <li class="cat-li"><p>Origin: ${data[0].breeds[0].origin}</p></li>
  <li class="cat-li"><p>Temperament: ${data[0].breeds[0].temperament}</p></li>
  <li class="cat-li"><a href="${data[0].breeds[0].wikipedia_url}">Wikipedia</a> </li>
  
</ul>
    
  </div></div>`;
}

function renderinfoCats(cat) {
  const markupinfoCats = templateDivCat(cat);

  divEl.innerHTML = markupinfoCats;
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
