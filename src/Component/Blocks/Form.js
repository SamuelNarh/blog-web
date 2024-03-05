import React from "react";
import "./Form.css";
import Card from "../UI/Card";


const Form = (props) => {
  return (
    <Card className="input">
      <form>
        <label>Title</label>
        <input type="text" />
        <label>Content</label>
        <input type="textarea" style={{ width: 400, height: 300 }} />
        <label>Image</label>
        <input type="file" formTarget=".png,.jpg" />
        <label>Creator's Name</label>
        <input />
      </form>
    </Card>
  );
};

export default Form;
