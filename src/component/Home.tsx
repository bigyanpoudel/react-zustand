import React from "react";
import { useStore } from "../store/store";

const Home = () => {
  const { data } = useStore((state) => state);
  console.log("sub component", data);
  return (
    <div>
      {data.map((el) => (
        <div>
          name: {el.name}
          address: {el.address}
        </div>
      ))}
    </div>
  );
};

export default Home;
