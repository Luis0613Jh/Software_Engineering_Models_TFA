import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

const TaxiContext = React.createContext();
const { Provider } = TaxiContext;

function TaxiContextProvider(props) {
  const [dataTaxi, setDataTaxi] = useState(null);

  useEffect(() => {
    const options = {
      method: 'POST',
      url: 'http://169.62.217.189:8080/taxi-seguro/consultarSc',
      headers: {'content-type': 'application/json', version: '1.0.0'},
      data: {placaReg: 'ABF9733'}
    };
    
    axios.request(options).then(function (response) {
      setDataTaxi(response.data.lV[0]);
    }).catch(function (error) {
        console.error(error);
    });
  }, []);
  return <Provider value={dataTaxi}>{props.children}</Provider>;
}
export { TaxiContext, TaxiContextProvider };
