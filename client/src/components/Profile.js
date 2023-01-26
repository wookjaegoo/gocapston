import React, { useEffect } from 'react';
import './Profile.css'
import useEth from '../contexts/EthContext/useEth';
import { useState } from 'react';
import {TiChevronLeftOutline, TiChevronRightOutline} from 'react-icons/ti';
import { useRef } from 'react';


function Profile() 
{    
  var axios = require("axios").default;

  const [imageUrl, updateImageUrl] = useState("");
  const [imageUrl2, updateImageUrl2] = useState("");
  const [value, setValue] = useState("");
  const [isexist,setExist] = useState(false);  
  const [swap,setswap]=useState(true);
  const{state: { contract, accounts,web3 } } = useEth();



  let TIME= 15;

  const intToString = (num) => {
    return String(num).padStart(2, "0");
  };
  
  const Timer = ({ss}) => {
    const SS = ss ? parseInt(ss) : 0;
    
    const count = useRef(SS);
    const interval = useRef(null);
  
    const [second, setSecond] = useState(intToString(SS));
  
    useEffect(() => {
      interval.current = setInterval(() => {
        count.current -= 1;
  
        setSecond(intToString((count.current % 60)));
      }, 1000);
    }, []);
  
    useEffect(() => {
      if (count.current <= 0) {
        clearInterval(interval.current);
        if(swap==true)

        {
          setswap(false);
        }
        else{
          setswap(true);
        }

      }
    }, [second]);
  
    return (
      <div>
        {second}
      </div>
    );
  };
  
  




const MAX_VISIBILITY = 3;

const Card = () => (
  
  <div>
    {(isexist)&&(swap)&&<div className='Authentication2'>
    <h1 style={{color:'white' , marginTop:'100px'}}>등급인증서</h1>

<div >
<img src="https://qrtiger.com/qr/YINX.png" className='animatedimage'></img>
</div>

 <div>
    
<div style={{fontSize:30, color:'white' }}>
<h3>시간안에 인증해주세요</h3>
<Timer ss="15"></Timer>
<div>필수 제출 정보</div>
<span style={{border:'2px solid black' ,backgroundColor:'white' , color:'black'} }>나이</span>
<span style={{border:'2px solid black' ,backgroundColor:'white' , color:'black'} }>장애정도</span>
<br>
</br>
<span style={{border:'2px solid black' ,backgroundColor:'white' , color:'black'} }>취득일자</span>
<span style={{border:'2px solid black' ,backgroundColor:'white' , color:'black'} }>용도</span>
<span style={{border:'2px solid black' ,backgroundColor:'white' , color:'black'} }>발급처</span>
</div>
    </div>


<div className='prbottom2' >
    
<img src='cmlogo.png' style={{width:'250px'}}></img>
</div>
</div>
}

{(isexist)&&(!swap)&&<div className='Authentication2'>
<h1  style={{color:'white', marginTop:'100px'}}>등급인증서</h1>

<div  >
<img src="https://qrtiger.com/qr/4XQU.png"  className='animatedimage'></img>
</div>

 <div>
    
<div style={{fontSize:30, color:'white' }}>
<h3>시간안에 인증해주세요</h3>
<Timer ss="15"></Timer>
<div>필수 제출 정보</div>

<span style={{border:'2px solid black' ,backgroundColor:'white' , color:'black'} }>나이</span>
<span style={{border:'2px solid black' ,backgroundColor:'white' , color:'black'} }>장애정도</span>
<br>
</br>
<span style={{border:'2px solid black' ,backgroundColor:'white' , color:'black'} }>취득일자</span>
<span style={{border:'2px solid black' ,backgroundColor:'white' , color:'black'} }>용도</span>
<span style={{border:'2px solid black' ,backgroundColor:'white' , color:'black'} }>발급처</span>
</div>
    </div>


<div className='prbottom2' >
    
<img src='cmlogo.png' style={{width:'250px'}}></img>
</div>
</div>
}
    
  </div>
);

const Card2 = () => (
  <div>
   {(isexist)&&<div className='Authentication2'>
   <h1  style={{color:'white', marginTop:'100px'}}>경력인증서</h1>

<div  >

<img src="https://qrtiger.com/qr/E7NM.png" className='animatedimage'></img>
</div>

 <div>
    
<div style={{fontSize:30, color:'white' }}>
<h3>시간안에 인증해주세요</h3>
<Timer ss="15"></Timer>
<div>필수 제출 정보</div>
<span style={{border:'2px solid black' ,backgroundColor:'white' , color:'black'} }>나이</span>
<br>
</br>
<span style={{border:'2px solid black' ,backgroundColor:'white' , color:'black'} }>취득일자</span>
<span style={{border:'2px solid black' ,backgroundColor:'white' , color:'black'} }>용도</span>
<span style={{border:'2px solid black' ,backgroundColor:'white' , color:'black'} }>발급기관</span>

</div>
    </div>


<div className='prbottom2' >
    
<img src='cmlogo.png' style={{width:'250px'}}></img>
</div>
</div>

}
  </div>
);

const Carousel = ({children}) => {
  const [active, setActive] = useState(2);
  const count = React.Children.count(children);
  
  return (
    <div className='carousel'>
      {React.Children.map(children, (child, i) => (
        <div className='card-container' style={{
            '--active': i === active ? 1 : 0,
            '--offset': (active - i) / 3,
            '--direction': Math.sign(active - i),
            '--abs-offset': Math.abs(active - i) / 3,
            'pointer-events': active === i ? 'auto' : 'none',
            'opacity': Math.abs(active - i) >= MAX_VISIBILITY ? '0' : '1',
            'display': Math.abs(active - i) > MAX_VISIBILITY ? 'none' : 'block',
          }}>
          {child}
        </div>
      ))}
      
      {(isexist)&&active > 0 && <button className='nav left' onClick={() => setActive(i => i - 1)}><TiChevronLeftOutline/></button>}
      {(isexist)&&active < count - 1 && <button className='nav right' onClick={() => setActive(i => i + 1)}><TiChevronRightOutline/></button>}
    </div>
  );
};

 



  const formData =[
    {id:1, name:"경력증명서"},
    {id:2, name:"장애인증명서"}
  ]
  const [isChecked,setisChecked]= useState(false);
  const [checkeditems,setCheckeditems] = useState(new Set());




  const checkHandler=({target}) =>
  {
    console.log(target)
    setisChecked(!isChecked);
    checkeditemHandler(target.value, target.checked);
  }

  const checkeditemHandler = (id,isChecked)=>
  {
    if(isChecked)
    {
      checkeditems.add(id);
      setCheckeditems(checkeditems);

    }
    else if(!isChecked &&checkeditems.has(id))
    {
      checkeditems.delete(id);
      setCheckeditems(checkeditems);
    }

    return checkeditems
  }
 
  useEffect(()=>{
    numberCheck (value)
  },[value])

  const onChange = e =>
  {
    numberCheck(e.target.value)
  }
  
  const numberCheck = (v) =>
  {
    let num = v 
    if (isFinite(num))
    setValue(num)
    

    if(!num.includes('.'))
    {
      num=num.replace(/^0+/,'')
    }

  }


async function onChange2(e)
{
  try {
    
    
    const Writer= await contract.methods.tokenURI(value).call();
    console.log(Writer)
    const response = await fetch(Writer);
      if(!response.ok)
      throw new Error(response.statusText);
      const json1 = await response.json();
      let autsrc=json1.links.images[0];
      console.log(autsrc)
      updateImageUrl(autsrc)
      updateImageUrl2(json1.links.images[1]);

     if(autsrc.url.length>0 ||json1.links.images[1].length >0)
     {
       
     setExist(true)
     }
      
      
} 



//일단 증명서 업로드 된거 확인했고 선택해서 볼수있게끔 코딩하고 개인정보 세부사항에 대해 어떻게 할지 생각해보자
//이미지 인식해서 정보들 파싱하는 툴있으면 그거 사용해서 개인정보 원하는거만 리턴하게끔 하면 최고임
catch (error) {  
}
      
     

authentifier()}


async function qrmake()
{
  var options = {
    method: 'POST',
    url: 'https://qrtiger.com/api/campaign/',
    headers: {'Content-Type': 'application/json', Authorization: 'Bearer 4c65ef80-84fb-11ed-88f6-3fe97310821f'},
    data: {
      qr: {
        size: 500,
        colorDark: 'rgb(5,64,128)',
        logo: '',
        eye_outer: 'eyeOuter2',
        eye_inner: 'eyeInner1',
        qrData: 'pattern0',
        backgroundColor: 'rgb(255,255,255)',
        transparentBkg: false,
        qrCategory: 'url',
        text: 'https://www.qrcode-tiger.com.com/'
      },
      qrUrl:`https://ipfs.io/ipfs/QmUsYRxKuaBeR61bcf3fFUV8WqcLW959mCDCWHUx56Esnt`,
      qrType: 'qr2',
      qrCategory: 'url'
    }
  };
  
  axios.request(options).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });
  
}


