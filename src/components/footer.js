
import Icon from "../components/iconos.jsx";
import hoja1 from '../images/hojas-1.png';

function Footer (){
    return(
        <div>
             <div className='confiabilidad'>
        <div className='icon'> <Icon icon="heart" size={40}/></div>
        <div className='title'>Confiabiliad Responsable</div>
        <div className='badge'>1</div>
      </div>
        <div className='footer'>
            
           <div className='footer_menu'>
               
               <nav>
                   <ul>
                       <li><a href='#'><Icon icon="ticket11" size={20} color="{$morado}" />Inicio</a></li>
                       <li><a href='#'><Icon icon="user" size={20} color="{$morado}" />Perfil</a></li>
                       <li><a href='#'><Icon icon="award" size={20} color="{$morado}" />Premios</a></li>
                       <li><a href='#'><Icon icon="airplay" size={20} color="{$morado}" />tutorial</a></li>
    
                   </ul>
               </nav>
               <a class="mdc-button--leading">
                    <Icon icon="gift" size={40} />
                        <span class="mdc-button__label">Campaña del mes</span>
                    </a>
             </div>
                            
           <div className='footer_copyright'>
                <p>Footer copyright 2020 todo los derechos reservados</p>
            </div>
            <img src={hoja1} alt="Hoja de decoracion1" className='hojas hoja-1'/>
              
          
        </div>

        </div>
    )
}

export default Footer;