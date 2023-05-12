import { Button, FormControlLabel, Switch, TextField } from "@material-ui/core";
import ValidacoesCadastro from "../../contexts/ValidacoesCadastro";
import { useState, useContext } from "react"

function DadosPessoais({ aoEnviar }) {

    const [nome, setNome] = useState('')
    const [sobrenome, setSobreNome] = useState('')
    const [cpf, setCpf] = useState('')
    const [promocoes, setPromocoes] = useState(false)
    const [novidades, setNovidades] = useState(false)
    const [error, setError] = useState({ cpf: { valido: true, texto: "" }, nome: { valido: true, texto: "" } })

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
                aoEnviar({ nome, sobrenome, cpf, novidades, promocoes })
            }
        }}>
            <TextField
                value={nome}
                onBlur={validarCampos}
                error={!error.nome.valido}
                helperText={error.nome.texto}
                onChange={(e) => { setNome(e.target.value) }}
                id="nome"
                label="Nome"
                variant="outlined"
                margin="normal"
                fullWidth
            />

            <TextField
                value={sobrenome}
                onChange={(e) => { setSobreNome(e.target.value) }}
                id="sobrenome"
                label="Sobrenome"
                variant="outlined"
                margin="normal"
                fullWidth
            />
            <TextField
                onBlur={validarCampos}
                error={!error.cpf.valido}
                helperText={error.cpf.texto}
                value={cpf}
                name="cpf"
                onChange={(e) => { setCpf(e.target.value) }}
                id="CPF"
                label="CPF"
                variant="outlined"
                margin="normal"
                fullWidth
            />

            <FormControlLabel onChange={(e) => { setPromocoes(e.target.checked) }}
                label="promoções"
                checked={promocoes}
                control={<Switch name="promoções"
                    defaultChecked={promocoes}
                    color="primary" />}
            />

            <FormControlLabel onChange={(e) => { setNovidades(e.target.checked) }}
                label="novidades"
                checked={novidades}
                control={<Switch name="novidades"
                    defaultChecked={novidades}
                    color="primary" />}
            />

            <Button type="submit" variant="contained" color="primary">Proximo</Button>
        </form>
    )
}

export default DadosPessoais