import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className='d-flex align-items-center flex-wrap py-5'>
            <div className="profile_head">
                <h1><u>About ME</u></h1>

            </div>
            <div className='profile_img'>
                <img src="https://scontent.fdac13-1.fna.fbcdn.net/v/t39.30808-6/269767467_970652307216231_4654178397600414208_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=174925&_nc_eui2=AeGzmVvtMq9WDcg0CnV6d2crjuhB_QZxA7mO6EH9BnEDudBIE_vGrzuMrK-bPKI_i4Ql2s3j4gNhsFVsoF1GbeVQ&_nc_ohc=JpINY7s_IcgAX-jj_ag&_nc_ht=scontent.fdac13-1.fna&oh=00_AT-QnumqGL-b4JjIkY-f1022CzNEmRZZUEVJ6QIDXshXjg&oe=6260C238" alt="" />
            </div>
        </div>
    );
};

export default About;