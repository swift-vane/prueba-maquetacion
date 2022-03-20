import logo from '../images/logo.png';
import Icon from "../components/iconos.jsx";
import hoja2 from '../images/hojas-2.png';

// webpack.config.js

function Header (){
    return(
        <div>
            <div class='title_page'>

<h1><span>Marcas </span>Center </h1>
<h4>Aprende de marcas y descubre habilidades de experto en su universo de licores </h4>
</div>
        <div className='header'>
        
           <div className="header_logo">
                 <img src={logo} alt="Logo" />       
           </div>

           <div className="header_user">
                <div className="header_user_image">
                    <div>VC</div>
                </div>
                <div className="header_user_data">
                        <div className="header_user_data_name">Vane Cendales</div>
                        <div className="header_user_data_position">Cargo: Mesera</div>
                </div>
           </div>
           <div className="header_indicators">
                 <div variant="contained" color="primary">
                     <div class='header_indicators Monedas'> 
                        <div class='header_indicators_icon'>  <Icon icon="coin-dollar" size={20}  /></div>
                            <div class='indicators_data'>
                                <div class='indicators_data number'>86</div> 
                                <div class='indicators_data data'>Monedas</div> 
                            </div>                       
                     </div>
                 </div>
                
                 <div variant="contained" color="primary">
                     <div class='header_indicators tiquets'> 
                        <div class='header_indicators_icon'><Icon icon="ticket11" size={20} color="{$morado}" /></div>
                            <div class='indicators_data'>
                                <div class='indicators_data number'>$5688</div> 
                                <div class='indicators_data data'>Tickets Acumulados</div> 
                            </div>                       
                     </div>
                 </div>
                 <div variant="contained" color="primary">
                     <div class='header_indicators retos'> 
                        <div class='header_indicators_icon'>  <Icon icon="flag" size={20} color="{$morado}" /></div>
                         <div class='indicators_data'>
                                <div class='indicators_data number'>88</div> 
                                <div class='indicators_data data'>Numero de retos</div> 
                            </div>                       
                     </div>
                 </div>
           </div>
           <div className="header_buttons">
                <Icon icon="log-out" size={20}/>
                <img src={hoja2} alt="Hoja de decoracion"className='hojas hoja-2'/>
           </div>
          
        </div>
       
        </div>
    )
}

export default Header;