
async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/adeiltonmsantos/js-developer-portfolio/refs/heads/main/data/profile.json';
    const response = await fetch(url)
    return await response.json()
}
