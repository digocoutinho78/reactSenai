import Botao from '../Botao';
import CaixaDeSelecao from '../CaixaDeSelecao';
import CampoTexto from '../CampoTexto';
import './style.css'

export default function Formulario() {
    //Bloco lógico
    let unidades = [
        'Unidade Centro',
        'Unidade Quitandinha',
        'Unidade Bingen',
        'Unidade Cascatinha',
        'Unidade Itaipava'
    ];

    unidades[3] = 'Unidade Cascatinha - Nova';	
    
    function submit (event) {
        event.preventDefault();
        console.log('Formulário enviado!');
    }

    return(
        <section>
            <h1>Formulário</h1>

            <form onSubmit={submit}>
                <CampoTexto 
                    label='Nome' 
                    type='text' 
                    placeholder='Digite seu nome...' 
                    required={true}
                />
                <CampoTexto 
                    label='e-mail' 
                    type='text' 
                    placeholder='Digite seu email...'
                />
                <CaixaDeSelecao label='Unidade' options={unidades} />
                
                <div className='cx_botoes'>
                    <Botao cor='verde'>Enviar</Botao>
                    <Botao cor='cinza'>Cancelar</Botao>
                </div>
            </form>
        </section>
    );
}