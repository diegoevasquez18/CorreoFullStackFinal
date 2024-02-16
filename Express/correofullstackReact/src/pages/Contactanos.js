import React, { useState } from 'react';
import axios from 'axios';
import '../styles/components/pages/Contactanos.css'

const Contactanos = (props) => {

    const initialForm = {
        nombre: '',
        email: '',
        provincia: '',
        ciudad: '',
        telefono: '',
        complemento: ''
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e =>{
        const { name, value } = e.target;
        setFormData(oldData =>({
            ...oldData,
            [name]: value
        }));
    }

const handleSubmit = async e =>{
    e.preventDefault();
    setMsg('');
    setSending(true);
    const response = await axios.post('http://localhost:3000/api/contacto', formData);
    setSending(false);
    setMsg(response.data.message);
    if(response.data.error === false){
        setFormData(initialForm)
    }
}


    return(
        <main>
            <div class="holder">
                <h3>Trabaja con nosotros!</h3>
                <p>En Correo Full Stack nos apasiona hacer. Nos adxaptamos a los cambios y resolvemos de forma exitosa. Hacemos en movimiento. Pensamos en grande porque no tenemos miedo.Nos arriesgamos y animamos a resolver en el andar. Lo hacemos bien y, siempre, ¡lo logramos!</p>
                <form action="/contacto" method="post" onSubmit={handleSubmit}>
                    <div class="info">
                    <input class="fname" type="text" name="nombre" value={formData.nombre} placeholder="Nombre completo" onChange={handleChange}/>
                    <input type="text" name="email" value={formData.email} placeholder="Email" onChange={handleChange}/>
                    <input type="text" name="provincia" value={formData.provincia} placeholder="Provincia" onChange={handleChange}/>
                    <input type="text" name="ciudad" value={formData.ciudad} placeholder="Ciudad" onChange={handleChange}/>
                    <input type="text" name="telefono" value={formData.telefono} placeholder="Telefono" onChange={handleChange}/>
                    </div>
                    <p>Por que queres trabajar con nosotros?</p>
                    <div>
                    <textarea rows="4" type="text" name="complemento" value={formData.complemento} onChange={handleChange}></textarea>
                    </div>
                    <p className="acciones"><input type="submit" value="Enviar"/></p>
                </form>
                {sending ? <p>Eviando...</p>: null}
                {msg ? <p>{msg}</p>: null}
            </div>
        </main>
    )
}

export default Contactanos;