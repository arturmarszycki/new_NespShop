import React from 'react';
import HelpAction from '../../common/HelpAction';
import '../../../styles/modals/ProofTypes.scss';

const ProofTypes = ({lang, showHelpModal}) => {
    const proof_1 = require('../../../images/proof_1.png');
    const proof_2 = require('../../../images/icon_paper_receipt.png');
    const proof_3 = require('../../../images/icon_email_confirm.png');
    const proof_4 = require('../../../images/icon_document.png');
    return (
        <div className="modal-proof-types">
            <h2>{lang.proof_define_type}</h2>
            <img src={proof_1.default} alt="" className="proof_1" />
            <p>{lang.proof_type_1}</p>
            <img src={proof_2.default} alt="" className="proof_2" />
            <p>{lang.proof_type_2}</p>
            <img src={proof_3.default} alt="" className="proof_3" />
            <p>{lang.proof_type_3}</p>
            <img src={proof_4.default} alt="" className="proof_4" />
            <p>{lang.proof_type_4}</p>
            <HelpAction lang={lang} showHelpModal={showHelpModal} />
        </div>
    );
};

export default ProofTypes;