const updatetimer =() =>
{
  const seconds = TIME%60;
  TIME--;

  if(TIME==0 && swap==true)
    {
    TIME=15;
    getqr2()
    setswap(false);

    }
  else if(TIME==0 && swap==false)
  {
    TIME=15;
    getqr()
    setswap(true);

  }
  

  
  
}



async function qrisexpired()
{
  var options = {
    method: 'POST',
    url: 'https://qrtiger.com/api/campaign/edit/YINX',
    headers: {'Content-Type': 'application/json', Authorization:'Bearer 4c65ef80-84fb-11ed-88f6-3fe97310821f'},
    data: {
      qr: {
        size: 500,
        colorDark: 'rgb(5,64,128)',
        logo: '',
        eye_outer: 'eyeOuter2',
        eye_inner: 'eyeInner1',
        qrData: 'pattern0',
        backgroundColor: 'rgb(255,255,255)',
        transparentBkg: false,
        qrCategory: 'url',
        text: 'https://www.qrcode-tiger.com.com/'
      },
      qrUrl: 'https://www.qrcode-tiger.com.com',
      qrType: 'qr2',
      qrCategory: 'url'
    }
  };
  
  axios.request(options).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });
}

async function getqr()
{

  try {
    
    
    const Writer= await contract.methods.tokenURI(value).call();
    console.log(Writer)
    const response = await fetch(Writer);
      if(!response.ok)
      throw new Error(response.statusText);
      const json1 = await response.json();
      let autsrc=json1.links.images[0];
      let autsrc1=json1.links.images[1];
      
      console.log(autsrc)
      console.log(autsrc1)
      
      updateImageUrl(autsrc)
      updateImageUrl2(autsrc1);
        
} 

catch (error) {  
}

//edit qr url code
  var options1 = {
    method: 'POST',
    url: 'https://qrtiger.com/api/campaign/edit/YINX',
    headers: {'Content-Type': 'application/json', Authorization:'Bearer 4c65ef80-84fb-11ed-88f6-3fe97310821f'},
    data: {
      qr: {
        size: 500,
        colorDark: 'rgb(5,64,128)',
        logo: '',
        eye_outer: 'eyeOuter2',
        eye_inner: 'eyeInner1',
        qrData: 'pattern0',
        backgroundColor: 'rgb(255,255,255)',
        transparentBkg: false,
        qrCategory: 'url',
        text: 'https://www.qrcode-tiger.com.com/'
      },
      qrUrl: `${imageUrl}`,
      qrType: 'qr2',
      qrCategory: 'url'
    }
  };
  
  axios.request(options1).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });

  var options = {
    method: 'GET',
    url: 'https://qrtiger.com/data/YINX',
    params: {period: 'month', tz: 'Asia/Singapore'},
    headers: {'Content-Type': 'application/json', Authorization:  'Bearer 4c65ef80-84fb-11ed-88f6-3fe97310821f'}
  };
  
  axios.request(options).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });

  var options2 = {
    method: 'POST',
    url: 'https://qrtiger.com/api/campaign/edit/E7NM',
    headers: {'Content-Type': 'application/json', Authorization:'Bearer 4c65ef80-84fb-11ed-88f6-3fe97310821f'},
    data: {
      qr: {
        size: 500,
        colorDark: 'rgb(5,64,128)',
        logo: '',
        eye_outer: 'eyeOuter2',
        eye_inner: 'eyeInner1',
        qrData: 'pattern0',
        backgroundColor: 'rgb(255,255,255)',
        transparentBkg: false,
        qrCategory: 'url',
        text: 'https://www.qrcode-tiger.com.com/'
      },
      qrUrl: `${imageUrl2}`,
      qrType: 'qr2',
      qrCategory: 'url'
    }
  };
  
  axios.request(options2).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });

  var options3 = {
    method: 'GET',
    url: 'https://qrtiger.com/data/E7NM',
    params: {period: 'month', tz: 'Asia/Singapore'},
    headers: {'Content-Type': 'application/json', Authorization:  'Bearer 4c65ef80-84fb-11ed-88f6-3fe97310821f'}
  };
  
  axios.request(options3).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });

  setExist(true);
 
  
}

