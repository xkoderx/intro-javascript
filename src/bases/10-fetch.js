const apiKey = "pogHCrPRyanLqk62DAZkxcdD44H4Uu6B";

const pet = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

pet
  .then((resp) => resp.json())
  .then(({ data }) => {
    const { url } = data.images.original;
    const img = document.createElement("img");
    img.src = url;
    document.body.append(img);
  })
  .catch(console.warn);
