import { useState } from 'react';
import useFormulario from './hooks/useFormulario';
import Card from './components/Card';
import Container from './components/Container';
import UserForm from './components/UserForm';

function App() {
  const [usuarios, setUsuarios] = useState([]);
  const [formulario, handleChange, reset] = useFormulario({
    name: '', 
    email: '',
    lastname: '', 
  });

  const submit = e => {
    e.preventDefault();
    setUsuarios([
      ...usuarios,
        formulario
    ]);
    reset();
  }

  return (
    <div style={{ marginTop: '15%' }}>
      <Container>
        <Card>
          <div style={{ padding: 20 }}>
            <UserForm/>
          </div>
        </Card>
        <Card>
          <ul>
            {usuarios.map(usuario => 
            <li key={usuario.email}> {`${usuario.name} ${usuario.lastname}: ${usuario.email}`} </li>)}
          </ul>
        </Card>
      </Container>
    </div>        
  );
}

export default App;
