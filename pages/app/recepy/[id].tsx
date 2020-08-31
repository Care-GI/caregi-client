import React from "react";
import { useRouter } from "next/router";

import LayoutApp from "@layout/LayoutApp";

const recepy = () => {
  const router = useRouter();

  const {
    query: { id },
  } = router;

  return (
    <LayoutApp>
      <h1>Receta {id}</h1>
    </LayoutApp>
  );
};

export default recepy;
