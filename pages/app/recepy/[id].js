import React from "react";
import LayoutApp from "../../../layout/LayoutApp";
import { useRouter } from "next/router";

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
