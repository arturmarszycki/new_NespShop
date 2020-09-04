import React from 'react';
import '../../styles/common/confirmation.scss';

const Confirmation = ({lang, handleConfirm, handleBack, readyToConfirm}) => {
    return (
        <div className="confirmation">
            <button className="btn_previous_section" onClick={handleBack}>{lang.btn_back}</button>
            {!readyToConfirm && <button className="btn_next_section btn_disabled">{lang.btn_continue}</button>}
            {readyToConfirm && <button className="btn_next_section" onClick={handleConfirm}>{lang.btn_continue}</button>}
        </div>
    );
};

export default Confirmation;