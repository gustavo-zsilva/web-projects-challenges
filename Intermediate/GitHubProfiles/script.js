const input = document.querySelector('.search input')
const searchBtn = document.querySelector('.search-button')

const darkModeButton = document.querySelector('.dark-mode-toggle')

const html = document.querySelector('html');


searchBtn.addEventListener('click', searchUser)

darkModeButton.addEventListener('click', changeThemeController)

let username;

let presetTheme = JSON.parse(localStorage.getItem('theme')) || initialMode;


function searchUser() {
    if (!inputFilled()) {
        showMessage('Digite um usuário no campo acima para prosseguir.')
        return;
    }

    username = input.value;
    const baseUrl = `https://api.github.com/users/${username}`;

    requestInfo(baseUrl)
}


async function requestInfo(url) {
    let data;

    try {
        const response = await fetch(url);

        // "data" é resposta da API do Github convertida em JSON
        // pois "fetch" não retorna JSON por padrão.
        
        data = await response.json();

        if (response.status !== 200) {
            return showMessage(`Something went wrong with the request. Status Code: ${response.status}`);
        }

    } catch (error) {
        console.error(error);
        showMessage(error);
    }

    url.includes('/repos')
    ? renderRepos(data)
    : renderData(data)
    
}

function renderData(data) {
    const { name, login, avatar_url, followers, public_repos } = data

    const output = document.querySelector('.output')
    const mainInfo = output.querySelector('.main-info')
    const sideInfo = output.querySelector('.side-info')

    output.classList.remove('hide')
    
    mainInfo.innerHTML = `<img src="${avatar_url}"/>`
    mainInfo.innerHTML += `<p class="name">${name}</p>`
    mainInfo.innerHTML += `<p class="username">${login}</p>`

    sideInfo.innerHTML = `<p><strong>Followers</strong>: ${followers}</p>`
    sideInfo.innerHTML += `<p><strong>Public Repositories</strong>: ${public_repos}</p>`

    requestInfo(`https://api.github.com/users/${username}/repos`)
}


function renderRepos(data) {
    const reposInfo = document.querySelector('.output .repos-info')
    reposInfo.innerHTML = `<p class="repos"><strong>Some Repos:</strong></p>`

    data.forEach((register, index) => {
        const { created_at, name } = register;
        let dateOfCreation = new Date(created_at)

        if (index > 4) { return; }

        reposInfo.innerHTML += `<p><strong>URL</strong>: <a href="https://github.com/${username}/${name}">${name}</a></p>`
        reposInfo.innerHTML += `<p><strong>Date of Creation</strong>: ${String(dateOfCreation).slice(0, 25)}</p>`
    })

}

const inputFilled = () => input.value.length > 0 ? true : false;


function showMessage(msg) {
    const warningDiv = document.querySelector('.warning')
    const warningText = warningDiv.querySelector('p')

    warningText.textContent = msg;
    warningDiv.classList.remove('hide')

    setTimeout(() => warningDiv.classList.add('hide'), 3000)
}

const getStyle = (element, style) => {
    return window
        .getComputedStyle(element)
        .getPropertyValue(style)
}

const initialMode = {
    bgColor: getStyle(html, '--bg-color'),
    textColor: getStyle(html, '--text-color') 
}

const darkMode = {
    bgColor: getStyle(html, '--text-color'),
    textColor: getStyle(html, '--bg-color')
}



function changeThemeController() {

    darkModeButton.textContent.includes('Dark')
    ? changeTheme(darkMode)
    : changeTheme(initialMode);

}

const transformKey = key =>
    '--' + key.replace(/([A-Z])/, "-$1").toLowerCase()


function changeTheme(theme) {

    Object.keys(theme).map(key => {
        html.style.setProperty(transformKey(key), theme[key]);
    })

    theme === darkMode
    ? darkModeButton.textContent = 'Light Mode'
    : darkModeButton.textContent = 'Dark Mode'

    saveTheme(theme)

}

function saveTheme(theme) {
    localStorage.setItem('theme', JSON.stringify(theme));
}

changeTheme(presetTheme)
