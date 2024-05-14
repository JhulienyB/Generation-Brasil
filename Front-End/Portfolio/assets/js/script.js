let sobre = document.querySelector(".sobre");

async function getApiGithub(){
    try {
        const dadosPerfil = await fetch("https://api.github.com/users/JhulienyB");
        const perfil = await dadosPerfil.json();
   
        let conteudo = `<div class="foto">
        <img src="${perfil.avatar_url}" alt="Foto do Perfil Github - ${perfil.name}">
        </div>
        <div class="quem">
        <h1>Quem sou eu?</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam odit voluptates<br>
            incidunt inventore rem error harum blanditiis accusamus vitae, minus fugit<br>
            consequatur? Dolorum maiores magni deleniti modi sit laudantium totam!</p>
        <div class="dados-git">
        <a href='${perfil.html_url}'><button type="button">Github</button></a>
            <p>${perfil.followers} Seguidores</p>
            <p>${perfil.public_repos} Repositórios</p>
        </div>
        </div>`

        sobre.innerHTML += conteudo;

    } catch (error) {
        console.log(error);
    }
}

getApiGithub();