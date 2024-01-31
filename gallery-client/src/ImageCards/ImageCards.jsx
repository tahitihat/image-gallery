// @flow
import * as React from "react";
import ImageCard from "../ImageCard/ImageCard";

type Props = {
  images: Array<string>,
};

function ImageCards({ images }: Props) {
  return (
    <div className="card-gallery">
      {images.map((image, i) => (
        <ImageCard imagePath={image} />
      ))}
    </div>
  );
}

export default ImageCards;
