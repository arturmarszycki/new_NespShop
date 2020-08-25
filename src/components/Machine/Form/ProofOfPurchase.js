import React, {Component} from 'react';
import InputProof from "./InputProof";
import '../../../styles/proofOfPurchase.scss';

class ProofOfPurchase extends Component {
    showProofTypes = () => {
        console.log('prooftypes');
    }
    render() {
        const {lang, submitPurchaseProof} = this.props;
        return (
            <div className="proof-of-purchase">
                <p className="proof-label">{lang.proof_txt1}</p>
                <p className="proof-machine-label">{lang.proof_my_machine}</p>
                <div className="machine-info">{}</div>
                <div className="input-proof">
                    <InputProof lang={lang} showProofTypes={this.showProofTypes} submitPurchaseProof={submitPurchaseProof} />
                </div>
            </div>
        );
    }
}

export default ProofOfPurchase;