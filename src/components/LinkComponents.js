import React from 'react';
import styled from 'styled-components';

const ComponentBlock = styled.div`
  display: flex;
  flex-direction : column;
  border-radius: 4px;
  box-shadow: rgb(215 220 225) 0px 2px 0px 0px;
  width: 100%;
  padding-bottom : 16px;
`;

const ComponentInnerBlock = styled.div`
  background-color: white;
  padding: 16px;
  height: 100%;
  min-height: 448px
  border : 1px solid #d7dce1;
`;

const ComponentFormInnerBlock = styled.form`
  display : flex;
`;

const ComponentFormBlock = styled.div`
  width: 100%;
  padding-right: 12px;
`;

const TitleBlock = styled.div`
  padding-top: 8px;
  width: 100%;
  height: 100%;
`;

const URLBlock = styled.div`
  padding-top: 8px;
  width: 100%;
  height: 100%;
`;

const DeleteMarkBlock = styled.div`
  padding-top: 8px;
  justify-content: right;
  width: 30px;
  height: 30px;
  &:hover{
    cursor: pointer;
  }
`;

const LinkComponentItem = ({linkcomponent, onRemove}) => {
  return (
    <>
    <ComponentBlock>
      <ComponentInnerBlock>
        <ComponentFormBlock>
          <ComponentFormInnerBlock>
            <TitleBlock>
              {linkcomponent.title}
            </TitleBlock>
            <DeleteMarkBlock onClick ={() => onRemove(linkcomponent.id)}>
                X
            </DeleteMarkBlock>
          </ComponentFormInnerBlock>
          <URLBlock>
              {linkcomponent.url}
          </URLBlock>
        </ComponentFormBlock>              
      </ComponentInnerBlock>
    </ComponentBlock>
  </>
  )
};

const LinkComponents = ({linkcomponents, onChangeInput, onRemove}) => {

  return (
    <>
      <div>
        {linkcomponents.map(linkcomponent => (
          <LinkComponentItem
                linkcomponent = {linkcomponent}
                key = {linkcomponent.id}
                onRemove = {onRemove}
                />
        ))}
      </div>
    </>
  )
}

export default LinkComponents;