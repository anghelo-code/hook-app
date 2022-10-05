import { useForm } from "../hooks/useForm"

export const FormWithHook = () => {

    const {formState, onResetForm, onInputChange, username, email, password } =  useForm({
        username: '',
        email: '',
        password: '',
    });

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

        <input 
            type="password"
            name="password"
            className="form-control mt-2"
            placeholder="password"
            onChange={ onInputChange }
            value= { password }            
        />

        <button onClick={ onResetForm } className="btn btn-primary mt-2">Borrar</button>
    </>
  )
}
