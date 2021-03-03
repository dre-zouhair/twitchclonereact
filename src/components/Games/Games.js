import React,{useState,useEffect} from 'react';
import api from "../../api";


function Games() {
    const [games,setGames] = useState([]);
    useEffect(()=>{
        const fetchData = async  () => {
            const res = await api.get('https://api.twitch.tv/helix/games/top');
            let dataArray = res.data.data;
            let finalArray = dataArray.map(game => {
                let new_url = game.box_art_url.replace("{width}","250").replace("{height}","300");
                game.box_art_url = new_url;
                return game;
            });
            setGames(finalArray);
        }
        fetchData();
    },[])
    return (
        <div>
            <h1 className="titreGames" >Jeux les plus populaires</h1>
            <div className="flexAccueil">
                {games.map(
                    (game,index) => (
                        <div key={index} className="carteGames">
                            <img src={game.box_art_url} alt="jeu profile pic" className="imgCarte"/>
                            <div className="cardBodyGames" >
                                <h5 className="titreCarteGames" > {game.name}</h5>
                                <div className="btnCarte" > Regarder {game.name}</div>
                            </div>
                        </div>
                    )
                )}
            </div>
        </div>
    );
    
}

export default Games;