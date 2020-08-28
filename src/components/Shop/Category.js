import React, {Component} from 'react';
import Capsule from './Capsule';

class Category extends Component {
    render() {
        const {list, lang, updateCart} = this.props;
        return (
            <div className="single-category" id={`category_${list[0].id_shop_category}`}>
                <p className="category-label">{list[0].coffee_category ? list[0].coffee_category : lang.label_coffee_packs}</p>
                <ul className="capsule-list">
                    {list.map(item => {
                        return (
                            <Capsule key={item.id_shop_product} lang={lang} item={item} updateCart={updateCart} />
                        )
                    })}
                </ul>
            </div>
        );
    }
}

export default Category;