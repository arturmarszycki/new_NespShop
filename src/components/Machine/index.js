import React from 'react';
import AnimateHeight from 'react-animate-height';
import MachineForm from "./MachineForm";
import '../../styles/Machine/machine.scss';

class Machine extends React.Component {
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
        const {lang, machineData, addMachineInfo} = this.props;
        return (
            <AnimateHeight duration={500} height={height}>
                <div className="section-machine">
                    <MachineForm lang={lang} data={machineData} addMachineInfo={addMachineInfo} />
                </div>
            </AnimateHeight>
        )
    }
}

export default Machine;