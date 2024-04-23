document.getElementById('trocar-conselho').addEventListener('click', ()=>{
    async function criarConselhoAleatorio() {
        const getUrl = 'https://api.adviceslip.com/advice'
        const response = await fetch(getUrl)
        return await response.json()
    }

    async function selecionarConselho() {
        const dados = await criarConselhoAleatorio()
        const textoConselho = document.getElementsByClassName('advice-description')
        const numeroConselho = document.getElementsByClassName('advice-id')
        textoConselho[0].innerHTML = `<p>${dados.slip.advice}<p>`
        numeroConselho[0].innerHTML = `<p>${dados.slip.id}<p>`
    }

    selecionarConselho()
})