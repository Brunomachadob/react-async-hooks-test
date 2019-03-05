import React, { useState, useEffect } from "react";

export default () => {
  const [i, setI] = useState(1);

  useEffect(() => {
    Promise.resolve(2).then(setI);
  }, []);

  return <div>{i}</div>;
};
