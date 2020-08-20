import React from "react";
import {
  GridList,
  GridListTileBar,
  GridListTile,
  IconButton,
  Dialog,
  Button,
} from "@material-ui/core";
import { ZoomIn } from "@material-ui/icons";

const ImageResults = ({ images }) => {
  let imageContentList;
  if (images) {
    imageContentList = (
      <GridList cols={3}>
        {images.map((img) => (
          <GridListTile key={img.id}>
            <img src={img.largeImageURL} alt={img.tags} />
            <GridListTileBar
              title={img.tags}
              subtitle={
                <span>
                  by <strong>{img.user}</strong>
                </span>
              }
              actionIcon={
                <IconButton>
                  <ZoomIn style={{color: "white"}} />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    );
  } else {
    imageContentList = null;
  }

  return <div>{imageContentList}</div>;
};

export default ImageResults;
