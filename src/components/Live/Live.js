import React from 'react';
import ReactTwitchEmbedVideo from 'react-twitch-embed-video';
import {useParams} from 'react-router-dom';

function Live() {
    let {slug} = useParams();
    return (
        <div>
            <ReactTwitchEmbedVideo height="754" width="100%" channel={slug}>

            </ReactTwitchEmbedVideo>
        </div>
    );

}

export default Live;