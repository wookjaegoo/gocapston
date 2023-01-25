import { useState } from 'react'
import { create } from 'ipfs-http-client'
import React from 'react';
import "./Footer.css"
import useEth from "../contexts/EthContext/useEth";
const client2= create('/ip4/127.0.0.1/tcp/5001')

let ipfsurl = ""
let authenticaiton1=""
let authenticaiton2=""
var newjson=[]
var songs=""
let latestblock=""


function Footer() {  
  const [fileUrl, updateFileUrl] = useState("");
  const{state: { contract, accounts,web3 } } = useEth();
  

  
async function onChange(e) {
  const file = e.target.files[0]
  
  try {
    
    const added2 = await client2.add(file)
    console.log(added2)

    const filehash= String(added2.cid);
    console.log(filehash)
    const url = `https://ipfs.io/ipfs/${added2.path}`
    
    ipfsurl = url
   updateFileUrl(url)
   console.log(url)

  } catch (error) {
    console.log('Error uploading file: ', error)
  } 
}

async function onChangeprofile1(e) {
  const file = e.target.files[0]

  
  try {
 
    const added = await client2.add(file)
    console.log(added)
    const url = `http://ipfs.io/ipfs/${added.path}`
    authenticaiton1 = url
    console.log(url)
    updateFileUrl(url)

  } catch (error) {
    console.log('Error uploading file: ', error)
  } 
}

async function onChangeprofile2(e) {
  const file = e.target.files[0]
  try {
 
    const added = await client2.add(file)
    console.log(added)
    const url = `http://ipfs.io/ipfs/${added.path}`
    authenticaiton2= url
    updateFileUrl(url)
    console.log(url)
  } catch (error) {
    console.log('Error uploading file: ', error)
  } 
}



async function authentify(e)
{
  try {
    latestblock= await web3.eth.getBlockNumber()-1;
  let json = `{"url":"${ipfsurl}",
  "links":{
    "images":[
      
      {
        "url":"${authenticaiton1}"
      }
      ,
      {
        "url":"${authenticaiton2}"
      }
    ]
  },"attributes":[{"trait_type": "Unknown","value": "Unknown"}]
}`;


  const added = await client2.add(json)
  const url = `http://ipfs.io/ipfs/${added.path}`
  const output = await contract.methods.safeMint(accounts[0],url).send({from:accounts[0]});
  // setValue(output);
  console.log(url)
  console.log(output)
   
} 
catch (error) {  
}
}

  const read = async () => {
    
    var num= await web3.eth.getBlockNumber();
    var latestToken=''
    let i='';
    try {
      for(i=10; i<num; i++)
    {
      //조건은 토큰아이디 or block size-1해서 제한해야함
      const value = await contract.methods.tokenURI(i).call({ from: accounts[0] });
      console.log(value)
      const response = await fetch(value);
      if(!response.ok)
      throw new Error(response.statusText);  
      const json = await response.json();
      //이 json을 넘겨주면된다!
      newjson.push(json);
      latestToken=await contract.methods.ownerOf(i).arguments;
     
    }
    
    } catch (error) {
      latestToken=await contract.methods.ownerOf(i-1).arguments;
      console.log(latestToken[0]); 
    }
    songs=JSON.stringify(newjson);
    console.log(songs)
    
  };
  

  return (

  <div className='Deploys' >



<div className='Procedure' >
  
   <div className='container'>
    
    <div className='ProDetail2'>
       
   <h1>통합인증서업로드</h1>
      
      <div>
        
      
      <input type="file" id='profileupload' onChange={onChangeprofile1} style={{display:"none"}}/>
      <label for="profileupload" className='custom-btn'>장애인등급인증</label>
      


      <input type="file" id='profileupload2'  onChange={onChangeprofile2}  style={{display:"none"}}/>
      <label for="profileupload2" className='custom-btn'> 경력인증 </label>
      </div>
      
      <div>
    
      <br />
      <label type="fileupload" onClick={authentify} id="fileup"  className='custom-btn2' >파일업로드</label>
      <br />
      </div>

   </div>
    </div>

   <div  className='ProDetail1'>
      
<img src='cmlogo.png' style={{width:'290px'}}></img>
  </div>

</div>

  </div>

  
   
  );
}

export default Footer;
