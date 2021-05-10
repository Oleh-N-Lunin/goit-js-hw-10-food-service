const refs = {
    switchThemeBtn: document.querySelector("#theme-switch-toggle"),
    body: document.querySelector("body"),
};

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};


refs.switchThemeBtn.addEventListener('change', currentTheme);
function currentTheme() {
    refs.body.className = '';
    setTheme(refs.switchThemeBtn.checked);
};

document.addEventListener('DOMContentLoaded', checkTheme);
function checkTheme() {
    refs.switchThemeBtn.checked = localStorage.getItem('themeColor') === Theme.DARK;
    setTheme(refs.switchThemeBtn.checked);
}

function setTheme(isChecked) {
    if (isChecked) {
        refs.body.classList.add(Theme.DARK);
        localStorage.setItem('themeColor', Theme.DARK);
    } else {
        refs.body.classList.add(Theme.LIGHT);
        localStorage.setItem('themeColor', Theme.LIGHT);
    }
}
