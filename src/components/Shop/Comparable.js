import React from 'react';

const Comparable = ({data, showDetails}) => {
    const image = require(`../../images/${data.title}.png`);
    return (
        <li className="similar-capsule" onClick={() => showDetails(data)}>
            <div className="similar-capsule-inner">
                <img src={image.default} alt="" />
                <p>{data.title}</p>
            </div>
        </li>
    )
}

export default Comparable;