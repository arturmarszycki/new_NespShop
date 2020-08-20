import React from 'react';
import '../../styles/modals/getInTouch.scss';

const GetInTouch = ({lang}) => {
    return (
        <div className="modal-help">
            <div className="modal-help-labels">
                <h3>{lang.modal_help_title}</h3>
                <p>{lang.modal_help_text}</p>
            </div>
            <div className="modal-help-actions">
                <button>{lang.modal_help_btn1}</button>
                <button>{lang.modal_help_btn2}</button>
                <p>{lang.modal_help_input_label}</p>
                <input type="number" />
            </div>
        </div>
    )
}

export default GetInTouch;