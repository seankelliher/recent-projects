function openGitHub(repo) {
    window.open(`https://github.com/seankelliher/${repo}`, "_blank");
}

function openNetlify(repo) {
    window.open(`https://sean-kelliher-${repo}.netlify.app`, "_blank");
}

function openHeroku(repo) {
    window.open(`https://${repo}.herokuapp.com/`, "_blank");
}

export { openGitHub, openNetlify, openHeroku };