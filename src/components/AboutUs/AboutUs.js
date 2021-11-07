import React from "react";
import { FaShippingFast } from '../../../node_modules/react-icons/fa';
import PaymentMethods from "../Payment Methods/paymentMethods";

const AboutUs = () => {
    return(
        <div className="container">
            <h1>Sobre nosotros</h1>
            <div className="phraseBox">
                <h2 className="phrase">"En el culturismo no hay fórmulas mágicas, solo entrenamiento, descanso y dieta, no hay más"</h2>
                <h3 className="sign">- Arnold Schwarzenegger</h3>
            </div>
            <div className="textBox">
                <p>Arnold Schwarzenegger es indiscutiblemente un pionero de la vida fitness alrededor del mundo, y nosotros creemos fielmente que muchas cosas que predijo, aunque sean llamadas "old school" están empapadas de lógica y fundamentos científicos. Y para nosotros hacer las cosas eficientemente es lo más importante, y sabemos que ir de la mano de la ciencia es la forma más inteligente de hacerlo.</p>
                <div className="bg">
                    <div className="textBox--wImage">
                        <p>También sabemos que nuestros ritmo de vida actual muchas veces no nos permite llevar una dieta de la mejor forma, por eso, desde nuestro lugar queremos aportar esa parte de sencillez y comodidad, teniendo la confianza de que estamos alimentandonos saludablemente y sin salirnos del camino hacia nuestros objetivos, sean cuales sean.</p>
                        <img src="https://res.cloudinary.com/dus99ir1n/image/upload/c_scale,w_250/v1636317046/GlanGlow/food2_ikfr8l.jpg" alt="cereal bar"/>
                    </div>
                    <div className="textBox--wImage">
                        <img src="https://res.cloudinary.com/dus99ir1n/image/upload/c_scale,h_195/v1636317046/GlanGlow/food_lxztag.jpg" alt="chips"/>
                        <p>En <strong>Glan Glow</strong> nos especializamos en la venta de los mejores suplementos, testeados y comprobados para que tengas la seguridad de lo que estás consumiendo. Así también como snacks y alimentos con los mejores ingredientes para que disfrutes sin culpa o para sacarte de un apuro</p>
                    </div>
                </div>
            </div>
            <div className="info">
                <p className="info--title">Queremos facilitarte todo lo más posible, así que:</p>
                <div className="shipping">
                    <FaShippingFast  className="shippingIcon"/>
                    <p>¡Envíos a todo el país en menos de 3 días!</p>
                </div>
                <PaymentMethods/>
            </div>
        </div>
    )
}

export default AboutUs;