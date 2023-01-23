import React from 'react';
import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import './Footer.css';
import logo from '../../images/h2.webp';

const Footer = () => {
    return (
        <div className={'footer_bar'}>
            <div className={'footer_wrapper'}>
                <div className={'footer_block'}>
                    <img src={logo} alt="logo" width="76" height="50"/>

                </div>
                <div className={'footer_block'}>
                    <br/>
                    <small>
                    Street 18135 SW Tualatin Valley
                    <br/>
                    City/Town Beaverton
                    <br/>
                    State/Province/Region Oregon
                    <br/>
                    Zip/Postal Code 97006
                    </small>
                </div>
                <div className={'footer_block'}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div>
                            <PhoneAndroidIcon style={{marginTop: '5px'}} />
                        </div>
                        <div>
                            +37378302700
                        </div>
                    </div>
                </div>
                <div className={'footer_block'}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div>
                            <FacebookTwoToneIcon fontSize={'large'} style={{ marginTop: '5px', marginRight: '5px' }}/>
                        </div>
                        <div>
                            Facebook
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;