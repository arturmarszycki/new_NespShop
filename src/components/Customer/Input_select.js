import React, {Component} from 'react';

class InputSelect extends Component {
    state = {
        selected: 0
    }
    handleChange = e => {
        this.setState({selected: e.target.value}, () => this.props.saveValue(this.state.selected, this.props.name));
    }
    componentDidMount() {
        switch (this.props.name) {
            case 'customer_title':
                this.setState({selected: '0'});
                break;
            case 'country':
                this.setState({selected: 'nl'});
                break;
            default:
                this.setState({selected: 0});
        }
    }
    render() {
        const {label, name, options} = this.props;
        const {selected} = this.state;
        const selectOptions = options.map((el, index) => {
            return <option key={index} value={el.val}>{el.name}</option>;
        });
        return (
            <div className="input-select">
                <label htmlFor={name}>{label}</label>
                <select name={name} id={name} onChange={this.handleChange} value={selected}>
                    {selectOptions}
                </select>
                {name === 'customer_title' && <span className="select-arrow">{}</span>}
            </div>
        );
    }
}

export default InputSelect;