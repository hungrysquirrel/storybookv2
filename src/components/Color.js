import React from 'react'
import styledProps from 'styled-props';
import styled from 'styled-components';
import {
  font,
  color
} from '../css/styles.js';

const ColorBlock = styled.div`
  background-color: ${styledProps(color)};
  display: inline-block;
  font-size: ${styledProps(font.fontSize)}px;
  height: 100px;
  margin: 20px;
  width: 100px;
  text-align: center;
`

export default () => (
  <div>
    <div className="demo-flexbox-container">
      <ColorBlock colorPrimary>#0D5A8A</ColorBlock>
      <ColorBlock colorActive>#137CBD</ColorBlock>
      <ColorBlock colorSecondary>#8A9BA8</ColorBlock>
      <ColorBlock colorBlack>#182026</ColorBlock>
    </div>
    <div className="demo-flexbox-container">
      <ColorBlock colorAccent1>#0F9960</ColorBlock>
      <ColorBlock colorAccent1Muted>#A1DEC4</ColorBlock>
    </div>

    <div className="demo-flexbox-container">
      <ColorBlock colorAccent2>#D9822B</ColorBlock>
      <ColorBlock colorAccent2Muted>#F3D9BF</ColorBlock>
    </div>

    <div className="demo-flexbox-container">
      <ColorBlock colorAccent3>#B83130</ColorBlock>
      <ColorBlock colorAccent3Muted>#B83130</ColorBlock>
    </div>
  </div>
)