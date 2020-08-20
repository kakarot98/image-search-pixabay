import React from "react";
import {
  GridList,
  GridListTileBar,
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
          <GridListTileBar
            title={img.tags}
            key={img.id}
            subtitle={
              <span>
                by <strong>{img.user}</strong>
              </span>
            }
            actionIcon={
              <IconButton>
                <ZoomIn color="aqua" />
              </IconButton>
            }
          >
            <img src={img.largeImageURL} alt="" />
          </GridListTileBar>
        ))}
      </GridList>
    );
  } else {
    imageContentList = null;
  }

  return <div>{imageContentList}</div>;
};

export default ImageResults;
