import React from 'react';
import styled from 'styled-components';

const Icon = styled.div`
  display: inline-block;
  margin: 8px;
  color: #333;
  width: 64px;
  height: 64px;
  
  svg {
    color: inherit;
    fill: currentColor;
    width: inherit;
    height: inherit;
  }
`;

const caretDownIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 8"><path fill="currentColor" fill-rule="evenodd" d="M12.1 1.25c0-.41-.34-.75-.75-.75H.85C.44.5.1.84.1 1.25c0 .2.082.387.223.527l5.25 5.25c.14.14.328.223.527.223.2 0 .387-.082.527-.223l5.25-5.25c.14-.14.223-.328.223-.527z"/></svg>
const clockIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 12"><path fill="currentColor" fill-rule="evenodd" d="M7.1 3.25v3.5c0 .14-.11.25-.25.25h-2.5c-.14 0-.25-.11-.25-.25v-.5c0-.14.11-.25.25-.25H6.1V3.25c0-.14.11-.25.25-.25h.5c.14 0 .25.11.25.25zM10.35 6c0-2.344-1.906-4.25-4.25-4.25-2.344 0-4.25 1.906-4.25 4.25 0 2.344 1.906 4.25 4.25 4.25 2.344 0 4.25-1.906 4.25-4.25zm1.75 0c0 3.312-2.687 6-6 6-3.312 0-6-2.688-6-6 0-3.313 2.688-6 6-6 3.313 0 6 2.687 6 6z"/></svg>

export default ({iconName}) => (
  <div>
    <Icon>
      {caretDownIcon}
    </Icon>
    <Icon>
      {clockIcon}
    </Icon>
  </div>
);