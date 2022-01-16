fetch('https://api.github.com/users/ronniepettersonn')
.then(response => response.json())
.then(function(data) {
    const id = data.id
    const login = data.login
    const avatar = data.avatar_url
    const location = data.location
    const name = data.name
    const company = data.company
    const blog = data.blog
    const twitter = data.twitter_username
    const email = data.email

    const fotoPerfil = document.querySelector('.profile img')
    const fotoPerfilPosts = document.querySelector('.img-post img')
    const nome = document.querySelector('.info-profile span')
    const local = document.querySelector('.links ul li:nth-child(1) p')
    const trabalho = document.querySelector('.links ul li:nth-child(2) p')
    const github = document.querySelector('.links ul li:nth-child(3) p')
    const twitterDOM = document.querySelector('.links ul li:nth-child(5) p')
    const site = document.querySelector('.links ul li:nth-child(6) p a')
    const emailDOM = document.querySelector('.links ul li:nth-child(7) p a')

    site.setAttribute('href', blog)
    site.setAttribute('target', '_blank')
    
    site.textContent = blog
    twitterDOM.textContent = twitter
    github.textContent = login
    trabalho.textContent = company
    local.textContent = location
    nome.textContent = name
    fotoPerfil.setAttribute('src', avatar)
    fotoPerfilPosts.setAttribute('src', avatar)
})
.catch(e => console.log(e))

fetch('https://api.github.com/users/ronniepettersonn/repos')
.then(response => response.json())
.then(function(data) {
    data.filter(function(repos) {
        const titleRepo = repos.name
        const description = repos.description
        const stars = repos.stargazers_count
        const linguage = repos.language
        const urlRepo = repos.clone_url 

        const projectItem = document.querySelector('.my-projects')

        const element = '<a href="'+ urlRepo +'" target="_blank"><div class="my-project-item"><div class="header-project"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-folder"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg> <p>' + titleRepo + '</p></div> <div class="content-project"> <p>'+ description +'</p></div> <div class="footer-projetc"> <div class="count"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg> <p>'+ stars +'</p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-git-branch"><line x1="6" y1="3" x2="6" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path></svg> <p>' + stars + '</p> </div> <div class="tecnology-project"> <div class="color-tecnology"></div><p>'+ linguage +'</p></div></div></div> </a>'

        
        
        projectItem.innerHTML += element



        

        
        
    })
})
.catch(e => console.log(e))
