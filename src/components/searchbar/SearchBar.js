import React, { useState, useEffect } from "react";
import {
  TextField,
  Select,
  Box,
  MenuItem,
  InputLabel,
} from "@material-ui/core";
import ImageResults from "../imageResults/ImageResults";
import axios from "axios";

export default function SearchBar() {
  const API_KEY = "17948866-a8bea270ce16ae94ad9ee0846";
  const url = "https://pixabay.com/api";

  const [searchText, setSearchText] = useState("");
  const [amount, setAmount] = useState(10);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchApi = () => {
      if (searchText === "") {
        setImages([]);
      } else {
        axios
          .get(
            `${url}/?key=${API_KEY}&q=${searchText}&image_type=photo&per_page=${amount}&safesearch=false`
          )
          .then((response) => {
            setImages(response.data.hits);
          })
          .catch((error) => console.log(error));
      }
    };
    fetchApi();

    console.log(images);
  }, [searchText]);

  return (
    <div>
      <Box mx={1}>
        <TextField
          name="searchText"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          label="Search for images"
          variant="outlined"
        />
      </Box>
      <br />
      <Box mx={1}>
        <InputLabel id="demo-simple-select-label">Amount</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={amount}
          onChange={(e) => {
            setAmount(e.target.value);
          }}
        >
          <MenuItem value={5}>Five</MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </Box>
      <br />
      {images.length > 0 ? <ImageResults images={images} /> : null}
    </div>
  );
}
