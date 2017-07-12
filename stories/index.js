import React from 'react'

// Storybook & Storybook Addons
import { storiesOf } from '@storybook/react'
import { withKnobs, number, object, boolean, text, select, date, array, color } from '@storybook/addon-knobs'
const stories = storiesOf('T2 UI Kit Components', module)
stories.addDecorator(withKnobs)

// Day Picker
import DayPicker from 'react-day-picker'
import DayPickerInput from 'react-day-picker/DayPickerInput'
import 'react-day-picker/lib/style.css'

// Stylesheet
import '../src/css/style.css'


// Components
import Button from '../src/components/Button'
import ButtonWithLeftIcon from '../src/components/ButtonLeftIcon'
import DatePicker from '../src/components/DatePicker'
import TextInputWithLabel from '../src/components/TextInputWithLabel'
import Typography from '../src/components/Typography'
import Color from '../src/components/Color'
import Icon from '../src/components/Icon'
import Tooltip from '../src/components/Tooltip'
import Form from '../src/components/Form'



// Stories
stories.add('Typography', () => {
  // Storybook Knobs
  const color= select("Font Color", ["primary", "secondary", "active", "accent1", "accent2", "accent3", "black"], "black")

  return (
    <Typography className={color} />
  )
})

stories.add('Color', () => {
  return (
    <Color />
  )
})

stories.add('Icons', () => {
  return (
    <Icon />
  )
})

stories.add('Button (basic)', () => {
  // Storybook Knobs
  const size= select("Size", ["small", "medium", "large"], "medium")
  const intent= select("Intent", ["default", "primary", "danger"], "primary")
  
  return (  
    <Button btnText={text('Label', 'Button')} className={`${intent} ${size} ${boolean('Active', false)}`} disabled={boolean('Disabled', false)} />
  )
})

stories.add('Button with left icon', () => {
  // Storybook Knobs
  const size= select("Size", ["small", "medium", "large"], "medium")
  const intent= select("Intent", ["default", "primary", "danger"], "primary")

  return (
    <ButtonWithLeftIcon btnText={text('Label', 'Button')} className={`${intent} ${size} ${boolean('Active', false)}`} disabled={boolean('Disabled', false)} />
  )
})

stories.add("Date Picker", () => {
  // Storybook Knobs
  const disabled= boolean('Disabled', false)

  return (
    <div>
      <DatePicker disabled={disabled} enableOutsideDays />
    </div>
  )
})

stories.add("Text input with label", () => {
  const intent= select("Error styles", ["intent-danger", "no-errors"], "no-errors")

  return (
    <TextInputWithLabel className={`${intent}`} disabled={boolean('Disabled', false)} />
  )
  
})

stories.add('Tooltip', () => {
  // Storybook Knobs
  const bold = boolean('Bold', false)
  const selectedColor = color('Color', 'rgba(0,0,0,.7)')
  const customStyle = object('Style', {
    paddingTop: 8,
    paddingRight: 16,
    paddingBottom: 8,
    paddingLeft: 16,
    textTransform: 'none',
  })

  const style = {
    ...customStyle,
    fontWeight: bold ? 700 : 400,
    backgroundColor: selectedColor,
  }

  return (
    <Tooltip styleName={style} tooltipText={text('Label', 'This is a tooltip')} />
  )
})

stories.add("Form", () => {
  return (
    <Form />
  )
  
})