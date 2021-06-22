import React from 'react';
import PDF from '../../assets/image/Pdf.png';
import Excel from '../../assets/image/Excel.png';
import './styles.scss';

export default function Banner(props: any){
    return(
        <div className="BannerHead">
            <div className="bannerLeft">
                <div className="bannerLeftHeadtext">
                    Solar Energy Due Diligence, Environmental and Financial report in minutes
                </div>
                <div className="bannerLeftSubtext">
                    Get a comprehensive report assessing the viability of your solar PV grid project anywhere in the world
                </div>
                <div className="bannerLeftButtondiv">
                    <button className="bannerLeftButton">
                    Free Download
                    </button>
                </div>
                <div className="bannerLeftBottomtext">
                    No credit card required
                </div>
            </div>
            <div className="bannerRight">
                <div className="ipadBack">
                    <img src={PDF} className="BannerpdfImage" alt="" />
                </div>
                <div className="monitorBck">
                    <img src={Excel} className="BannerexcelImage" alt="" />
                </div>
            </div>
        </div>
    );
}