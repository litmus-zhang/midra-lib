import React from 'react'

export default function FormInput({ name, type,text ,placeholder, value, onChange }) {
  return (
      <div className='formInput'>
          <label>Label</label>
          <input
              className='form-control'
              type={text}
              name={name} 
              placeholder={placeholder}
              value={value}
              autoFocus={true}
              onChange={(e) => {console.log(e.target.value)}}
          />

          <style jsx="true">{`
                .formInput {
                    display: flex;  
                    flex-direction: column;
                    align-items: flex-start;
                    justify-content: center;
                    margin: 10px;
                }
                label {
                    margin: 10px;
                    font-size: 12px;
                    font-weight: bold;
                    color: #555;
                }
                .form-control {
                    width: 240px;
                    height: 40px;
                    border-radius: 5px;
                    border: 1px solid #ccc;
                    padding: 0 10px;
                    font-size: 16px;
                    font-weight: 400;
                }
                .form-control:focus, .form-control:active {
                    outline: none;
                    border: 1px solid #ccc;
                }
          `}    
          </style>
    </div>
  )
}
