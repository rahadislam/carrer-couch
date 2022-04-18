import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className='d-flex align-items-center flex-wrap py-5'>
            <div className="profile_head py-5">
                <h1><u>About ME</u></h1>
                <p>My Name is <strong>Rahad Islam Saimun</strong>.I am student .I studied Diploma in 6th semester. I want to be a full stack web Developer and I am a student of computer in 6th semester.I live in Noakhali and now in Feni</p>

                <h3><u>My Goals</u></h3>
                <p>My goal is to become a full stack web developer and build my identity as a junior web developer  with in the next 6 months.I am ready to do my best for the next 6 months to create a web Developer. The reason for creating a website is to create new websites to make people's work easier.</p>


            </div>
            <div className='profile_img'>
                <img src="https://scontent.fdac13-1.fna.fbcdn.net/v/t39.30808-6/269767467_970652307216231_4654178397600414208_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=174925&_nc_eui2=AeGzmVvtMq9WDcg0CnV6d2crjuhB_QZxA7mO6EH9BnEDudBIE_vGrzuMrK-bPKI_i4Ql2s3j4gNhsFVsoF1GbeVQ&_nc_ohc=JpINY7s_IcgAX-jj_ag&_nc_ht=scontent.fdac13-1.fna&oh=00_AT-QnumqGL-b4JjIkY-f1022CzNEmRZZUEVJ6QIDXshXjg&oe=6260C238" alt="" />
            </div>
        </div>
    );
};

export default About;