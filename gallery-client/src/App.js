// @flow
import * as React from "react";
import ImageCards from "./ImageCards/ImageCards";
import "./App.css";

function App() {
  const [images, setImages] = React.useState([]);

  React.useEffect(() => {
    fetch("/api/get_photos")
      .then((res) => res.json())
      .then((data) => {
        setImages(data.paths);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>Image Gallery</p>
        <ImageCards images={images} />
      </header>
    </div>
  );
}

export default App;
