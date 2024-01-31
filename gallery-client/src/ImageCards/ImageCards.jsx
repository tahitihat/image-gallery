// @flow
import * as React from "react";
import ImageCard from "../ImageCard/ImageCard";
import "./image_cards.scss";

type Props = {
  images: Array<string>,
};

function ImageCards({ images }: Props) {
  return (
    <div className="card-gallery">
      {images.map((image, i) => (
        <ImageCard key={i} imagePath={image} />
      ))}
    </div>
  );
}

export default ImageCards;
