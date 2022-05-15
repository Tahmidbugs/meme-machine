import React from "react";

const Meme = () => {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/64ku.jpg",
  });

  const [allMemes, setAllMemes] = React.useState([]);

  function handleClick() {
    const memesarray = allMemes;
    const link = memesarray[Math.floor(Math.random() * 100)].url;

    setMeme((prev) => {
      return { ...prev, randomImage: link };
    });
    console.log("url is oddly enough,", meme.randomImage);
  }

  function handleChange(event) {
    setMeme((prev) => {
      return { ...prev, [event.target.name]: event.target.value };
    });
  }

  function clearCaption() {
    setMeme((prev) => {
      return { ...prev, topText: "", bottomText: "" };
    });
  }

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  return (
    <div>
      <div className="Meme--inputs">
        <input
          className="Meme--inputboxes"
          placeholder="Top Text"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
          type="text"
        />
        <input
          className="Meme--inputboxes"
          placeholder="Bottom Text"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
          type="text"
        />
        <button className="Meme--resetButton" onClick={clearCaption}>
          Reset Caption
        </button>
        <button className="Meme--button" onClick={handleClick}>
          Generate Meme
        </button>
      </div>
      <img src={meme.randomImage} className="Meme" alt="meme" />
      {meme.topText && <h3 className="Meme--caption top">{meme.topText}</h3>}
      {meme.bottomText && (
        <h3 className="Meme--caption bottom">{meme.bottomText}</h3>
      )}
    </div>
  );
};

export default Meme;
