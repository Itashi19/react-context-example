import React, { useEffect } from "react";
import NoteContext from "./context/noteContext";
import { useContext } from "react";

const About = () => {
  const a = useContext(NoteContext);
  useEffect(() => {
    a.update();
    //eslint-disable-next-line;
  }, []);
  return <div>This is an example of context api {a.state.name}</div>;
};

export default About;
