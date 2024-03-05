import React, { useState, useEffect } from "react";
import "./Post.css";


const Post = (props) => {
  console.log(props);
  const [imageUrl, SetImageUrl] = useState("");
  useEffect(() => {
    SetImageUrl(props.post.image_url);
  }, []);
  return (
    <div className="post">
      <img src={imageUrl} />
    </div>
  );
};

export default Post;
