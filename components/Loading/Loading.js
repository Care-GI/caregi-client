import React from "react";

import Screen from "../ScreenC/Screen";
import Spinner from "../Spinner/Spinner";

const Loading = () => {
  return (
    <Screen color={"#fff"} extraSize={1}>
      <div style={{ marginTop: "10rem" }}>
        <div className="col-1 m-auto">
          <Spinner />
        </div>
      </div>
    </Screen>
  );
};

export default Loading;
