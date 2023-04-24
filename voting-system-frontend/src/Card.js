import React from "react";

const Card = ({ name, campaign, id }) => {
    return (
        <div className='bg-light-green dib br3 pa3 mr2 grow bw2 shadow-5'>
            <img alt='candidates' src={`https://cdn.nba.com/headshots/nba/latest/1040x760/${id}.png?208x152`} />
            <div>
                <h2>{name}</h2>
                <p>{campaign}</p>
            </div>
        </div>
    );
}

export default Card;