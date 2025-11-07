async function getFortune() {
    const fortunes = require ('./fortunes');
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    return fortunes[randomIndex];
}

getFortune().then(fortune => console.log(fortune));