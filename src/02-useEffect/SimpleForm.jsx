import { useState } from "react"

export const SimpleForm = () => {
    const [form, setForm] = useState({
        username: 'fernando',
        email: 'fernando@gmail.com',
    });

    const { username, email } = form;

    const onInputChange = ({target}) => {
        setForm({
            ...form,
            [target.name]: target.value
        })
    }
  return (
    <>
        <h2>Simple Form</h2>

        <input 
            type="text"
            name="username"
            className="form-control"
            placeholder='username'
            onChange={ onInputChange }
            value= { username }            
        />

        <input 
            type="email"
            name="email"
            className="form-control mt-2"
            placeholder="email"
            onChange={ onInputChange }
            value= { email }            
        />
    </>
  )
}
