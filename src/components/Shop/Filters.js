import React, {Component} from 'react';
import HelpAction from '../common/HelpAction';
import SingleFilter from "./SingleFilter";
import '../../styles/Shop/filters.scss';

class Filters extends Component {
    state = {
        intensity: [],
        cup_size: [],
        how_to_drink: [],
        characteristics: [],
        result: this.props.shopCapsules,
        criteria: []
    }
    options_intensity = [{name: 'Light', val: [1,2,3,4]}, {name: 'Mild', val: [5,6,7,8]}, {name: 'Intense', val: [9,10,11,12,13,14,15]}];
    options_cup_size = [{name: 'Ristretto', val: 'xs'}, {name: 'Espresso', val: 's'}, {name: 'Lungo', val: 'm'}, {name: `Very long`, val: 'milk'}];
    options_how_to_drink = [{name: 'Decaffeinated', val: '1'}, {name: 'Black', val: '2'}, {name: 'With milk', val: '3'}, {name: 'Espresso-like', val: '4'}, {name: 'Filter-like', val: '5'}, {name: 'Over ice', val: '6'}, {name: 'Flavored', val: '7'}];
    options_characteristics = [{name: 'Novelty', val: '1'}, {name: 'Limited', val: '2'}, {name: 'Seasonal', val: '3'}, {name: 'Single origin', val: '4'}, {name: 'Sustainability sourced', val: '5'}, {name: 'Fairtrade certified', val: '6'}, {name: '100% traceable', val: '7'}];
    addFilterIntensity = async val => {
        await this.setState({intensity: val});
        const {intensity, cup_size, result} = this.state;
        const {shopCapsules} = this.props;
        let criteriaArray = [];
        let intensityValues = intensity.join().split(',');
        let capsulesToFilter = cup_size.length === 0 ? shopCapsules : result;
        const currentResult = await capsulesToFilter.filter(el => {
            if (intensityValues.includes(String(el.intensity))) {
                intensityValues.forEach(it => {
                    criteriaArray = [...criteriaArray, it];
                });
                return el;
            }
        });
        this.setState({criteria: criteriaArray.filter((v, i, a) => a.indexOf(v) === i)}, () => this.handleFilters(currentResult));
    }
    addFilterCupSize = async val => {
        await this.setState({cup_size: val});
        const {intensity, cup_size, result, criteria} = this.state;
        const {shopCapsules} = this.props;
        let criteriaArray = criteria;
        let cupSizeValues = cup_size.join().split(',');
        let capsulesToFilter = intensity.length === 0 ? shopCapsules : result;
        const currentResult = await capsulesToFilter.filter(el => {
            for (let i = 0; i <= cupSizeValues.length; i++) {
                if (cupSizeValues[i] === 'xs' && el.cup_size.includes(cupSizeValues[i])) {
                    criteriaArray = [...criteriaArray, 'xs'];
                    return el;
                }
                if (cupSizeValues[i] === 's' && (el.cup_size.includes(' s') || (el.cup_size.includes('s') && el.cup_size.length === 1) || el.cup_size.includes('s '))) {
                    criteriaArray = [...criteriaArray, 's'];
                    return el;
                }
                if (cupSizeValues[i] === 'm' && (el.cup_size.includes('s m') || (el.cup_size.includes('m') && el.cup_size.length === 1))) {
                    criteriaArray = [...criteriaArray, 'm'];
                    return el;
                }
                if (cupSizeValues[i] === 'milk' && el.cup_size.includes(cupSizeValues[i])) {
                    criteriaArray = [...criteriaArray, 'milk'];
                    return el;
                }
            }
        });
        this.setState({criteria: criteriaArray.filter((v, i, a) => a.indexOf(v) === i)}, () => this.handleFilters(currentResult));
    }
    handleFilters = array => {
        if (array.length === 0) {
            this.setState({result: this.props.shopCapsules, criteria: []});
        } else {
            this.setState({result: array});
        }
    }
    resetFilters = () => {
        this.setState({intensity: [], result: this.props.shopCapsules, cup_size: [], how_to_drink: [], characteristics: [], criteria: []});
    }
    render() {
        const {lang, showHelpModal} = this.props;
        const {intensity, cup_size, how_to_drink, characteristics, result, criteria} = this.state;
        return (
            <div className="filters">
                <div className="filters-upper">
                    <span className="btn_reset_filters" onClick={this.resetFilters}>{lang.filters_reset_all}</span>
                    <h3>{lang.filters_label_sort}</h3>
                    <span className="filters-sort-by">
                        <select name="sort_by" id="sort_by">
                            <option value="1">Recommended</option>
                            <option value="2">test 1</option>
                            <option value="3">test 2</option>
                            <option value="4">test 3</option>
                        </select>
                        <span className="select-arrow">{}</span>
                    </span>
                </div>
                <h3 className="filters-label">{lang.filters_label_filter}</h3>
                <SingleFilter header={lang.filters_intensity} options={this.options_intensity} name="intensity" addFilter={this.addFilterIntensity} params={intensity} criteria={criteria} />
                <SingleFilter header={lang.filters_cup_size} options={this.options_cup_size} name="cup_size" addFilter={this.addFilterCupSize} params={cup_size} criteria={criteria} />
                <SingleFilter header={lang.filters_how_to_drink} options={this.options_how_to_drink} name="how_to_drink" addFilter={this.addFilterIntensity} params={how_to_drink} criteria={criteria} />
                <SingleFilter header={lang.filters_characteristics} options={this.options_characteristics} name="characteristics" addFilter={this.addFilterIntensity} params={characteristics} criteria={criteria} />
                <div className="filters-results">
                    {result.length > 0 && <button className="btn_filters_results">{lang.filters_btn_see} {result.length} {lang.filters_btn_results}</button>}
                    {result.length === 0 && <button className="btn_filters_results btn_disable">{result.length} {lang.filters_btn_results}</button>}
                </div>
                <HelpAction lang={lang} showHelpModal={showHelpModal} />
            </div>
        );
    }
}

export default Filters;