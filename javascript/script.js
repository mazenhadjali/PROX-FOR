const tunisians = Object.freeze([
    Object.freeze({ name: 'Ahmed' }),
    Object.freeze({ name: 'Mohamed' }),
    Object.freeze({ name: 'Ali' }),
    Object.freeze({ name: 'Hassan' }),
    Object.freeze({ name: 'Khalil' })
]);

function getCitizens() {
    const citizens = document.getElementById('citizens');
    if (!citizens) return;
    
    citizens.innerHTML = '';

    tunisians.forEach(function (citizen) {
        const li = document.createElement('li');
        li.textContent = citizen.name;
        citizens.appendChild(li);
    });
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('fetchCitizensBtn').addEventListener('click', getCitizens);
});