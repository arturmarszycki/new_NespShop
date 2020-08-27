import React, {Component} from 'react';

class InputSelect extends Component {
    state = {
        select_value: ''
    }
    handleSelect = e => {
        this.setState({select_value: e.target.value}, () => this.props.handleSelect(this.props.select_title, this.state.select_value));
    }
    selectLabel = () => {
        const {select_title, lang} = this.props;
        switch(select_title) {
            case 'trade_partner':
                return lang.label_select_trade_partner;
            case 'retailer_store':
                return lang.label_select_retailer_store;
            default:
                return '';
        }
    }
    render() {
        const {select_value} = this.state;
        const {select_title, options} = this.props;
        const selectOptions = options.map((el, index) => {
            return <option key={index} value={el.value}>{el.title}</option>;
        });
        const selectLabel = this.selectLabel();
        return (
            <div className="form-input select-input">
                <label htmlFor={select_title}>{selectLabel}</label>
                <select name={select_title} id={select_title} onChange={this.handleSelect} value={select_value}>
                    {selectOptions}
                </select>
                <span className="select-arrow">{}</span>
            </div>
        )
    }
}

export default InputSelect;