import React from 'react';

class ModalFrame extends React.Component {
    state = {
        height100: false
    }
    setHeight = () => {
        setTimeout(() => {
            const wH = window.innerHeight;
            const modalContent = document.getElementById('modal-content').firstElementChild.getBoundingClientRect().height;
            if (modalContent > wH - 100) {
                this.setState({height100: true});
            }
        }, 500);
    }
    componentDidMount() {
        this.setHeight();
    }
    render() {
        const {children, hideModal} = this.props;
        const {height100} = this.state;
        const image = require('../../images/icon_close.png');
        return (
            <div className="modal-frame">
                <div className="modal-inner" style={height100 ? {height: '100%'} : {}}>
                    <span className="modal-close" onClick={hideModal}>
                        <img src={image.default} alt="" />
                    </span>
                    <div className="modal-content" style={height100 ? {maxHeight: 'calc(97% + 20px)'} : {}} id="modal-content">
                        {children}
                    </div>
                </div>
            </div>
        );
    }
}

export default ModalFrame;