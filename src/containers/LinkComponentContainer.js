import React from 'react';
import {connect} from 'react-redux';
import {changeInput, insert, remove} from '../modules/linkcomponents';
import LinkComponents from '../components/LinkComponents';

const LinkComponentsContainer = ({
  input,
  linkcomponents,
  changeInput,
  insert,
  remove,
}) => {
  return (
    <LinkComponents
      input = {input}
      linkcomponents = {linkcomponents}
      onChangeInput = {changeInput}
      onInsert = {insert}
      onRemove = {remove}
    />
  );
};

export default connect(
  //비구조화 할당을 통해 linkcomponents 분리
  ({linkcomponents}) => ({
    input: linkcomponents.input,
    linkcomponents : linkcomponents.linkcomponents,
  }),
  {
    changeInput, insert, remove,
  },
)(LinkComponentsContainer); 