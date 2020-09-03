import React, {Component} from 'react';

class InputText extends Component {
    state = {
        text: ''
    }
    handleText = e => {
        this.setState({text: e.target.value}, () => this.props.saveValue(this.state.text, this.props.name));
    }
    render() {
        const {text} = this.state;
        const {label, name} = this.props;
        return (
            <div className="input-text">
                <label htmlFor={name}>{label}</label>
                <input
                    type="text"
                    name={name}
                    id={name}
                    onChange={this.handleText}
                    value={text}
                />
            </div>
        )
    }
}

export default InputText;