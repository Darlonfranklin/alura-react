import { Button, TextField } from "@material-ui/core"
import { useContext, useState } from "react";
import ValidacoesCadastro from "../../contexts/ValidacoesCadastro";

function DadosUsuario({ aoEnviar }) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const [error, setError] = useState({ senha: { valido: true, texto: "" } })

    const validacoes = useContext(ValidacoesCadastro)

    function validarCampos(e) {
        const { name, value } = e.target;
        const novoEstado = { ...error }
        novoEstado[name] = validacoes[name](value);
        setError(novoEstado);
    }

    function possoEnviar() {
        for (let campo in error) {
            if (!error[campo].valido) {
                return false
            }
        }
        return true;
    }

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            if (possoEnviar()) {
                aoEnviar({ email, senha })
            }
        }}>
            <TextField
                value={email}
                onChange={(e) => { setEmail(e.target.value) }}
                id="email"
                required
                label="email"
                type="email"
                variant="outlined"
                margin="normal"
                fullWidth
            />

            <TextField
                onBlur={validarCampos}
                error={error.senha.valido}
                helperText={error.senha.texto}
                value={senha}
                onChange={(e) => { setSenha(e.target.value) }}
                id="senha"
                name="senha"
                required
                label="senha"
                type="password"
                variant="outlined"
                margin="normal"
                fullWidth
            />
            <Button type="submit" variant="contained" color="primary">Cadastrar</Button>
        </form>
    )
}

export default DadosUsuario