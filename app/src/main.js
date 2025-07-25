import '../src/style.css'
import pals  from '../../palettes.json';
import { newpal, handleFormSubmit } from '../src/colors.js';

const main = () => {

    document.querySelector('form').addEventListener('submit', handleFormSubmit);

Object.values(pals).forEach(pal => {
        newpal(pal.uuid, pal.title, pal.colors, pal.temperature);
    });

}

main()