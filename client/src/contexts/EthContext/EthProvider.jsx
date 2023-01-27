import React, { useReducer, useCallback, useEffect } from "react";
import Web3 from "web3";
import EthContext from "./EthContext";
import { reducer, actions, initialState } from "./state";



var newjson=[]
var imgjson=[];
          

export function EthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const init = useCallback(

    async artifact => {
      if (artifact) {
        const web3 = new Web3(Web3.givenProvider || "ws://127.0.0.1:7545");
        // const web3 = new Web3(Web3.providers.HttpProvider('http://3.36.66.11/'));
        const accounts = await web3.eth.requestAccounts();
        const networkID = await web3.eth.net.getId();
        const { abi } = artifact;
        let address, contract;
        var num= await web3.eth.getBlockNumber();

        try {
          address = artifact.networks[networkID].address;
          contract = new web3.eth.Contract(abi, address);

          for(let i=2; i<num-1; i++)
    {
      //조건은 토큰아이디 or block size-1해서 제한해야함
      //지금 다른계정이 업로드한 노래는 반영을 못하는 구조임.
     try{
      const value = await contract.methods.tokenURI(i).call();
      
      const response = await fetch(value);
      if(!response.ok)
      throw new Error(response.statusText);
      const json = await response.json();
      //이 json을 넘겨주면된다!
      newjson.push(json);
      //여기서 던져줘야할듯..ㅋㅋ
     }
     catch (err) {
      console.log("음악 리스트 토큰 overflow");
      break;

    }
     
    }
    // const valued=await contract.methods.balanceOf(accounts[0]).call();
    const Writer= await contract.methods.tokenURI(3).call();
    
    const response = await fetch(Writer);
      if(!response.ok)
      throw new Error(response.statusText);
      const json1 = await response.json();
      console.log(json1)
      imgjson.push(json1);
      var imgjson2=[]

      if(imgjson[0] !== 'undefined' && imgjson[0] != null)
      {
        var imgsrc1=imgjson[0].links.images[0].url;
        var imgsrc2=imgjson[0].links.images[1].url;
        var imgsrc3=imgjson[0].links.images[2].url;
        var author=imgjson[0].author;
        var name=imgjson[0].name;
        
        imgjson2.push(imgsrc1)
        imgjson2.push(imgsrc2)
        imgjson2.push(imgsrc3)
        
        imgjson2.push(author)
        imgjson2.push(name)
        
      }

      var num5= await web3.eth.getTransactionFromBlock(7);
      
      

          
        } catch (err) {
          console.error(err);
          console.log("에러위치");
        }
        dispatch({
          type: actions.init,
          data: { artifact, web3, accounts, networkID, contract,newjson,imgjson2,num5}
        });
      }
    }, []);

  
    const init2 = useCallback(
      async artifact2 =>
      {
        if(artifact2)
        {
          const web3 = new Web3(Web3.givenProvider || "ws://127.0.0.1:7545");
          // const web3 = new Web3(Web3.providers.HttpProvider('http://3.36.66.11/'));
          const {abi} = artifact2;
          const networkID = await web3.eth.net.getId();
          let address2, contract2;
          try{
            address2 = artifact2.networks[networkID].address;
            contract2 = new web3.eth.Contract(abi, address2);
        
            
          }
          catch (err) {
            console.error(err);
          }
          dispatch({
            type: actions.init,
            data: {artifact2, contract2}
          });
  
        }
      },[])
    
    
    
  useEffect(() => {
    const tryInit = async () => {
      try {
        const artifact2= require("../../contracts/Amaranthus.json")
        init2(artifact2);
      } catch (err) {
        console.error(err);
      }
    };

    tryInit();
  }, [init2]);

    
  useEffect(() => {
    const tryInit = async () => {
      try {
        const artifact = require("../../contracts/ArtGrowNFT.json");
        init(artifact);
      } catch (err) {
        console.error(err);
      }
    };

    tryInit();
  }, [init]);

  
  useEffect(() => {
    const tryInit = async () => {
      try {
        const artifact2= require("../../contracts/Amaranthus.json")
        init2(artifact2);
      } catch (err) {
        console.error(err);
      }
    };

    tryInit();
  }, [init2]);

  useEffect(() => {
    const events = ["chainChanged", "accountsChanged"];
    const handleChange = () => {
      init(state.artifact);

    };
    events.forEach(e => window.ethereum.on(e, handleChange));
    return () => {
      events.forEach(e => window.ethereum.removeListener(e, handleChange));
    };
  }, [init,state.artifact]);

  useEffect(() => {
    const events = ["chainChanged", "accountsChanged"];
    const handleChange = () => {
      init2(state.artifact2);
    };

    events.forEach(e => window.ethereum.on(e, handleChange));
    return () => {
      events.forEach(e => window.ethereum.removeListener(e, handleChange));
    };
  }, [init2, state.artifact2]);

  return (
    <EthContext.Provider value={{
      state,
      dispatch
    }}>
      {children}
    </EthContext.Provider>
    
  );
}


export default EthProvider;

