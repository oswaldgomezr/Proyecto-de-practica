const publicKey = 'a28e7a467905405a09cb32066bc63606';
const privateKey = '91f95afaa5620862c6a6b987608501a7340fbb00';
     const ts = new Date().getTime();
      const hash = CryptoJS.MD5(ts + privateKey + publicKey).toString();
      const url = `http://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`;

    fetch(url)
  .then(response => response.json())
  .then(data => {
    const characters = data.data.results;
    window.characters = characters;
    console.log(characters);

    // Lineas de codigo para hacer consulta de los datos de la API en la consola.
    // console.log(characters[4].name);
    // console.log(characters[4].description);
  })
  .catch(error => console.error(error));