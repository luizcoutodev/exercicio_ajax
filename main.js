document.addEventListener('DOMContentLoaded', function(){
    const avatar = document.querySelector('#avatar');
    const name = document.querySelector('#name');
    const username = document.querySelector('#username');
    const bio = document.querySelector('#bio');
    const repos = document.querySelector('#repos');
    const followers = document.querySelector('#followers');
    const following = document.querySelector('#following');

    // fetch com a api do githube logo após retornando a resposta -> then (então) continua a função.
    fetch('https://api.github.com/users/luizcoutodev')
    .then(function(res){
        return res.json();
        // puxou o arquivo .json da api com os dados. 
    }) 
    .then(function(json){
        // está lendo o arquivo json que foi gerado [O QUE RETORNOU]
        avatar.src = json.avatar_url;
        name.innerText = json.name;
        username.innerText = `@${json.login}`;
        bio.innerText = json.bio;
        repos.innerText = json.public_repos;
        followers.innerText = json.followers;
        following.innerText = json.following;
    })
})