import React, { useContext } from 'react';
import styled from 'styled-components';
export default function InputDescription({
  SetDescContext,
  milestoneInfo,
  content,
}) {
  const setDesc = useContext(SetDescContext);
  const onChange = e => {
    setDesc({ ...milestoneInfo, desc: e.target.value });
  };
  return (
    <Wrapper>
      <Description>Description</Description>
      <DescriptionInput value={content} onChange={onChange} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 1em 0;
`;

const Description = styled.div`
  margin-bottom: 0.5em;
  font-weight: bold;
`;
const DescriptionInput = styled.textarea`
  width: 60%;
  height: 15em;
  padding: 1em;
  border: 1px solid #e1e4e8;
  font-size: 1em;
  border-radius: 5px;
  background-color: #fafbfc;
  resize: none;
`;
