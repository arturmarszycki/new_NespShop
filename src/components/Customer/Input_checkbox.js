import React, {Component} from 'react';

class InputCheckbox extends Component {
    state = {
        checked: false,
        chb_classes: 'input-checkbox'
    }
    handleChange = () => {
        this.setState(prevState => ({checked: !prevState.checked}), () => this.props.saveValue(this.state.checked, this.props.name));
    }
    handleClasses = () => {
        const {chb_special, chb_term} = this.props;
        if (chb_special) {
            this.setState({chb_classes: 'input-checkbox chb-special'});
        }
        if (chb_term) {
            this.setState({chb_classes: 'input-checkbox chb-term'});
        }
    }
    componentDidMount() {
        this.handleClasses();
    }
    render() {
        const {label, name} = this.props;
        const {checked, chb_classes} = this.state;
        const img = require('../../images/icon_checked.png');
        return (
            <div className={chb_classes}>
                <div className="checkbox-frame">
                    <input type="checkbox" name={name} id={name} checked={checked} onChange={this.handleChange} />
                    {checked && <span className="check-graphic">
                        <img src={img.default} alt="" />
                    </span>}
                </div>
                <label htmlFor={name}>{label}</label>
            </div>
        );
    }
}

export default InputCheckbox;