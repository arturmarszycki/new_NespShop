import React from 'react';

class Barcode extends React.Component {
    state = {
        image: null,
        image_preview_URL: null
    }
    fileHandler = e => {
        this.setState({image: e.target.files[0]}, () => this.props.startLoader('serialklubnespresso', 'graphic'));
        this.fileReader(e.target.files[0]);
    }
    fileReader = file => {
        let reader = new FileReader();
        reader.onloadend = () => {
            this.setState({image_preview_URL: reader.result}, () => this.props.serialGraphicPreview(this.state.image_preview_URL));
        }
        reader.readAsDataURL(file);
    }
    render() {
        const img = require('../../../images/icon_camera.png');
        return (
            <div className="barcode">
                <img src={img.default} alt="" onClick={() => this.inputElement.click()} />
                <input type="file" name="barcode" id="barcode" onChange={this.fileHandler} style={{visibility: 'hidden'}} accept="image/jpeg,image/png,application/pdf;capture=camera" ref={input => this.inputElement = input} />
            </div>
        )
    }
}

export default Barcode;