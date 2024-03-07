import React, { useState, useEffect } from "react";
import "./Post.css";
import Button from "../UI/Button";
const BASE_URL = "http://127.0.0.1:8000/";

const Post = (props) => {
  const [imageUrl, SetImageUrl] = useState("");
  useEffect(() => {
    SetImageUrl(BASE_URL + props.post.image_url);
  }, []);

  //Delete Function Handler
  const DeleteEventHandler = (event) => {
    // event.preventDefault();
    console.log(event);
    const requestOptions = {
      method: "DELETE",
    };
    //pass in th id
    fetch(BASE_URL + "blog/" + props.post.id, requestOptions)
      .then((response) => {
        if (response.ok) {
          //This refreshes the page or reloads the page
          window.location.reload();
        }
        throw response;
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="post">
      <img className="post_image" src={imageUrl} alt="Creater pic here" />
      <div className="post_content">
        <div className="post_title">{props.post.title}</div>
        <div className="post_creator">by {props.post.creator}</div>
        <div className="post_text">{props.post.content} </div>
        <button className="post_delete" onClick={DeleteEventHandler}>
          Delete Post
        </button>
      </div>
    </div>
  );
};

export default Post;
