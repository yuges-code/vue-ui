import { type App } from 'vue';
import './assets/main.scss';

import * as components from './components';
import { install } from './helpers/install';

const VueUI = {
    install: (app: App) => install(app, components),
};

export default VueUI;

export * from './components';

