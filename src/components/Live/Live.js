import React, {useEffect, useState} from 'react';
import ReactTwitchEmbedVideo from 'react-twitch-embed-video';
import {useParams} from 'react-router-dom';
import api from "../../api";

function Live() {
    let {slug} = useParams();
    const [infoStream,setInfoStream] = useState([]);
    const [infoGame,setInfoGame] = useState([]);
    useEffect(
        () => {
            const fetchData = async () => {
                const res = await api.get(`https://api.twitch.tv/helix/streams?user_login=${slug}`);
                let gameID = res.data.data.map(
                    game => {
                        return game.game_id;
                    }
                );
                const resNomGame = await api.get(`https://api.twitch.tv/helix/games?id=${gameID}`);
                let nomJeu = resNomGame.data.data.map(
                    gameName => {
                        return gameName.name;
                    }
                );
                setInfoGame(nomJeu);
                setInfoStream(res.data.data[0]);
            }
            fetchData();

        }
    ,[]);
    return (
        <div className="containerDecale">
            <ReactTwitchEmbedVideo height="754" width="100%" channel={slug}>
            </ReactTwitchEmbedVideo>
            <div className="contInfo">
                <div className="titreStream">
                    {infoStream.title}
                </div>
                <div className="viewer">
                   Viewrs :  {infoStream.viewer_count}
                </div>
                <div className="infogame">
                    Streamer :  {infoStream.user_name}, &nbsp; langue : {infoStream.language}
                </div>
                <div className="nomJeu">
                    Viewrs :  {infoGame}
                </div>
            </div>
        </div>
    );

}

export default Live;