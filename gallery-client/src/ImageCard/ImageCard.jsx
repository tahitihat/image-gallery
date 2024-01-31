// @flow
import * as React from "react";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import "./image_card.scss";

type Props = {
  imagePath: string,
};

function ImageCard({ imagePath }: Props) {
  const [upCount, setUpCount] = React.useState<number>(0);
  const [downCount, setDownCount] = React.useState<number>(0);

  return (
    <div className="image-card">
      <img alt="" className="card-image" src={`/api/get_photo/${imagePath}`} />
      <div className="reactions">
        <div className="reaction-container">
          <div
            className="reaction-button"
            onClick={(e) => setUpCount(upCount + 1)}
            role="button"
          >
            <ThumbUpIcon />
          </div>
          <p>{`Ups: ${upCount}`}</p>
        </div>
        <div className="reaction-container">
          <div
            className="reaction-button"
            onClick={(e) => setDownCount(downCount + 1)}
            role="button"
          >
            <ThumbDownIcon />
          </div>
          <p>{`Downs: ${downCount}`}</p>
        </div>
      </div>
    </div>
  );
}

export default ImageCard;
