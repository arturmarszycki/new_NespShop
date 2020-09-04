import React from 'react';

const Delivery = ({lang, customerData}) => {
    const img = require('../../images/icon_edit.png');
    return (
        <div className="summary-delivery">
            <div className="delivery-header">
                <span>{lang.label_delivery_address}</span>
                <img src={img.default} alt="" />
            </div>
            <div className="delivery-data">
                <div className="data-row">
                    <div className="data-el">
                        <span>{lang.form_label_name}</span>
                        <p>{customerData.name}</p>
                    </div>
                    <div className="data-el">
                        <span>{lang.form_label_surname}</span>
                        <p>{customerData.surname}</p>
                    </div>
                </div>
                <div className="data-row">
                    <div className="data-el">
                        <span>{lang.form_label_zip_code}</span>
                        <p>{customerData.zip_code}</p>
                    </div>
                    <div className="data-el">
                        <span>{lang.form_label_city}</span>
                        <p>{customerData.city}</p>
                    </div>
                </div>
                <div className="data-row">
                    <div className="data-el">
                        <span>{lang.form_label_street_building}</span>
                        <p>{customerData.street_building}</p>
                    </div>
                </div>
                <div className="data-row">
                    <div className="data-el">
                        <span>{lang.label_number}</span>
                        <p>{customerData.flat}</p>
                    </div>
                    <div className="data-el">
                        <span>{lang.form_label_floor}</span>
                        <p>{customerData.floor}</p>
                    </div>
                </div>
                <div className="data-row">
                    <div className="data-el">
                        <span>{lang.form_label_phone}</span>
                        <p>{customerData.phone}</p>
                    </div>
                    <div className="data-el">
                        <span>{lang.form_label_email}</span>
                        <p>{customerData.email}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Delivery;