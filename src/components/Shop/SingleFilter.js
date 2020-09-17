import React, {Component} from 'react';
import SingleFilterElement from "./SingleFilterElement";

class SingleFilter extends Component {
    state = {
        params: []
    }
    addParam = async e => {
        const val = e.target.attributes.rel.nodeValue;
        const {params} = this.state;
        const {name, addFilter} = this.props;
        if (params.includes(val)) {
            let updatedFilter = params.filter(el => el !== val);
            await this.setState({params: updatedFilter});
        } else {
            await this.setState(prevState => ({params: [...prevState.params, val]}));
        }
        addFilter(this.state.params, name);
    }
    setAvailableParams = () => {
        //console.log(this.state.params);
        //console.log(this.props.result);
    }
    componentDidMount() {
        this.setAvailableParams();
    }
    componentDidUpdate(prevProps) {
        const {params, result} = this.props;
        if (params !== prevProps.params) {
            this.setState({params});
        }
        if (result !== prevProps.result) {
            this.setAvailableParams();
        }
    }
    render() {
        const {header, name, options, criteria, result} = this.props;
        const {params} = this.state;
        return (
            <div className={`single-filter filter_${name}`}>
                <p className="single-filter-title">{header}</p>
                <ul className="filter-options">
                    {options.map(el => {
                        return <SingleFilterElement key={el.name} singleOption={el} name={name} params={params} addParam={this.addParam} />
                    })}
                </ul>
            </div>
        );
    }
}

export default SingleFilter;