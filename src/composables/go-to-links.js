function openGitHub(repo) {
    window.open(`https://github.com/seankelliher/${repo}`, "gitHubTab");
}

function openNetlify(repo) {
    window.open(`https://sean-kelliher-${repo}.netlify.app`, "netlifyTab");
}

function openHeroku(repo) {
    window.open(`https://${repo}.herokuapp.com/`, "herokuTab");
}

export { openGitHub, openNetlify, openHeroku };