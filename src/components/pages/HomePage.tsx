import React from "react";
import About from "./homeSections/About";
import Welcome from "./homeSections/Welcome";
import Propose from "./homeSections/Propose";
import Mugs from "./homeSections/Mugs";
import Success from "./homeSections/Success";
import Branches from "./homeSections/Branches";
import Stories from "./homeSections/Stories";
import Video from "./homeSections/Video";
import Parentschildren from "./homeSections/Parents-children";
import Questions from "./homeSections/Questions";
 
const HomePage = () => {
  return (
    <>
      <Welcome />
      <About />
      <Propose/>
      <Mugs/>
      <Success/>
      <Branches/>
      <Stories/>
      {/* <Video/> */}
      <Parentschildren/>
      <Questions/>
      
    </>
  );
};

export default HomePage;
 