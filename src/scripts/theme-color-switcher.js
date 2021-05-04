const refs = {
    switchThemeBtn: document.querySelector("#theme-switch-toggle"),
    body: document.querySelector("body"),
};

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

currentBodyTheme();
checkTheme();

refs.switchThemeBtn.addEventListener('change', changeTheme);
function changeTheme(e) {
    if (e.target.checked) {
        localStorage.setItem('Theme', Theme.DARK);
        refs.body.classList.add(Theme.DARK);
    } else {
        localStorage.setItem('Theme', Theme.LIGHT);
        refs.body.classList.remove(Theme.DARK);
    }
}

function checkTheme() {
    const currentTheme = localStorage.getItem('Theme');
    if (currentTheme === Theme.DARK) {
        refs.switchThemeBtn.checked = true;
    }
}

function currentBodyTheme() {
    const currentTheme = localStorage.getItem('Theme');
    if (!currentTheme) {
        localStorage.setItem('Theme', Theme.LIGHT);
        refs.body.classList.add(Theme.LIGHT);
    } else {
        refs.body.classList.add(currentTheme);
    }
}