import { useApp } from '../composables/app';
import { type App, type Component } from 'vue';
import { useTheme } from '../composables/theme';

export function install (app: App, components: { [key: string]: Component }) {

    const appStore = useApp();
    const themeStore = useTheme();

    appStore.reset();
    themeStore.reset();

    for (const key in components) {
        if (components[key]) {
            app.component(key, components[key]);
        }
    }
}
