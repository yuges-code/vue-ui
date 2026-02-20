import { type App } from 'vue';
import './assets/main.scss';

import Button from './components/Button/Index.vue';

export default {
    install: (app: App) => {
        app.component('YButton', Button);
    },
};

export {
    Button as YButton,
};
