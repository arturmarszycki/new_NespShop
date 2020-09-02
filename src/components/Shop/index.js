import React from 'react';
import AnimateHeight from 'react-animate-height';
import Banner from './extras/banner';
import CategoryBlock from './CategoryBlock';
import Category from './Category';
import '../../styles/Shop/shop.scss';

class Shop extends React.Component {
    state = {
        height: 0,
        isFixed: false
    }
    toggle = () => {
        this.setState({height: this.state.height === 0 ? 'auto' : 0});
    };
    trackScrolling = () => {
        const wrappedElement = document.getElementById('category_block');
        const retreatingElement = document.getElementById('filters');
        if (wrappedElement.getBoundingClientRect().top <= 60) {
            this.setState({isFixed: true});
        }
        if (retreatingElement.getBoundingClientRect().top >= 20) {
            this.setState({isFixed: false});
        }
    }
    async componentDidMount() {
        this.toggle();
        await this.props.getData();
        setTimeout(() => {
            document.addEventListener('scroll', this.trackScrolling);
        }, 500);
    }
    componentWillUnmount() {
        document.removeEventListener('scroll', this.trackScrolling);
    }
    render() {
        const {height, isFixed} = this.state;
        const {shop, lang, updateCart, showDetails, activateSection, cart} = this.props;
        if (shop.length) {
            const icon_filters = require('../../images/icon_filters.png');
            const category_9 = shop.filter(el => el.id_shop_category === 9);
            const category_11 = shop.filter(el => el.id_shop_category === 11);
            const category_29 = shop.filter(el => el.id_shop_category === 29);
            const category_12 = shop.filter(el => el.id_shop_category === 12);
            const category_sets = shop.filter(el => el.product_type === 'set');
            const categories = [category_9, category_11, category_29, category_12, category_sets];
            return (
                <AnimateHeight duration={500} height={height}>
                    <div className="section-shop">
                        <p className="shop-main-label">{lang.shop_main_label}</p>
                        <Banner />
                        <div className="filters-part" id="filters">
                            <img src={icon_filters.default} alt="" />
                        </div>
                        <div className={isFixed ? 'category-block-frame el-fixed' : 'category-block-frame'} id="category_block">
                            <CategoryBlock categories={categories} lang={lang} />
                        </div>
                        {isFixed && <div className="block-frame-plug">{}</div>}
                        <div className="products">
                            {categories.map(list => <Category key={list[0].id_shop_category} list={list} lang={lang} updateCart={updateCart} shop={shop} showDetails={showDetails} />)}
                        </div>
                        <div className="shop-actions">
                            <button className="btn_back_to_machine" onClick={() => activateSection(1)}>{lang.btn_back}</button>
                            {cart.length === 0 && <button className="btn_go_to_registration btn_disabled">{lang.btn_continue}</button>}
                            {cart.length > 0 && <button className="btn_go_to_registration" onClick={() => activateSection(3)}>{lang.btn_continue}</button>}
                        </div>
                    </div>
                </AnimateHeight>
            )
        } else {
            return null
        }
    }
}

export default Shop;