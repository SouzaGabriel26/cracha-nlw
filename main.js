// object
const linksSocialMedia = {
  github: 'SouzaGabriel26',
  youtube: 'rocketseat',
  facebook: 'rocketseat',
  instagram: 'gabrielsouzalv',
  twitter: 'Ga_alv3s'
}

// muda/substitui o H1 (id = userName)
userName.textContent = 'Gabriel Alves'

function changeSocialMediaLinks() {
  // para cada li existente nos "filhos" do ul, cujo id = "socialLinks"
  for (let li of socialLinks.children) {
    // pega cada classe da "li"
    const social = li.getAttribute('class')

    // substitui os links pelas classes pegadas anteriormente e pelos usernames
    // EX: "https://(?).com/(?)" -> "https://youtube.com/rocketseat"
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  // pega o conteúdo da url
  // then() = promisse
  fetch(url)
    .then(response => response.json()) // fetch -> obj -> json
    .then(data => {
      userName.textContent = data.name // id da tag <h1>
      userBio.textContent = data.bio // id da tag <p>
      userLink.href = data.html_url // id da tag <a>
      userPhoto.src = data.avatar_url // id da tag <img>
      userLogin.textContent = data.login // id da tag <span>
    })
  // um then() pega a resposta do outro
}

getGitHubProfileInfos()
