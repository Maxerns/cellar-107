import React from 'react';
import './Newsletter.css';

const Newsletter = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get('email');

    const data = {
      access_key: "7bc11ad3-34e9-4ead-bcf8-c56f2e0ef518", 
      email: email
    };

    const json = JSON.stringify(data); 

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };

  return (
    <div className="app__newsletter">
      <div className="app__newsletter-heading">
        <p className="p__diphy" style={{ marginBottom: '25px' }}>Newsletter</p>
        <h1 className="headtext__messi">Subscribe To Our Newsletter</h1>
        <p className="p__diphy">And never miss latest Updates!</p>
      </div>
      <form onSubmit={onSubmit}>
        <div className="app__newsletter-input flex__center">
          <input type="email" name="email" placeholder="Enter your email address" />
          <button type="submit" className="custom__button">Subscribe</button>
        </div>
      </form>
    </div>
  );
};

export default Newsletter;
