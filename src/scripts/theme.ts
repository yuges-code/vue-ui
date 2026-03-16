(() => {
    try {
        if (! window) {
            return
        }

        const theme = localStorage.getItem('yuges-theme');
        const themeName = 'theme-' + theme;

        if (document.documentElement.classList.contains(themeName)) {
            return;
        }

        document.documentElement.classList.add(themeName);

        console.log('Theme: ' + theme);
    } catch (e) {
        console.log(e);
    }
})();
