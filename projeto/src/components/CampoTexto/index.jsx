import './style.css';

export default function CampoTexto(props) {

     function conteudoCt (event) {
        console.log(event.target.value);
    }
    return(
        <div className='container'>
            <label>{props.label}</label>
            <input 
                type={props.type} 
                placeholder={props.placeholder}
                required={props.required} 
                onChange={props.aoDigitar}
            />
        </div>
    );
}