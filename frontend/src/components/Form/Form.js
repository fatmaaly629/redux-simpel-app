import React from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/userSlice";
import "./Form.css";
import { useState } from "react";

export default function Form(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  const handelClick = (e) => {
    e.preventDefault();
    dispatch(addUser({ name, email }));
  };

  return (
    <form onSubmit={handelClick}>
      <div className="form-group">
        <input
          type="text"
          placeholder="EnterName"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <input
          type="Email"
          placeholder="EnterEmail"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <input type="submit" placeholder="addUsser" />
      </div>
    </form>
  );
}
