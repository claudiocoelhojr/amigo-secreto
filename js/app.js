let amigos = [];

function adicionar() {
    let amigo = document.getElementById('nome-amigo').value.trim();
    
    if (amigo === '') {
        alert('Informe o nome do amigo.');
        return;
    }

    if (!/^[a-zA-ZáàâãäéèêëíìîïóòôõöúùûüçÁÀÂÃÄÉÈÊËÍÌÎÏÓÒÔÕÖÚÙÛÜÇ\s]+$/.test(amigo)) {
        alert('O nome deve conter apenas letras e espaços.');
        return;
    }

    if (amigos.includes(amigo.toLowerCase())) {
        alert('Nome já adicionado. Insira outro nome.');
        return;
    }

    let lista = document.getElementById('lista-amigos');

    amigos.push(amigo.toLowerCase());

    if (lista.textContent === '') {
        lista.textContent = capitalize(amigo);
    } else {
        lista.textContent = lista.textContent + ', ' + capitalize(amigo);
    }

    document.getElementById('nome-amigo').value = '';
}

function capitalize(str) {
    return str
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
}

function sortear() {
    if (amigos.length < 4) {
        alert('Adicione pelo menos 4 amigos.');
        return;
    }

    embaralha(amigos);
    let sorteio = document.getElementById('lista-sorteio');

    sorteio.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        if (i == amigos.length - 1) {
            sorteio.innerHTML += capitalize(amigos[i]) + ' --> ' + capitalize(amigos[0]) + '<br>';
        } else {
            sorteio.innerHTML += capitalize(amigos[i]) + ' --> ' + capitalize(amigos[i + 1]) + '<br>';
        }
    }
}

function embaralha(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}
