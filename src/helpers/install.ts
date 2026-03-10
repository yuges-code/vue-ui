import { useApp } from '../composables/app';
import { type App, type Component } from 'vue';

export function install (app: App, components: { [key: string]: Component }) {

    const appStore = useApp();

    appStore.reset();

    for (const key in components) {
        if (components[key]) {
            app.component(key, components[key]);
        }
    }
}
