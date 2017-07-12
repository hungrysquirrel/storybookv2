import React from 'react'
import styledProps from 'styled-props';
import styled from 'styled-components';
import {
  font,
  color
} from '../css/styles.js';

const Heading1 = styled.h1`
  color: ${styledProps(color)};
  font-size: ${styledProps(font.fontSize)}px;
  line-height: ${styledProps(font.fontLineHeight)}px;
`
const Heading2 = styled.h2`
  color: ${styledProps(color)};
  font-size: ${styledProps(font.fontSize)}px;
  line-height: ${styledProps(font.fontLineHeight)}px;
`
const Heading3 = styled.h3`
  color: ${styledProps(color)};
  font-size: ${styledProps(font.fontSize)}px;
  line-height: ${styledProps(font.fontLineHeight)}px;
`
const ParagraphRunningText = styled.p`
  color: ${styledProps(color)};
  font-size: ${styledProps(font.fontSize)}px;
  line-height: ${styledProps(font.fontLineHeight)}px;
`
const ParagraphUIText = styled.p`
  color: ${styledProps(color)};
  font-size: ${styledProps(font.fontSize)}px;
  line-height: ${styledProps(font.fontLineHeight)}px;
`
const ParagraphCaption = styled.p`
  color: ${styledProps(color)};
  font-size: ${styledProps(font.fontSize)}px;
  line-height: ${styledProps(font.fontLineHeight)}px;
`
const ParagraphSmall = styled.p`
  color: ${styledProps(color)};
  font-size: ${styledProps(font.fontSize)}px;
  line-height: ${styledProps(font.fontLineHeight)}px;
`
const ParagraphSmallMuted = styled.p`
  color: ${styledProps(color)};
  font-size: ${styledProps(font.fontSize)}px;
  line-height: ${styledProps(font.fontLineHeight)}px;
  text-transform: uppercase;
  margin: 30px 0 0;
  border-bottom: 1px solid;
`
// Have not been able to get color working with both Storybook Knobs and Styled Components
// Color Knob is grabbing styles from styles.css and not styles.js 😢

export default ({className}) => (
  
    <div className={className}>
      {/* Headings */}
      <ParagraphSmallMuted colorMutedBlack><small>Heading 1 (32/40)</small></ParagraphSmallMuted>
      <Heading1 h1>The quick brown fox jumps over the lazy dog</Heading1>

      <ParagraphSmallMuted colorMutedBlack><small>Heading 2 (24/32)</small></ParagraphSmallMuted>
      <Heading2 h2>The quick brown fox jumps over the lazy dog</Heading2>

      <ParagraphSmallMuted colorMutedBlack><small>Heading 3 (16/24)</small></ParagraphSmallMuted>
      <Heading3 h3>The quick brown fox jumps over the lazy dog 16/24</Heading3>
    
      {/* Running text */}
      <ParagraphSmallMuted colorMutedBlack><small>Paragraph Running Text (16/24)</small></ParagraphSmallMuted>
      <ParagraphRunningText paragraphRunningText><strong>The quick brown fox jumps over the lazy dog 16/24</strong></ParagraphRunningText>
      <ParagraphRunningText paragraphRunningText><small>The quick brown fox jumps over the lazy dog 16/24</small></ParagraphRunningText>
    
      {/* UI text */}
      <ParagraphSmallMuted colorMutedBlack><small>Paragraph UI Text (14/22)</small></ParagraphSmallMuted>
      <ParagraphUIText paragraphUIText><strong>The quick brown fox jumps over the lazy dog 14/22</strong></ParagraphUIText>
      <ParagraphUIText paragraphUIText><small>The quick brown fox jumps over the lazy dog 14/22</small></ParagraphUIText>
    
      {/* Caption text */}
      <ParagraphSmallMuted colorMutedBlack><small>Paragraph Normal (12/20)</small></ParagraphSmallMuted>
      <ParagraphCaption paragraphNormal><strong>The quick brown fox jumps over the lazy dog 12/20</strong></ParagraphCaption>
      <ParagraphCaption paragraphNormal><small>The quick brown fox jumps over the lazy dog 12/20</small></ParagraphCaption>
      
      {/* Small text */}
      <ParagraphSmallMuted colorMutedBlack><small>Paragraph Small (8/16)</small></ParagraphSmallMuted>
      <ParagraphSmall paragraphSmall><strong><small>The quick brown fox jumps over the lazy dog 8/16</small></strong></ParagraphSmall>
      <ParagraphSmall paragraphSmall><small>The quick brown fox jumps over the lazy dog 8/16</small></ParagraphSmall>
    </div>
  
)