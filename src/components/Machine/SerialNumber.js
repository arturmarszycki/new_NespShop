import React from 'react';
import InputSerial from './InputSerial';
import SerialHelp from './SerialHelp';

const SerialNumber = ({lang, submitSerialNumber}) => {
    return (
        <div className="serial-number">
            <p className="serial-info-txt si-txt1">{lang.serial_info_txt1}</p>
            <p className="serial-info-txt si-txt2">{lang.serial_info_txt2}</p>
            <p className="serial-info-txt si-txt3">{lang.serial_info_txt3}</p>
            <InputSerial lang={lang} submitSerialNumber={submitSerialNumber} />
            <SerialHelp lang={lang} />
        </div>
    );
};

export default SerialNumber;