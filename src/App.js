import React from "react";
import "./styles.css";
import Person from "./Person";
import Address from "./Address";
import Increment from "./increment";
import IncrementFocntaional from "./IncrementFocntaional";

export default function App() {
  return (
    <div>
      <Person />
      <Address name="ravi" />
      <Increment />
    </div>
  );
}
