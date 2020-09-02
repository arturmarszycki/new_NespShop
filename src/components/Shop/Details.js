import React, {Component} from 'react';
import HelpAction from '../common/HelpAction';
import ComparableProfiles from './ComparableProfiles';
import IngredientsAllergens from "./IngredientsAllergens";
import SetSelection from "./SetSelection";
import '../../styles/Shop/details.scss';

class Details extends Component {
    state = {
        bought: this.props.item.qty,
        product: this.props.item,
        hideSmoothly: false,
        ingredients_allergens: false,
        animateIcon: false,
        productType: 'capsule'
    }
    showIntensityGraphic = int => {
        let array = [], intensity = int;
        for (let i = 1; i <= 13; i++) {
            let el = intensity > 0 ? <span key={i} className="int-square active-square">{}</span> : <span key={i} className="int-square">{}</span>;
            array.push(el);
            intensity--;
        }
        return array;
    }
    addPieces = () => {
        const amount = this.state.productType === 'capsule' ? 10 : 1;
        this.setState(prevState => ({bought: prevState.bought + amount}));
    }
    removePieces = () => {
        const amount = this.state.productType === 'capsule' ? 10 : 1;
        this.setState(prevState => ({bought: prevState.bought - amount}));
    }
    ingredientsToggle = () => {
        if (this.state.ingredients_allergens) {
            this.setState({hideSmoothly: true, animateIcon: false});
            setTimeout(() => {
                this.setState({ingredients_allergens: false, hideSmoothly: false});
            }, 600);
        } else {
            this.setState({ingredients_allergens: true, animateIcon: true});
        }
    }
    defineProductType = () => {
        switch (this.props.item.product_type) {
            case 'capsule':
                this.setState({productType: 'capsule'});
                break;
            case 'set':
                this.setState({productType: 'set'});
                break;
            default:
                this.setState({productType: 'capsule'});
        }
    }
    componentDidMount() {
        this.defineProductType();
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.state.bought !== prevState.bought) {
            this.setState(prevState => ({product: {...prevState.product, qty: this.state.bought}}), () => {
                this.props.updateCart(this.state.product);
            });
        }
        if (this.props.item !== prevProps.item) {
            this.setState({bought: this.props.item.qty, product: this.props.item});
            this.defineProductType();
        }
    }
    render() {
        const {lang, item, showHelpModal, fullData, showDetails} = this.props;
        const {ingredients_allergens, hideSmoothly, animateIcon, productType} = this.state;
        const image = item.product_type === 'capsule' ? require(`../../images/${item.title}.png`) : require(`../../images/packet_${item.capsule_count}.png`);
        const add_10 = require('../../images/icon_add.png');
        const remove_10 = require('../../images/icon_remove.png');
        const cup_small = require('../../images/icon_cup_small.png');
        const cup_medium = require('../../images/icon_cup_medium.png');
        const cup_big = require('../../images/icon_cup_big.png');
        const arrow_down = require('../../images/icon_arrow_down.png');
        const similarList = item.similar_products !== null && item.similar_products.map(product => {
            return product = fullData.filter(item => item.id_shop_product === Number(product))[0];
        });
        return (
            <div className="item-details">
                <img src={image.default} alt="" className={productType === 'set' ? 'item-graphic set-graphic' : 'item-graphic'} />
                <h3 className="item-title">{item.title}</h3>
                {productType === 'capsule' && <p className="item-subtitle">A combination reminiscent of dark chocolate truffle</p>}
                {productType === 'set' && <div className="item-description set-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate nemo praesentium provident repellendus sed sit soluta voluptatibus.</div>}
                <p className="item-price">&euro;0,42</p>
                <div className="buy-product">
                    {!item.qty && <button className="btn_buy_now" onClick={this.addPieces}>{lang.btn_buy_now}</button>}
                    {item.qty > 0 && <div className="quantity-action">
                        <img src={remove_10.default} alt="" onClick={this.removePieces} />
                        <span>{item.qty}</span>
                        <img src={add_10.default} alt="" onClick={this.addPieces} />
                    </div>}
                </div>
                {item.intensity && <div className="intensity-info">
                    <div className="intensity-graphic">{this.showIntensityGraphic(item.intensity)}</div>
                    <span className="intensity-text">{lang.label_intensity}&nbsp;{item.intensity}</span>
                </div>}
                {productType === 'capsule' && <div className="item-description">A vibrant dark cocoa flavour meets the cereal roasted notes of a
                    Latin American Arabica. A combination reminiscent of dark chocolate truffle.</div>}
                {item.cup_size && <div className="item-cup-sizes">
                    <h4>{lang.label_cup_size}</h4>
                    <div className="cup-sizes">
                        {item.cup_size.includes('xs') && <div className="cup-size">
                            <img src={cup_small.default} alt=""/>
                            <p>25 ml</p>
                        </div>}
                        {(item.cup_size.includes(' s') || item.cup_size.includes('s') && item.cup_size.length === 1) && <div className="cup-size">
                            <img src={cup_medium.default} alt=""/>
                            <p>40 ml</p>
                        </div>}
                        {item.cup_size.includes('m') && <div className="cup-size">
                            <img src={cup_big.default} alt=""/>
                            <p>110 ml</p>
                        </div>}
                    </div>
                </div>}
                {similarList.length && <ComparableProfiles lang={lang} list={similarList} showDetails={showDetails} />}
                {productType === 'capsule' && <div className="ingredients-allergens-label" onClick={this.ingredientsToggle}>
                    <h4>{lang.label_ingredients_allergens}</h4>
                    <img src={arrow_down.default} alt="" className={animateIcon ? 'ia-arrow ia-arrow-active' : 'ia-arrow'}/>
                </div>}
                {productType === 'capsule' && ingredients_allergens && <IngredientsAllergens lang={lang} data={item} hideSmoothly={hideSmoothly} />}
                {productType === 'set' && <SetSelection lang={lang} data={item} fullData={fullData} />}
                <HelpAction lang={lang} showHelpModal={showHelpModal} />
            </div>
        );
    }
}

export default Details;