const helloElement = document.querySelector('h1')

async function getIp() {
    const response = await fetch('http://ip-api.com/json/?fields=status,countryCode,query')
    const data = await response.json()

    return data;
}

async function getHello() {
    const { countryCode, query } = await getIp();

    const response = await fetch(`https://fourtonfish.com/hellosalut/?cc=${countryCode.toLowerCase()}&ip=${query}`)
    const helloData = await response.json();

    renderHello(helloData)
}

function renderHello({ hello }) {
    helloElement.innerHTML = `${hello}!`;
}

getHello()
