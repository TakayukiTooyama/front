import React from "react";

import { proxy, useSnapshot } from "valtio";

const countState = proxy({ count: 0 });

const Valtio = () => {
  const { count } = useSnapshot(countState);

  const incrment = () => {
    countState.count++;
  };

  return (
    <div>
      <button onClick={incrment}>Count Up!</button>
      {count}
    </div>
  );
};

export default Valtio;
