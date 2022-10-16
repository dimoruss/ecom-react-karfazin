import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        
        <div class="footer-clean">
        <footer>
            <div class="container">
                <div class="row justify-content-center">
                    
                    <div class="col-sm-4 col-md-3 item">
                        <h3>Nosotros</h3>
                        <ul>
                            <li><a href="#">Compania</a></li>
                            <li><a href="#">Team</a></li>
                            <li><a href="#">Direccion</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-4 col-md-3 item">
                        <h3>Mayoristas</h3>
                        <ul>
                            <li><a href="#">Compras y condiciones</a></li>
                            <li><a href="#">Envios nacionales</a></li>
                            <li><a href="#">Beneficios</a></li>
                        </ul>
                    </div>
                    <div class="col-lg-3 item social"><a href="#"><i class="icon ion-social-facebook">F</i></a><a href="#"><i class="icon ion-social-twitter">T</i></a><a href="#"><i class="icon ion-social-telegram">T</i></a><a href="#"><i class="icon ion-social-instagram">I</i></a>
                        <p class="copyright">Russ GAMES © 2022</p>
                    </div>
                </div>
            </div>
        </footer>
    </div>

    );
};

export default Footer;