async function getqr2()
{

  try {
    
    
    const Writer= await contract.methods.tokenURI(value).call();
    console.log(Writer)
    const response = await fetch(Writer);
      if(!response.ok)
      throw new Error(response.statusText);
      const json1 = await response.json();
      let autsrc=json1.links.images[0];
      console.log(autsrc)
      updateImageUrl(autsrc)
      updateImageUrl2(json1.links.images[1]);
        
} 

catch (error) {  
}
  
  var options1 = {
    method: 'POST',
    url: 'https://qrtiger.com/api/campaign/edit/4XQU',
    headers: {'Content-Type': 'application/json', Authorization:'Bearer 4c65ef80-84fb-11ed-88f6-3fe97310821f'},
    data: {
      qr: {
        size: 500,
        colorDark: 'rgb(5,64,128)',
        logo: '',
        eye_outer: 'eyeOuter2',
        eye_inner: 'eyeInner1',
        qrData: 'pattern0',
        backgroundColor: 'rgb(255,255,255)',
        transparentBkg: false,
        qrCategory: 'url',
        text: 'https://www.qrcode-tiger.com.com/'
      },
      qrUrl: `${imageUrl}`,
      qrType: 'qr2',
      qrCategory: 'url'
    }
  };
  
  axios.request(options1).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });
 
  var options = {
    method: 'GET',
    url: 'https://qrtiger.com/data/4XQU',
    params: {period: 'month', tz: 'Asia/Singapore'},
    headers: {'Content-Type': 'application/json', Authorization:  'Bearer 4c65ef80-84fb-11ed-88f6-3fe97310821f'}
  };
  
  axios.request(options).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });
  

  var options2 = {
    method: 'POST',
    url: 'https://qrtiger.com/api/campaign/edit/E7NM',
    headers: {'Content-Type': 'application/json', Authorization:'Bearer 4c65ef80-84fb-11ed-88f6-3fe97310821f'},
    data: {
      qr: {
        size: 500,
        colorDark: 'rgb(5,64,128)',
        logo: '',
        eye_outer: 'eyeOuter2',
        eye_inner: 'eyeInner1',
        qrData: 'pattern0',
        backgroundColor: 'rgb(255,255,255)',
        transparentBkg: false,
        qrCategory: 'url',
        text: 'https://www.qrcode-tiger.com.com/'
      },
      qrUrl: `${imageUrl2}`,
      qrType: 'qr2',
      qrCategory: 'url'
    }
  };
  
  axios.request(options2).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });

  var options3 = {
    method: 'GET',
    url: 'https://qrtiger.com/data/E7NM',
    params: {period: 'month', tz: 'Asia/Singapore'},
    headers: {'Content-Type': 'application/json', Authorization:  'Bearer 4c65ef80-84fb-11ed-88f6-3fe97310821f'}
  };
  
  axios.request(options3).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });

 

  
}


