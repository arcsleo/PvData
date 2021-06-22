import React from 'react';
import './styles.scss';
import Pvlogo from '../../assets/image/Pvlogo.png';

export default function Header(props: any){

    const [sticked, setSticked] = React.useState(false);

    React.useEffect(() => {
        function stickHeaderHandler(e: any) {
            if (e.currentTarget.scrollY >= 5) {
                setSticked(true);
            } else if (e.currentTarget.scrollY < 5) {
                setSticked(false);
            }
        }
        window.addEventListener('scroll', stickHeaderHandler);

        return () => {
            window.removeEventListener('scroll', stickHeaderHandler);
        };
        // eslint-disable-next-line
    }, []);

    return(
        <div className={ sticked ? 'HeaderMain scrolled' : 'HeaderMain' }>
            <div className="headerLogoDiv">
                <img src={Pvlogo} className="headerLogo" />
            </div>
            <div className="headerBoxes">
                <div className="headerInnerBox">
                    Product
                </div>
                <div className="headerInnerBox">
                    Customer stories
                </div>
                <div className="headerInnerBox">
                    Pricing
                </div>
                <div className="headerInnerBox">
                    Team
                </div>
                <div className="headerInnerBox">
                    Contact
                </div>
            </div>
            <div className="headerButtonsDiv">
                <button className="headerButton">
                    Start your Analysis
                </button>
            </div>
        </div>
    );
}