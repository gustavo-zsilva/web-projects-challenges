const nameList = document.querySelector('nav ul')
const allNames = document.querySelectorAll('nav ul li')

let people = [
    { name: 'teste1', street: 'street', city: 'pelotas', country: 'Brasil', id: 0 },
    { name: 'teste2', street: 'street', city: 'pelotas', country: 'Brasil', id: 1 },
    { name: 'teste3', street: 'street', city: 'pelotas', country: 'Brasil', id: 2 },
    { name: 'teste4', street: 'street', city: 'pelotas', country: 'Brasil', id: 3 },
    { name: 'teste5', street: 'street', city: 'pelotas', country: 'Brasil', id: 4 },
    { name: 'teste6', street: 'street', city: 'pelotas', country: 'Brasil', id: 5 },
    { name: 'teste7', street: 'street', city: 'pelotas', country: 'Brasil', id: 6 },
];

// Renderizar os nomes de acordo com o array de objetos

people.map(({name, id}) => {
    const li = document.createElement('li');
    li.dataset.id = id;
    li.textContent = name;
    li.addEventListener('click', () => showDetails(li));

    nameList.appendChild(li);
})

function showDetails(li) {
    const id = li.dataset.id;
    const selectedValue = people.filter(person => person.id == id)[0];

    const modal = document.querySelector(`ul li[data-id="${id}"] .modal`);

    if (modal) {
        modal.classList.add('removeAnimation');
        modal.addEventListener('animationend', () => modal.remove());
        return;
    }

    document.querySelectorAll('ul li .modal').forEach(modal => {
        modal.remove();
    })

    const details =`<div class="modal">
        City: ${selectedValue.city}
        Country: ${selectedValue.country}
        Street: ${selectedValue.street}
    </div>`

    li.innerHTML += details;
}
