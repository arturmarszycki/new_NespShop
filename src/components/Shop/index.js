import React from 'react';
import AnimateHeight from 'react-animate-height';

class Shop extends React.Component {
    state = {
        height: 0
    }
    toggle = () => {
        this.setState({height: this.state.height === 0 ? 'auto' : 0});
    };
    componentDidMount() {
        this.toggle();
    }
    render() {
        const {height} = this.state;
        return (
            <AnimateHeight duration={500} height={height}>
                <p>Shop</p>
            </AnimateHeight>
        )
    }
}

export default Shop;