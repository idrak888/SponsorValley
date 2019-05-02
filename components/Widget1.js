import React from 'react';

const Widget1 = props => {
    return (
        <div className="Widget1">
            <strong>Leave it to the media experts</strong>
            <div className="row">
                <div className="col-xs-4">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/YouTube_play_buttom_icon_%282013-2017%29.svg/1280px-YouTube_play_buttom_icon_%282013-2017%29.svg.png"/><br/>
                    Youtubers
                </div>      
                <div className="col-xs-4">
                    <img src="http://brendanmitchell.files.wordpress.com/2009/03/blog-icon-200.png" />
                    <br/>
                    Bloggers
                </div>
                <div className="col-xs-4">
                    <img src="https://assets.help.twitch.tv/Glitch_Purple_RGB.png" />
                    <br/>
                    Streamers
                </div>
            </div>
        </div>
    );
}

export default Widget1;