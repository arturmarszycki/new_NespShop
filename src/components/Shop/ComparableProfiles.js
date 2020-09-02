import React from 'react';
import Comparable from "./Comparable";

const ComparableProfiles = ({lang, list, showDetails}) => {
    const items = list.length && list.map(item => <Comparable key={item.id_shop_product} data={item} showDetails={showDetails} />);
    return (
        <div className="comparable-profiles">
            <h4>{lang.label_comparable}</h4>
            <ul>{items}</ul>
        </div>
    )
}

export default ComparableProfiles;