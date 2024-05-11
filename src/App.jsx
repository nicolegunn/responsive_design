import { useState } from "react";
import Login from "./components/Login.jsx";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import CardContainer from "./components/CardContainer.jsx";

const imgSize = "350/250";
const placeholderText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";

const cards = [
  {
    image: `https://picsum.photos/id/29/${imgSize}?grayscale`,
    title: "Title 1",
    text: placeholderText,
  },
  {
    image: `https://picsum.photos/id/14/${imgSize}?grayscale`,
    title: "Title 2",
    text: placeholderText,
  },
  {
    image: `https://picsum.photos/id/29/${imgSize}?grayscale`,
    title: "Title 3",
    text: placeholderText,
  },
];

function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const toggleLoginBox = () => {
    setIsLoginOpen(!isLoginOpen);
  };

  return (
    <>
      {isLoginOpen && <Login toggleLoginBox={toggleLoginBox} />}
      <Nav toggleLoginBox={toggleLoginBox} />
      <Hero />
      <CardContainer cards={cards} />
    </>
  );
}

export default App;
