import { type App } from 'vue';
import './assets/main.scss';

import Button from './components/Button/Index.vue';

const VueUI = {
    install: (app: App) => {
        app.component('YButton', Button);
    },
};

export default VueUI;

export {
    Button as YButton,
};
