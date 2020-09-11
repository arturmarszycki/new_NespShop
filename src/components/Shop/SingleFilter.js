import React, {Component} from 'react';

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
    componentDidUpdate(prevProps) {
        const {params} = this.props;
        if (params !== prevProps.params) {
            this.setState({params});
        }
    }
    render() {
        const {header, name, options, criteria} = this.props;
        const {params} = this.state;
        return (
            <div className={`single-filter filter_${name}`}>
                <p className="single-filter-title">{header}</p>
                <ul className="filter-options">
                    {options.map(el => {
                        return (
                            <li
                                key={el.name}
                                rel={el.val}
                                onClick={this.addParam}
                                className={name === 'intensity' ? params.includes(el.val.join()) ? 'active' : '' : params.includes(el.val) ? 'active' : ''}
                            >
                                <span className="single-filter-name">
                                    {name === 'intensity' ? `${el.name} (${el.val[0]}-${el.val[el.val.length - 1]})` : el.name}
                                </span>
                                {/*{criteria.length > 0 && !criteria.includes(el.val) && <span className="filter-disabled" onClick={e => e.stopPropagation()}>{}</span>}*/}
                            </li>
                        )
                    })}
                </ul>
            </div>
        );
    }
}

export default SingleFilter;