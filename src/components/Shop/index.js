import React from 'react';
import AnimateHeight from 'react-animate-height';
import Banner from './extras/banner';
import CategoryBlock from './CategoryBlock';
import '../../styles/Shop/shop.scss';

class Shop extends React.Component {
    state = {
        height: 0
    }
    toggle = () => {
        this.setState({height: this.state.height === 0 ? 'auto' : 0});
    };
    componentDidMount() {
        this.toggle();
        this.props.getData();
    }
    render() {
        const {height} = this.state;
        const {shop, lang} = this.props;
        const icon_filters = require('../../images/icon_filters.png');
        const category_9 = shop.filter(el => el.id_shop_category === 9);
        const category_11 = shop.filter(el => el.id_shop_category === 11);
        const category_29 = shop.filter(el => el.id_shop_category === 29);
        const category_12 = shop.filter(el => el.id_shop_category === 12);
        const categories = [category_9, category_11, category_29, category_12];
        return (
            <AnimateHeight duration={500} height={height}>
                <div className="section-shop">
                    <p className="shop-main-label">{lang.shop_main_label}</p>
                    <Banner />
                    <div className="filters-part">
                        <img src={icon_filters.default} alt="" />
                    </div>
                    <div className="category-block-frame">
                        <CategoryBlock categories={categories[0].length ? categories : null} />
                    </div>
                </div>
            </AnimateHeight>
        )
    }
}

export default Shop;