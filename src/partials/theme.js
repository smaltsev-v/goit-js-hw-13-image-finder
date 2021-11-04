const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const bodyRef = document.querySelector('body');
const checkboxRef = document.querySelector('#theme-switch-toggle');


const updateTheme = (addTheme, removeTheme) => {
bodyRef.classList.remove(removeTheme);
bodyRef.classList.add(addTheme);
};

const onCheckboxChange = () => { 
  if (checkboxRef.checked) {
    localStorage.setItem('theme', Theme.DARK)
    updateTheme(Theme.DARK, Theme.LIGHT)
  } else {
    localStorage.setItem('theme', Theme.LIGHT)
    updateTheme(Theme.LIGHT, Theme.DARK)
  }
}

const  saveSettings = () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === Theme.DARK) {
    checkboxRef.checked = 'true';
    onCheckboxChange();
  }
}


checkboxRef.addEventListener('change', onCheckboxChange)
saveSettings()
