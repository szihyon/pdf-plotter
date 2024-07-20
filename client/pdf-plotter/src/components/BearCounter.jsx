import React from "react";
import useStore from "../store/store.js";

function BearCounter() {
    const bears = useStore((state) => state.bears)
    return <h1 className="text-xl text-gray-800 mb-4">{bears} around here...</h1>;
  }

export default BearCounter;