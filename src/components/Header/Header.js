import React from 'react';
import logo from './IconTwitch.svg';
import search from './Search.svg';
import menuIco from './Menulco.svg';
function Header() {

    return (
        <div>
          <nav className="headerTop">
              <ul className="listeMenu" >
                    <li className="liensNav">
                        <img src={logo} alt="logo twitch" className={logo}/>
                    </li>
                  <li className="liensNav">
                      Top games
                  </li>
                  <li className="liensNav">
                     Top streams
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