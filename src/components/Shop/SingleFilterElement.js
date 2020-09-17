import React from 'react';

const SingleFilterElement = ({singleOption, name, params, addParam, optionEnabled}) => {
    return (
        <li
            key={singleOption.name}
            rel={singleOption.val}
            onClick={addParam}
            className={name === 'intensity' ? params.includes(singleOption.val.join()) ? 'active' : '' : params.includes(singleOption.val) ? 'active' : ''}
        >
            <span className="single-filter-name">
                {name === 'intensity' ? `${singleOption.name} (${singleOption.val[0]}-${singleOption.val[singleOption.val.length - 1]})` : singleOption.name}
            </span>
            {/*{optionEnabled &&  <span className="filter-disabled" onClick={e => e.stopPropagation()}>{}</span>}*/}
        </li>
    );
};

export default SingleFilterElement;