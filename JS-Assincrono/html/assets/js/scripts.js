/* Utilize a API https://thatcopy.pw/catapi/rest para fazer as chamadas com o método fetch();
Utilize seus conhecimentos na manipulação do DOM para criar a imagem e ativar o evento de clique do botão! 
*/

const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
const catBtn = document.getElementById('change-cat');


const getCats = async () => {
    try{
    const data = await fetch (BASE_URL);
    const json = await data.json();

    return json.webpurl;
    } catch (e) {
        console.log(e.message);
    }
};

const loadImg = async () => {
    const catImg = document.getElementById('cat');
    catImg.src = await getCats();
}

catBtn.addEventListener('click', loadImg);

loadImg();

/*
Sem utilizar try...catch
const getCats = async () => {
    const data = await fetch (BASE_URL)
        .then((res) => res.json())
        .catch((e) => console.log(e));

    return data.webpurl;
};
*/