import { Step, StepLabel, Stepper, Typography } from "@material-ui/core"
import { useEffect, useState } from "react"
import DadosEntrega from "./DadosEntrega"
import DadosPessoais from "./DadosPessoais"
import DadosUsuario from "./DadosUsuario"

function FormularioCadastro({ aoEnviar }) {
    const [etapa, setEtapa] = useState(0)
    const [dadosColetado, setDados] = useState({});

    useEffect(() => {
        if (etapa === formularios.length) {
            aoEnviar(dadosColetado)
        }
    })

    const formularios = [
        <DadosUsuario aoEnviar={coletarDados} />,
        <DadosPessoais aoEnviar={coletarDados} />,
        <DadosEntrega aoEnviar={coletarDados} />,
        <Typography variant="h5">Obrigado pelo Cadastro!</Typography>
    ];

    function coletarDados(dados) {
        setDados({ ...dadosColetado, ...dados })
        proximo();
    }

    function proximo(dados) {
        setEtapa(etapa + 1)
    }

    return (
        <>
            <Stepper activeStep={etapa}>
                <Step><StepLabel>Login</StepLabel></Step>
                <Step><StepLabel>Pessoal</StepLabel></Step>
                <Step><StepLabel>Entrega</StepLabel></Step>
                <Step><StepLabel>Finalização</StepLabel></Step>
            </Stepper>
            {formularios[etapa]}
        </>
    )
}


export default FormularioCadastro