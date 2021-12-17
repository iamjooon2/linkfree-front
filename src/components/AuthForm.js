import styled from 'styled-components';

/* 화면채우기용 컨테이너 AuthTemplate */
export const AuthTemplate = styled.div`
  display : flex;
  justify-content : center;
  align-items :center;
  flex-direction : column;
  width: 100vw;
  height: 100vh;
`;

export const InputBlock = styled.input`
  padding : 10px;
  justify-content: center;
  align-items : center;
  border-radius : 7px;
  width : 98%;
  border : none;
  box-shadow : 0px 0px 3px gray;
  margin-bottom : 10px;
`;

export const ButtonBlock = styled.button`
  margin-top : 5px;
  padding : 4px;
  border : 0px;
  border-radius : 4px;
  width : 98%;
  height : 28px;
  &:hover {
    background-color : #6344C6;
    color : #DADEE0;
    cursor : pointer;
  }
`;

export const AnnounceBlock = styled.div`
  padding-bottom : 20px;
`;

export const RequestBlock = styled.a`
  margin-top : 10px;
  &:hover{
  text-decoration : underline; 
  cursor : pointer;
  }
`;
