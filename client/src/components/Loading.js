import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import {grey,blueGrey} from 'material-ui-colors/dist/index';




const bounce = keyframes`
  0 {
    transform: translateY(0);
  }
  50% {
      transform: translateY(-15px);
  }
  100% {
      transform: translateY(0);
  }
`;

const Text = styled.div({


  margin: '0 auto',
  animation: `${bounce} 3s ease infinite`,
  fontSize: '13px',
  textAlign: 'center',
  color: `${grey}`,
});

const Container = styled.div({
  width: '80px',
  margin: '0 auto',
});

const BoxStyle = styled.div({
  
  marginTop:'200px',
  marginLeft:'550px',
  width: '30%',
  padding: '5px',
});

const LoadingIcon = styled.div({
  width: '20px',
  height: '20px',
  borderRadius: '100%',
  background: `${blueGrey}`,
  animation: `${bounce} 3s ease infinite`,
});

export default function Loading() {
  return (
     
      <Container>
     
        <BoxStyle>
        <LoadingIcon >
      <img src='community.png' ></img>
          </LoadingIcon >
        </BoxStyle>

      </Container>
    
  );
}
