import Input from './Input';
import Button from './Button';

const UserForm = () => {
    return(
        <form onSubmit={submit} >
            <Input 
                label='Nombre' 
                name='name' 
                value={formulario.name} 
                onChange={handleChange} 
                placeHolder='Nombre'
            />
            <Input 
                label='Apellido' 
                name='lastname' 
                value={formulario.lastname} 
                onChange={handleChange} 
                placeHolder='Apellido'
            />
            <Input 
                label='Correo' 
                name='email' 
                value={formulario.email} 
                onChange={handleChange} 
                placeHolder='Correo'
            />
            <Button>Enviar</Button>
        </form>
    );
}

export default UserForm;