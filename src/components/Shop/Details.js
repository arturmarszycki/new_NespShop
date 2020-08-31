import React, {Component} from 'react';

class Details extends Component {
    render() {
        const {lang, item} = this.props;
        return (
            <div className="item-details">
                {item.title}
            </div>
        );
    }
}

export default Details;