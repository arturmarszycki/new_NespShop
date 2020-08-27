import React, {Component} from 'react';

class CategoryBlock extends Component {
    render() {
        const {categories} = this.props;
        const category_items = categories && categories.map(item => {
            return (
                <li key={item[0].id_shop_category}>
                    <img src={require(`../../images/block_${item[0].id_shop_category}.png`).default} alt="" />
                    <p>{item[0].coffee_category}</p>
                </li>
            )
        });
        return (
            <ul className="category-block">
                {category_items}
            </ul>
        );
    }
}

export default CategoryBlock;