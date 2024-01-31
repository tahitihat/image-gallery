import "./App.css";
import ImageCards from "./ImageCards/ImageCards";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Image Gallery</p>
        <ImageCards
          images={[
            "./tree-with-white-background.jpg",
            "./tree-with-white-background.jpg",
            "./tree-with-white-background.jpg",
          ]}
        />
      </header>
    </div>
  );
}

export default App;
