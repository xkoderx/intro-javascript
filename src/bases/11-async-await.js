const getImagen = async () => {
  try {
    const apiKey = "pogHCrPRyanLqk62DAZkxcdD44H4Uu6B";
    const pet = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );
    const { data } = await pet.json();
    const { url } = data.images.original;
    const img = document.createElement("img");
    img.src = url;
    document.body.append(img);
  } catch (error) {
    console.log(error);
  }
};
getImagen();
