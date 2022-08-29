import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const s1 = {
    name: "Itashi",
    class: "5b",
  };
  const [state, setState] = useState(s1);
  const update = () => {
    setTimeout(() => {
      setState({
        name: "Pathria",
        class: "9b",
      });
    }, 1000);
  };
  return (
    <NoteContext.Provider value={{ state, update }}>
      {" "}
      {/*this means we can even export our function from this*/}
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;

//this shows that whatever value we will pass in the state object that will be accessible by each and every children of this conntext in the app.
