import React,{useEffect,useState} from 'react';
import {useParams} from 'react-router-dom';
import api from "../../api";
function GameStreams() {
    let slug = useParams();
    const [streamData,setStreamData] = useState([]);
    const [viewers,setViewers] = useState([]);
    useEffect(
        () => {
            const fetchData = async () =>{
                const res = await api.get(``);
            }
            fetchData();
        }

    );
    return (
        <div>
            GamStremas video 23
        </div>
    );

}
export default GameStreams;