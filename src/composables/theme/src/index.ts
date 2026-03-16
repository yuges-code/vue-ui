import { reactive } from "vue";
import { ThemeName } from "../../../types/ThemeName";

const store = reactive({
    theme: ThemeName.system as ThemeName,
});

export function useTheme()
{
    sync();

    function set(theme: ThemeName)
    {
        store.theme = theme;

        if (window) {
            localStorage.setItem('yuges-theme', theme);
        }
    }

    function get(): ThemeName
    {
        let theme = window ? localStorage.getItem('yuges-theme') || ThemeName.system : ThemeName.system;

        if (! Object.values(ThemeName).includes(theme as ThemeName)) {
            theme = ThemeName.system;
        }

        return theme as ThemeName;
    }

    function sync()
    {
        set(get());
    }

    function reset()
    {
        store.theme = ThemeName.system;
    }

    return {
        set,
        store,

        reset,
    };
}
