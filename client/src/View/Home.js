import e from 'express'
import React,{useState} from 'react'
import FormInput from './components/FormInput'

// const FORM_INPUT = [
//     {
//         name: 'email',
//         type: 'email',
//         placeholder: 'Email',
//         value: '',
//     },
//     {
//         name: 'password',   
//         type: 'password',
//         placeholder: 'Password',
//         value: '',
//     }
// ]

export default function Home()
{
    const [formInput, setFormInput] = useState({
        email: '',
        password: '',
    })
    // const [password, setPassword] = useState("")

    const handleInputChange = (e) =>
    { 
        setFormInput({
            ...formInput,
            [e.target.name]: e.target.value
        })
    }

  return (
      <div className='formGroup'>
          <form className='form'>
              <h1>Welcome Midra Library</h1>
              <p>Please login to continue</p>
              <label>email</label>
              <input
                  type="text"
                  name={formInput.email}
                  onChange={handleInputChange} />
              
              <label>Password</label>
              <input
                  type="password"
                  name={formInput.password}
                  onChange={handleInputChange} />
               <button type="submit" >Login</button>
          </form>

          <style jsx="true">{`
            .formGroup {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                margin: 2rem auto;
                width: 500px;
                height: 500px;
                border-radius: 10px;
                border: 1px solid #ccc;
                padding: 0 10px;
                background-color: #fff;
                box-shadow: 0px 0px 10px #ccc;
            }
            .form {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
            }
            .form h1 {
                font-size: 20px;
                font-weight: bold;
                color: #555;
                margin: 0;
            }
            .form input {
                width: 240px;
                height: 40px;
                border-radius: 5px;
                border: 1px solid #ccc;
                padding: 0 10px;
                font-size: 16px;
                font-weight: 400;
            }
            .form input:focus, .form input:active {
                outline: none;
                border: 1px solid #ccc;

            }
            .form button {
                width: 240px;
                padding: 5px 10px;
                border-radius: 5px;
                border: 1px solid #ccc;
                margin-top: 10px;
                font-size: 16px;
                font-weight: 600;
                height: 40px;
                background-color: #333;
                color: #fff;
                cursor: pointer;
                transition:  all 0.3s;
                
            }
            .form button:hover {
                background-color: #fff;
                color: #333;
            }
            `}</style>
    </div>
  )
}
