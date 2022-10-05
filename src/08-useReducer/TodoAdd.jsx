import { useForm } from "../hooks/useForm";

export const TodoAdd = ({ handleNewTodo }) => {
    const {formState, onResetForm,onInputChange,  description } =  useForm({
        description: "",
        done: false,
    });

    const onFormSubmit = (e) =>{
        e.preventDefault();

        if (description.length <= 1) return;

        handleNewTodo({
            ...formState,
            id: new Date().getTime(),
        })

        onResetForm();


    }

  return (
    <form  onSubmit={ onFormSubmit }>
        <input 
            type="text" 
            name="description"
            placeholder="Que hay que hacer?"
            className="form-control"
            onChange={ onInputChange }
            value={ description }    
        />

        <button
            type="submit"
            className="btn btn-outline-primary mt-1"
        >
            Agregar
        </button>
    </form>
  )
}
