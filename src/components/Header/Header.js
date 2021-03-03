import React from 'react';
import logo from './IconTwitch.svg';
import search from './Search.svg';
import menuIco from './Menulco.svg';
import {Link} from "react-router-dom";

function Header() {

    return (
        <div>
          <nav className="headerTop">
              <ul className="listeMenu" >
                    <li className="liensNav">
                        <Link  className="lien" to={'/'}>
                            <img src={logo} alt="logo twitch" className={logo}/>
                        </Link>

                    </li>
                  <li className="liensNav">
                      <Link className="lien" to={'/'}>
                          Top games
                      </Link>

                  </li>
                  <li className="liensNav">
                      <Link className="lien" to={'/topstreams'}>
                          Top Streams
                      </Link>
                  </li>
                  <li className="liensNav">
                       <form className="formSubmit">
                           <input className="inputRecherche" />
                           <button type="submit">
                               <img src={search} alt="icone loupe" className="logoLoupe"/>
                           </button>
                       </form>
                  </li>

              </ul>
          </nav>
            <div className="menuResBtn">
                <img className="menuIco" src={menuIco} alt="icon menu"/>
            </div>
        </div>

    );

}

export default Header;