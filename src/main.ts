import './scripts/theme.ts';
import { type App } from 'vue';
import './assets/styles/main.scss';

import * as icons from './icons';
import * as components from './components';

import { install } from './helpers/install';

const VueUI = {
    install: (app: App) => install(app, {...components, ...icons}),
};

export default VueUI;

export * from './utils';
export * from './icons';
export * from './components';
export * from './composables';
