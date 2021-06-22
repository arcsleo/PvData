import React from 'react';
import './styles.scss';
import Logo1 from '../../assets/image/logo1.png';
import Logo2 from '../../assets/image/logo2.png';
import Logo3 from '../../assets/image/logo3.png';
import Logo4 from '../../assets/image/logo4.png';

export default function SecondBanner(props: any){

    const [sticked, setSticked] = React.useState(false);

    return(
        <div className="SecondBanner">
            <div className="SecondBannerLeft">
                <div className="SecondBannerLeftHeadtext">
                    The leading platform to extract real time solar energy data
                </div>
                <div className="SecondBannerLeftSubtext">
                    PvData is proud to be a leader in data intergrity, reliability and customer satisfaction, as accredited by our partners.
                </div>
            </div>
            <div className="SecondBannerRight">
                <div className="SecondBannerRightImagediv">
                    <img src={Logo1} className="SecondBannerRightImage" />
                </div>
                <div className="SecondBannerRightImagediv">
                    <img src={Logo2} className="SecondBannerRightImage" />
                </div>
                <div className="SecondBannerRightImagediv1">
                    <img src={Logo3} className="SecondBannerRightImage" />
                </div>
                <div className="SecondBannerRightImagediv">
                    <img src={Logo4} className="SecondBannerRightImage" />
                </div>
            </div>
        </div>
    );
}