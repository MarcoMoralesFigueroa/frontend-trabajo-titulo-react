import React, { useState } from "react";
import GraficoDisplay from "./components/grafico/GraficoDisplay";
import Instancia from "./components/instancia/Instancia";
import Resultado from "./components/resultado/Resultado";
import { useFetch } from "./useFetch";

const App = () => {

  const [apiUrl, setApiUrl] = useState(null);
  const { data, loading, error, handleCancelRequest } = useFetch(apiUrl);

  return (
    <>
      <Instancia setApiUrl={setApiUrl} />
      <Resultado data= {data} />
      {/* <GraficoDisplay /> */}
    </>
  );
};

export default App;
