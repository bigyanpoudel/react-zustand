import React from "react";
import { useStore } from "../store/store";

const Section = () => {
  const { data } = useStore((state) => state);
  console.log("sub component", data);
  return <div>Section</div>;
};

export default Section;
