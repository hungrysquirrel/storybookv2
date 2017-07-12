import React from 'react'
import styled from 'styled-components'

const TextInputWithLabel = styled.div`
  input {
    outline: none;
    border: none;
    border-radius: 3px;
    box-shadow: 0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2);
    background: #ffffff;
    height: 30px;
    padding: 0 10px;
    vertical-align: middle;
    line-height: 30px;
    color: #182026;
    font-size: 14px;
    font-weight: 400;
  
    &:disabled {
      box-shadow: none;
      background: rgba(206, 217, 224, 0.5);
      cursor: not-allowed;
      color: rgba(92, 112, 128, 0.5);
      resize: none;
    }
    &:focus {
      box-shadow: 0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2);
    }
}
  }

  label {
    display: block;
    margin: 0 0 15px;
    margin-bottom: 5px;
  }

  .text-muted {
    color: #5c7080;
  }

  .helper-text {
    margin-top: 5px;
    color: #5c7080;
    font-size: 12px;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    margin: 0 0 0 15px;
  }
  .intent-danger input{
    box-shadow: 0 0 0 0 rgba(219, 55, 55, 0), 0 0 0 0 rgba(219, 55, 55, 0), inset 0 0 0 1px #db3737, inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2);
  }
  .intent-danger input:focus {
    box-shadow: 0 0 0 1px #db3737, 0 0 0 3px rgba(219, 55, 55, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2);
  }
  .intent-danger .helper-text {
    color: #c23030;
  }
`

export default ({className, disabled}) => (
  <TextInputWithLabel>
    <div className={`form-group ${className} danger`}>
      <label htmlFor="textInput">Host
        <span className="text-muted"> (required)</span>
      </label>
      <div>
        <div className={`pt-input-group pt-intent-danger ${className}`}>
          <input id="textInput" type="text" placeholder="Host name" disabled={disabled}/>
          <div className="helper-text">Use * for wildcard</div>
        </div>
      </div>
    </div>
  </TextInputWithLabel> 
) 