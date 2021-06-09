import MailchimpSubscribe from "react-mailchimp-subscribe"

import "./emailsignup.scss"

// from .env file
const MAILCHIMP_SUBSCRIBE_URL = process.env.REACT_APP_MAILCHIMP_URL

const onEmailSubscribeError = (errMsg: string): string => {
    if (errMsg.includes("is already subscribed")) {
        return "The email is already subscribed to the mailing list."
    }
    return "An error occurred subscribing the email."
}

const onEmailSubscribeSuccess = (): string => {
    return "Email successfully subscribed."
}

// a basic form
const CustomForm = ({ status, message, onValidated }) => {
    let email;
    const submit = () => {
        email &&
        email.value.indexOf("@") > -1 &&
        onValidated({
            EMAIL: email.value,
        });
        console.log(`Suscribing email: ${email.value}`)
    }
  
    return (
      <div className="email-signup-form">

        <p>
            Sign up to the Waiheke Jazz Festival mailing list to get the latest updates by email
        </p>

        { console.log(`MailChimp subscription status: ${status}`) }
        
        {status === "error" && (
          <div
          className="email-subscribe-err-msg"
            dangerouslySetInnerHTML={{ __html: onEmailSubscribeError(message)}}
          />
        )}
        {status === "success" && (
          <div
            className="email-subscribe-success-msg"
            dangerouslySetInnerHTML={{ __html: onEmailSubscribeSuccess() }}
          />
        )}
        <input
          ref={node => (email = node)}
          type="email"
          placeholder="waiheke@jazz.co.nz"
        />
        <button className="subscribe-button" onClick={submit}>
          Subscribe
        </button>
      </div>
    );
  };

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