import { EmailSignup } from '../emailsignup/EmailSignup'

import './contact.scss'

export const Contact = () => {
    return (
        <div className="section-contact">
            <h1>Contact Us</h1>

            <p>For artist and marketing enquires, please contact info@waihekejazzfestival.co.nz</p>

            <EmailSignup />
        </div>
    )
}