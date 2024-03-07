import React, { useState } from "react";
import "./Form.css";
import Card from "../UI/Card";
import Button from "../UI/Button";

const BASE_URL = "http://127.0.0.1:8000/";

const Form = (props) => {
  const [image, SetImage] = useState(null);
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
    if (event.target.files[0]) {
      const file = event.target.files[0];
      // const urlImage = URL.createObjectURL(file);
      SetImage(file);
    }
  };
  const SubmitFormHandle = (event) => {
    event.preventDefault();
    console.log(image, creator, title, text);
    SetCreator("");
    SetText("");
    SetTitle("");
    //Creating a form data to send images and file to the backend api
    // Image uploading first
    const formData = new FormData();
    formData.append("image", image);

    //My method
    const requestOptions = {
      method: "POST",
      body: formData,
    };

    //perform fetch
    fetch(BASE_URL + "blog/images", requestOptions)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        createPost(data.filename);
      })
      .catch((error) => {
        console.log(error);
      })
      //reset image to null
      .finally(() => {
        //reset variable to null
        SetImage(null);
        //reset my ui
        document.getElementById("fileInput").value = null;
      });
  };

  //what we send to the body to the backend
  const createPost = (imageUrl) => {
    const json_string = JSON.stringify({
      image_url: imageUrl,
      title: title,
      content: text,
      creator: creator,
    });
    const requestOptions = {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: json_string,
    };
    fetch(BASE_URL + "blog", requestOptions)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        window.location.reload();
        window.scrollTo(0, 0);
      })
      .catch((error) => {
        console.log(error);
      });
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
        <input type="file" id="fileInput" onChange={ImageUploadHandler} />
        <label>Creator's Name</label>
        <input type="text" value={creator} onChange={CreatorEventHandler} />
        <Button>Add Post</Button>
      </form>
    </Card>
  );
};

export default Form;