function authentifier()
{
  
  return(
    <div  className='Profile' >
      
      
      
      {!isexist && 
      <div className='Authentication'>  
       <div className='contained'>
       <h1>인증서확인</h1>
    <label>토큰번호입력</label>

    <div style={{textAlign:'center'}}>
      
    <input type="number" value={value} onChange={onChange} style={{width:'50px',textAlign:'center'} }>
    </input>
    
    <br />
         <div>
    {formData.map((item)=>(
      <label style={{display:'inline-block'}}>
        
        <input type="checkbox"
        value={item.name}
        key={item.id}
        onChange={(e)=> checkHandler(e)}>
        </input>

        <div>{item.name} &nbsp;</div>
      </label>
    ))}
         </div>
    <button onClick={ getqr} style={{width:'50px'}}>확인</button>
    
    <br />

       </div>
  

    </div>

    <div className='prbottom'>
      
<img src='cmlogo.png'></img>
  </div>
  
  </div>
  
  
    
    }


    </div>
    
    
  )
}


//23/0101 추가할거 공증마크가 위변조 되어지지 않았다는것 그리고 pdf 혹은  png에서 원하는 정보 파싱하는거
//후자부분은 표준화된 증명서가 있으면 가능할거같음 예시를들어서 내가 해야할 부분인거같다. 이거만 추가하면 완벽함
  
    return(

      
      
    <React.Fragment>
{authentifier()}
    <Carousel>
        <Card>
        </Card>
      <Card2>
        </Card2>
    </Carousel>
    </React.Fragment>
    
      
    );
}


export default Profile;
