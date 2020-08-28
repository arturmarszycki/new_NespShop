import React, {Component} from 'react';

class CategoryBlock extends Component {
    scrollToCategory = cat => {
        const selected_category = document.getElementById(`category_${cat}`);
        window.scrollTo({left: 0, top: selected_category.offsetTop - 55, behavior: 'smooth'});
    }
    render() {
        const {categories, lang} = this.props;
        const category_items = categories.map(item => {
            return (
                <li key={item[0].id_shop_category} onClick={() => this.scrollToCategory(item[0].id_shop_category)}>
                    <img src={require(`../../images/block_${item[0].id_shop_category}.png`).default} alt="" />
                    <p>{item[0].coffee_category ? item[0].coffee_category : lang.label_coffee_packs}</p>
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