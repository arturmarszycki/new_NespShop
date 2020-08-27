import React, {Component} from 'react';

class InputText extends Component {
    state = {
        text: ''
    }
    handleText = e => {
        this.setState({text: e.target.value});
    }
    render() {
        const {text} = this.state;
        const {error_msg, label, title, validateText} = this.props;
        return (
            <div className="form-input text-input">
                <label htmlFor={title}>{label}</label>
                <input
                    type="text"
                    name={title}
                    id={title}
                    onChange={this.handleText}
                    value={text}
                    onBlur={() => validateText(title, text)}
                />
                {error_msg && <p><small className="form-warn">{error_msg}</small></p>}
            </div>
        )
    }
}

export default InputText;