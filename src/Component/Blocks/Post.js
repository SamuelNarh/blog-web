import React, { useState, useEffect } from "react";
import "./Post.css";
import Button from "../UI/Button";

const Post = (props) => {
  const [imageUrl, SetImageUrl] = useState("");
  useEffect(() => {
    SetImageUrl(props.post.image_url);
  }, []);
  return (
    <div className="post">
      <img className="post_image" src={imageUrl} />
      <div className="post_content">
        <div className="post_title">{props.post.title}</div>
        <div className="post_creator">by {props.post.creator}</div>
        <div className="post_text">{props.post.content}</div>
        <Button className="post_delete"> Delete Post </Button>
      </div>
    </div>
  );
};

export default Post;
