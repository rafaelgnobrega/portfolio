import { annotate } from "https://unpkg.com/rough-notation?module";

const developer = document.querySelector('#developer');

const developerAnnotation = annotate(developer, { type: 'underline', color: '#ffffff', padding: -9 });


setTimeout(() => {
  developerAnnotation.show();
}, 2000);
