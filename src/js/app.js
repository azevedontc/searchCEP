function search() {
    let cep = document.querySelector('#cep').value;

    if (cep.length !== 8) {
        alert('CEP Inválido!');
        return;
    }

    let url = `https://viacep.com.br/ws/${cep}/json/`;

    fetch(url).then(function(response){
        response.json().then(display)
    });
}

function display(dados){
    let result = document.querySelector('#result');

    if (dados.erro) {
        result.innerHTML = "Não foi possível localizar o endereço";
    } else {
        result.innerHTML = `<p>Endereço: ${dados.logradouro}</p>
                            <p>Complemento: ${dados.complemento}</p>
                            <p>Bairro: ${dados.bairro}</p>
                            <p>Cidade: ${dados.localidade} - ${dados.uf}</p>`
    }
}