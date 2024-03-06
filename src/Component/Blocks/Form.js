import React, { useState } from "react";
import "./Form.css";
import Card from "../UI/Card";
import Button from "../UI/Button";

const Form = (props) => {
  const [image, SetImage] = useState("");
  const [creator, SetCreator] = useState("");
  const [title, SetTitle] = useState("");
  const [text, SetText] = useState("");

  const CreatorEventHandler = (event) => {
    SetCreator(event.target.value);
  };

  const TextEventHandler = (event) => {
    SetText(event.target.value);
  };

  const TitleEventHandler = (event) => {
    SetTitle(event.target.value);
  };
  //This handles image upload
  const ImageUploadHandler = (event) => {
    const file = event.target.files[0];
    const urlImage = URL.createObjectURL(file);
    SetImage(urlImage);
  };
  const SubmitFormHandle = (event) => {
    event.preventDefault();
    console.log(image, creator, title, text);
    SetCreator("");
    SetImage("");
    SetText("");
    SetTitle("");
  };
  return (
    <Card className="input">
      <form onSubmit={SubmitFormHandle}>
        <label>Title</label>
        <input type="text" value={title} onChange={TitleEventHandler} />
        <label>Text</label>
        <textarea
          type="text"
          value={text}
          rows="10"
          onChange={TextEventHandler}
        />
        <label>Image</label>
        <input type="file" onChange={ImageUploadHandler} />
        <label>Creator's Name</label>
        <input type="text" value={creator} onChange={CreatorEventHandler} />
        <Button>Add Post</Button>
      </form>
    </Card>
  );
};

export default Form;
