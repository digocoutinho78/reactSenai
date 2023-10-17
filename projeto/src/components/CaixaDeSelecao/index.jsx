import './style.css'

export default function CaixaDeSelecao(props) {
    
    return(
        <div className='container'>  
            <label>{props.label}</label>
            <select>
                {props.options.map((item) => { //funcao generica - (item) pode ser qualquer nome. o Map recebe
                // o paramentro item e para cada item , fará oque está no escopo, ou seja, vai colocar como option. 

                    return(
                        <option>{item}</option>
                    );

                })}
            </select>
        </div>
    );
}