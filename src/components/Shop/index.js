import React from 'react';
import AnimateHeight from 'react-animate-height';
import Banner from './extras/banner';
import CategoryBlock from './CategoryBlock';
import Category from './Category';
import ModalFrame from "../common/ModalFrame";
import Filters from './Filters';
import '../../styles/Shop/shop.scss';
import Confirmation from "../common/Confirmation";

class Shop extends React.Component {
    state = {
        height: 0,
        isFixed: false,
        filtersActive: false,
        shopItems: []
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
    showFilters = () => {
        this.setState({filtersActive: true});
    }
    hideFilters = () => {
        this.setState({filtersActive: false});
    }
    async componentDidMount() {
        this.toggle();
        await this.props.getData();
        await this.setState({shopItems: this.props.shop});
        setTimeout(() => {
            document.addEventListener('scroll', this.trackScrolling);
        }, 500);
    }
    componentDidUpdate(prevProps) {
        if (this.props.shop !== prevProps.shop) {
            this.setState({shopItems: this.props.shop});
        }
    }
    componentWillUnmount() {
        document.removeEventListener('scroll', this.trackScrolling);
    }
    render() {
        const {height, isFixed, filtersActive, shopItems} = this.state;
        const {lang, updateCart, showDetails, activateSection, cart, showHelpModal} = this.props;
        if (shopItems.length) {
            const icon_filters = require('../../images/icon_filters.png');
            const category_9 = shopItems.filter(el => el.id_shop_category === 9);
            const category_11 = shopItems.filter(el => el.id_shop_category === 11);
            const category_29 = shopItems.filter(el => el.id_shop_category === 29);
            const category_12 = shopItems.filter(el => el.id_shop_category === 12);
            const category_sets = shopItems.filter(el => el.product_type === 'set');
            const categories = [category_9, category_11, category_29, category_12, category_sets];
            return (
                <AnimateHeight duration={500} height={height}>
                    <div className="section-shop">
                        <p className="shop-main-label">{lang.shop_main_label}</p>
                        <Banner />
                        <div className="filters-part" id="filters">
                            <img src={icon_filters.default} alt="" onClick={this.showFilters} />
                        </div>
                        {filtersActive && <ModalFrame hideModal={this.hideFilters}>
                            <Filters lang={lang} showHelpModal={showHelpModal} shop={shopItems} shopCapsules={shopItems.filter(el => el.product_type === 'capsule')} />
                        </ModalFrame>}
                        <div className={isFixed ? 'category-block-frame el-fixed' : 'category-block-frame'} id="category_block">
                            <CategoryBlock categories={categories} lang={lang} />
                        </div>
                        {isFixed && <div className="block-frame-plug">{}</div>}
                        <div className="products">
                            {categories.map(list => <Category key={list[0].id_shop_category} list={list} lang={lang} updateCart={updateCart} shop={shopItems} showDetails={showDetails} />)}
                        </div>
                        <Confirmation lang={lang} handleConfirm={() => activateSection(3)} handleBack={() => activateSection(1)} readyToConfirm={cart.length > 0} />
                    </div>
                </AnimateHeight>
            )
        } else {
            return null
        }
    }
}

export default Shop;