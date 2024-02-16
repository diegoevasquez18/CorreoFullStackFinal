import React from "react";
import '../styles/components/pages/Nosotros.css'
import { NavLink } from "react-router-dom";

const Nosotros = (props) =>{
    return(
        <main>
     <div class="holder">
        <section id="content">
            <h2>Quiénes Somos</h2>
            <p>En Correo Full Stack, estamos comprometidos con brindar un servicio de entrega de paquetes confiable, eficiente y sostenible a nuestros clientes. Con una profunda pasión por la logística y la satisfacción del cliente, hemos estado transformando la forma en que se envían y reciben paquetes desde 1994.</p>
    
            <h2>Nuestros Valores</h2>
            <ul>
                <li><strong>Compromiso con la Sostenibilidad:</strong> En Correo Full Stack, nos tomamos en serio nuestro compromiso con el medio ambiente. Estamos en constante búsqueda de formas de reducir nuestro impacto ambiental y promover prácticas ecológicas en toda nuestra operación.</li>
                <li><strong>Eficiencia y Confiabilidad:</strong> Sabemos que la puntualidad y la confiabilidad son esenciales en el mundo de la entrega de paquetes. Nos esforzamos por ofrecer un servicio rápido y seguro para que tus paquetes lleguen a tiempo y en perfecto estado.</li>
                <li><strong>Atención al Cliente:</strong> Nuestros clientes son la razón por la que hacemos lo que hacemos. Valoramos sus necesidades y trabajamos incansablemente para brindar un servicio personalizado y una atención al cliente excepcional.</li>
                <li><strong>Innovación Continua:</strong> El mundo de la logística está en constante evolución, y en Correo Full Stack, nos mantenemos a la vanguardia de las últimas tecnologías y prácticas para mejorar nuestros servicios y la experiencia del cliente.</li>
            </ul>
    
            <h2>Nuestra Visión</h2>
            <p>Nuestra visión es ser líderes en la industria de la entrega de paquetes, no solo por la calidad de nuestros servicios, sino también por nuestro compromiso con la sostenibilidad y la excelencia en el servicio al cliente. Estamos decididos a marcar la diferencia en el mundo de la logística y aportar valor a la comunidad y al medio ambiente.</p>
        </section>
    
        <section id="contact">
            <h3>Únete a Nosotros</h3>
            <p>Correo Full Stack te invita a formar parte de nuestra familia. Ya sea que necesites enviar paquetes de forma ocasional o estés buscando una solución logística a largo plazo, estamos aquí para ayudarte. Confía en nosotros para entregar tus paquetes de manera segura y a tiempo.</p>
            <p>Gracias por considerarnos como tu socio de confianza en la entrega de paquetes. Estamos ansiosos por servirte y ayudarte en tus necesidades de envío. <NavLink to='/Contactanos'>¡Contáctanos hoy mismo!</NavLink></p>
        </section>
     </div>
    </main>
    )
}

export default Nosotros;