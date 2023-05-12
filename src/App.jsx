import { Container, Typography } from '@material-ui/core';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import ValidacoesCadastro from './contexts/ValidacoesCadastro';
import { validarCPF, validarSenha } from './models/cadastro'

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h4" align="center">Formulário de Cadastro</Typography>
      <FormularioCadastro aoEnviar={aoEnviarForm} />
    </Container>
  );
}

function aoEnviarForm(dados) {
  return (
    console.log(dados)
  )
}

export default App;
