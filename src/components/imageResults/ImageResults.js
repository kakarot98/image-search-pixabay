import React, { useState } from "react";
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
  const [open, setOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = (img) => {
    setOpen(true);
    setCurrentImage(img);
  };

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
                <IconButton onClick={() => handleOpen(img.largeImageURL)}>
                  <ZoomIn style={{ color: "white" }} />
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

  const actions = [<Button onClick={() => handleClose()} variant="text" style={{label:'Close'}}>Close</Button>];

  return (
    <div>
      {imageContentList}
      <Dialog actions={actions} open={open} onClose={() => handleClose()}>
        <img src={currentImage} alt="" style={{ width: "100%" }} />
      </Dialog>
    </div>
  );
};

export default ImageResults;
