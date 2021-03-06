//import bannerImage from '../../images/gfg_banner.jpg'
import bannerImage from '../../images/gfg_banner_colour.jpg'

import { MailingList } from '../mailinglist/MailingList'

import './landingpage.scss'

export const LandingPage = () => {
    return (
        <div className="section-landing-page">

            <div className="landing-page-info">

                <p className="thankyou-text">
                    The festival will return Easter 2022. Thanks to everyone who attended in 2021. 
                </p>

                <MailingList />

            </div>

            <div className="banner-image-container">
                <img src={bannerImage} alt="Good Friday Groove Banner"/>
            </div>
        </div>
    )
}

export default LandingPage