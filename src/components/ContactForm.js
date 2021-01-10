import React, { useState, useEffect } from "react";

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import Hero from '../components/Hero';
import Content from '../components/Content';
import fire from "../fire";
import "../pages/app.css";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    fire.collection("contacts")
      .add({
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
        setLoader(false);
        alert("Message Has Been Submitted");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label>Name</label>
      <input
        placeholder="Masukkan Nama"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>Email</label>
      <input
        placeholder="Masukkan Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label>Message</label>
      <textarea
        placeholder="Masukkan Pesan"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>

      <Button
        type="submit"
        className="btn btn-dark"
      >
        SUBMIT
      </Button>
    </form>
  );
};

export default ContactPage;