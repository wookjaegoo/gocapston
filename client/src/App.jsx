
import { useState,useEffect  } from "react";
import React from "react";
import "./App.css";
import Remoter from "./components/Remoter";
import useEth from "./contexts/EthContext/useEth";
import Loading from "./components/Loading"
import BottomBar from "./components/BottomBar";


function App() {
  
  const{state: {imgjson2,num5} } = useEth();
  const [loading, setLoading] = useState(true);

  const mainApi = async () => {
    setLoading(true); // api 호출 전에 true로 변경하여 로딩화면 띄우기
      try {
        const response = await fetch(`api url`, {
          method: 'POST',
          headers: {
            Accept: 'application/html',
            'Content-Type': 'application/html',
          }
        });
  
        const result = await response;
        console.log('mainData', result);
      
        setLoading(false)
        // api 호출 완료 됐을 때 false로 변경하려 로딩화면 숨김처리
      } catch (error) {
        window.alert(error);
      }
      
  };
  
      useEffect(() => {
        
          mainApi();
          
          
      }, [
      ]);
      
  

  return (
    
    <React.Fragment>


      {loading ?<Loading/> :<Remoter props={imgjson2} trdata={num5} /> }
      
      <BottomBar>
        </BottomBar>
    </React.Fragment>
    
  );
}

export default App;
