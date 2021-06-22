import React from 'react';
import './styles.scss';
import PDF from '../../assets/image/Pdf.png';

export default function FirstTab(props: any){

    const tabData = [
        { id: 1, Color: 'rgba(0, 135, 83, 0.8)', Title: 'Country Solar Outlook', Image: PDF , Head: 'Understand your market', Description: 'Get live updates on  the solar  power and utility market across more than 94 countries globally. Find out how country policies and regulation affect your solar energy project.' },
        { id: 2, Color: 'rgba(0, 135, 83, 0.68)', Title: 'Sensitivity Analysis', Image: PDF, Head: 'Account for future uncertainty', Description: 'Run a sensitivity analysis on your solar energy project to vary the assumptions of your financial outputs under different scenarios.' },
        { id: 3, Color: 'rgba(0, 135, 83, 0.56)', Title: 'Environmental Report', Image: PDF , Head: 'Know your environmental and social risk', Description: 'Identify and mitigate major environmental, social and governnance risks (ESG) that your solar energy project may be exposed to during its lifecycle' },
        { id: 4, Color: 'rgba(0, 135, 83, 0.44)', Title: 'Technical & Design', Image: PDF , Head: 'Conduct your technical analysis', Description: 'Measure the electricity yield of your solar PV system; run a forecast analysis on your project sites’ irradiance, temperature and electricity generation.' },
        { id: 5, Color: 'rgba(0, 135, 83, 0.32)', Title: 'Financial Summary', Image: PDF , Head: 'Get your Project finance overview', Description: 'Get an overview of key financial metrics of your solar energy project to better assess financial viability.' },
        { id: 6, Color: 'rgba(0, 135, 83, 0.2)', Title: 'Balance Sheet', Image: PDF , Head: 'Get your Cashflow overview', Description: 'View your solar energy projects financial statement, detailing the balance of the revenue and expenditure over your projects lifecycle.'}
    ];

    const [activeTab, setactiveTab] = React.useState(1);

    const switchTab = (id: number) => {
        setactiveTab(id);
    };

    return(
        <div className="FirstTabMain">
            <div className="FirstTabLeftSide">
                { tabData.map((value)=>{
                    return(
                        value.id === activeTab ?
                            <div className="FirstTabLeftCover" style={ value.id === activeTab ? {backgroundColor: value.Color }:{}}>
                                <div className="FirstTabLeftCoverImagediv">
                                    <img src={value.Image} className="FirstTabLeftCoverImage" alt="" />
                                </div>
                            </div>
                            :
                            null
                    );
                }) }
            </div>
            <div className="FirstTabRightSide">
                { tabData.map((mainval)=>{
                    return(
                        mainval.id === activeTab ?
                        <>
                            <div className="FirstTabRightInner">
                                <div className="FirstTabRightSectionHead">
                                    {mainval.Title}
                                </div>
                                <div className="FirstTabRightSectionTitle">
                                    {mainval.Head}
                                </div>
                                <div className="FirstTabRightSectionSubTitle">
                                    {mainval.Description}
                                </div>
                                <div className="FirstTabTabs">
                                    { tabData.map((value)=>{
                                        return(
                                            <div className={ value.id === activeTab ? 'ActiveFirstTabItem' : 'FirstTabItem'  } onClick={()=>switchTab(value.id)}>
                                                { value.Title }
                                            </div>
                                        );
                                    }) }
                                </div>
                            </div>
                        </>
                        :
                        null
                    );
                })}
            </div>
        </div>
    );
}