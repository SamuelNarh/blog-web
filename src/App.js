import React, { useEffect, useState } from "react";
import "./App.css";
import Form from "./Component/Blocks/Form";
import Post from "./Component/Blocks/Post";

//my end point(Backend endpoint)
const BASE_URL = "http://127.0.0.1:8000/";

const App = () => {
  const [posts, SetPosts] = useState([]);
  useEffect(() => {
    fetch(BASE_URL + "blog/all")
      .then((response) => {
        const json = response.json();
        console.log(json);
        if (response.ok) {
          return json;
        }
        throw response;
      })
      .then((data) => {
        return data.reverse();
      })
      .then((data) => {
        SetPosts(data);
      })
      .catch((error) => {
        console.log(error);
        alert(error);
      });
  }, []);
  return (
    <div className="App">
      <h1 className="blog_tile">Chester's Amazing Blog Post</h1>
      <div>
        {posts.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </div>
      <Form/>
    </div>
  );
};
export default App;
