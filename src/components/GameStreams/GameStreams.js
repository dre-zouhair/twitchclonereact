import React,{useEffect,useState} from 'react';
import {useParams,useLocation} from 'react-router-dom';
import api from "../../api";
function GameStreams() {
    let slug = useParams();
    let location = useLocation();
    console.log(slug,location);
    const [streamData,setStreamData] = useState([]);
    const [viewers,setViewers] = useState([]);
    useEffect(
        () => {
            const fetchData = async () =>{
                const res = await api.get(
                    `https://api.twitch.tv/helix/streams?game_id=${location.state.gameID}`
                );
                let dataArray = res.data.data;
                let finalArray = dataArray.map(stream => {
                    stream.thumbnail_url = stream.thumbnail_url.replace("{width}",320).replace("{height}",180);
                });
                //total viewrs count;
                let totalViewers = finalArray.reduce((acc,val)=>{
                    return acc + val.viewer_count;
                },0);
                let userIDs = dataArray.map(stream => {
                    return stream.user_id;
                })
                let baseUrl = "https://api.twitch.tv/helix/users?";
                let queryParamsUsers = "";

                userIDs.map(id => {
                    return (queryParamsUsers = queryParamsUsers + `id=${id}&`)
                })
                let finalUrl = baseUrl + queryParamsUsers;

                let getUsersLogin = await api.get(finalUrl);

                let userLoginArray = getUsersLogin.data.data;
                finalArray = dataArray.map(stream => {

                    stream.login = "";

                    userLoginArray.forEach(login => {
                        if(stream.user_id === login.id) {
                            stream.login = login.login;
                        }
                    })

                    return stream;
                })

                setViewers(totalViewers);
                setStreamData(finalArray);

            }
            fetchData();
        }

    ,[]);
    return (
        <div>
            GamStremas video 23
        </div>
    );

}
export default GameStreams;