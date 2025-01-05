import React from "react";
import { useOverlay, Overlay } from "dothedue";
import "dothedue/dist/index.css";

const App = () => {
  const data = {
    title: "Hi There! Whoever is Reading",
    description:
      "I've started this project for Mr. X in Feb 2022 and its been more than 2 Years the payment for this project is still pending from the client's end. I've tried to reach out to him multiple times but he is not responding. I'm not sure what to do next.",
    style: 2,
    amount: "₹1000",
    contact: {
      name: "Mr. X",
      email: "name@mail.com",
      phone: "1234567850",
    },
    fullscreen: false,
    bottomtitle: "Please help me with this",
    callToAction: {
      text: "Pay Now",
      link: "https://www.paypal.com",
    },
  };
  useOverlay(data);
  return (
    <>
      <Overlay />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100vw",
          fontSize: "2rem",
        }}
      >
        A test Project
      </div>
    </>
  );
};

export default App;
