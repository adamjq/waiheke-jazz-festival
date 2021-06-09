import MailchimpSubscribe from "react-mailchimp-subscribe"

import "./emailsignup.scss"

// from .env file
const MAILCHIMP_SUBSCRIBE_URL = process.env.REACT_APP_MAILCHIMP_URL

const CustomForm = ({ status, message, onValidated }) => {
    let email, name;
    const submit = () =>
        email &&
        name &&
        email.value.indexOf("@") > -1 &&
        onValidated({
            EMAIL: email.value,
            NAME: name.value
    })
  
    return (
        <div className="email-signup-form">
            <p>
                Sign up to the Waiheke Jazz Festival mailing list to get the latest updates by email
            </p>

            <input
                ref={node => (email = node)}
                type="email"
                placeholder="Your email"
            />
            <button className="subscribe-button" onClick={submit}>Subscribe</button>
      </div>
    )
}

export const EmailSignup = () => {
    return (
        <div className="section-email-signup">
            <MailchimpSubscribe
                url={MAILCHIMP_SUBSCRIBE_URL}
                render={({ subscribe, status, message }) => (
                    <CustomForm
                        status={status}
                        message={message}
                        onValidated={formData => subscribe(formData)}
                    />
                )}
            />
      </div>
    )
}

export default EmailSignup