import React from "react";
import useEth from "../contexts/EthContext/useEth";
import Footer from "./Footer";



function Main()
{
  const{state:{newjson}} = useEth();

    return(
    <React.Fragment>
      <Footer/>
          
    </React.Fragment>
    );
}

export default Main;