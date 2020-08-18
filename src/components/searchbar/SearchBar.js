import React, { useState } from "react";
import TextField from "material-ui/TextField";
import SelectField from "material-ui/SelectField";

export default function SearchBar() {
  const API_KEY = "17948866-a8bea270ce16ae94ad9ee0846";
  const url = "https://pixabay.com/api";

  const [searchtext, setSearchText] = useState("");
  const [amount, setAmount] = useState("");
  const [images, setImages] = useState([]);
  return (
    <div>
      <TextField
        name="searchtext"
        value={searchtext}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
        placeholder="Search for images"
      />
    </div>
  );
}
