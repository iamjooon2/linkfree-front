import React from 'react';
import styled from 'styled-components';

/* 화면채우기 */
const AuthTemplateBlock = styled.div`
  position : absolute; //위치고정
  height: 100vh;
  width : 100%;
  background : lightgray;
  display : flex; /* 컨테이너 역할을 하기 때문에 flex로 중앙정렬 시킬예정 */
  flex-direction : column; 
  justify-content: center;
  align-items : center;
`;

const WhiteBox = styled.div`
  padding : 2rem;
  width : 360px;
  background: white;
  border-radius : 4px;
  box-shadow: 0 0 8px rgba(0,0,0,0.025);
`;


const AuthTemplate = () => {
  return(
    <AuthTemplateBlock>
      <WhiteBox>
        앙기모찌
      </WhiteBox>
    </AuthTemplateBlock>
  )
}

export default AuthTemplate;