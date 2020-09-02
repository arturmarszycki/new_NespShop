import React from 'react';
import AnimateHeight from 'react-animate-height';

class IngredientsAllergens extends React.Component {
    state = {
        height: 0
    }
    toggle = () => {
        this.setState({height: this.state.height === 0 ? 'auto' : 0});
    };
    componentDidMount() {
        this.toggle();
    }
    componentDidUpdate(prevProps) {
        if(this.props.hideSmoothly !== prevProps.hideSmoothly) {
            this.toggle();
        }
    }
    render() {
        const {data, lang} = this.props;
        const {height} = this.state;
        return (
            <AnimateHeight duration={500} height={height}>
                <div className="ingredients-allergens">
                    <div className="ia-part">
                        <p dangerouslySetInnerHTML={{__html: data.ingredients_info}}>{}</p>
                    </div>
                    <div className="ia-part">
                        <h4>{lang.label_ingredients_allergens}:</h4>
                        <p>{data.ingredients_allergens}</p>
                        <h4>{lang.label_net_weight}</h4>
                        <p>{data.net_weight}</p>
                    </div>
                    <div className="ia-part">
                        <h4 className="label-made-in">{data.made_in}</h4>
                    </div>
                </div>
            </AnimateHeight>
        )
    }
}

export default IngredientsAllergens;