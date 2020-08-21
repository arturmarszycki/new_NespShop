import React from 'react';

const HelpAction = ({lang, showHelpModal}) => {
    return (
        <div className="help-action">
            <span>{lang.label_help_in_touch}</span>
            <span className="btn_help_in_touch" onClick={showHelpModal}>{lang.btn_help_in_touch}</span>
        </div>
    );
};

export default HelpAction;