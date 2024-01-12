/* import React from 'react';

function Button() {
  return (
    <div className="button-container">
      <button className="get-access-button">Get Access Now</button>
    </div>
  );
}

export default Button; */

//////////////////////////////////////////////////////////////////////

// Button.js
/*import React, { useState } from 'react';

function Button() {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setErrorMessage(''); // Clear error message when the user starts typing
  };

  const handleSubmit = () => {
    if (!email.includes('@')) {
      setErrorMessage('Please enter a valid email address');
      return;
    }

    // Handle form submission or redirection here
    // You can add your logic to handle the form submission
    // For this example, we'll just display a success message
    alert(`Access granted for email: ${email}`);
  };

  return (
    <div className="button-container">
      <input
        type="email"
        placeholder="Enter your email address"
        value={email}
        onChange={handleEmailChange}
      />
      <button className="get-access-button" onClick={handleSubmit}>
        Get Access Now
      </button>
      {errorMessage && (
        <p className="error-message">{errorMessage}</p>
      )}
    </div>
  );
}

export default Button;
*/

///////////////////////////////////////////////////////////////////////////
/*
// Button.js
import React, { useState } from 'react';

function Button() {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setErrorMessage(''); // Clear error message when the user starts typing
  };

  const handleSubmit = () => {
    if (!email.includes('@')) {
      setErrorMessage('Please enter a valid email address');
      return;
    }

    // Handle form submission or redirection here
    // You can add your logic to handle the form submission
    // For this example, we'll just display a success message
    alert(`Access granted for email: ${email}`);
  };

  return (
    <div className="button-container">
      <div className="input-container">
        <input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      <button className="get-access-button" onClick={handleSubmit}>
        Get Access Now
      </button>
      {errorMessage && (
        <p className="error-message">{errorMessage}</p>
      )}
    </div>
  );
}

export default Button;
*/
////////////////////////////////////////////////////
/*
// Button.js -- button next to input field
import React, { useState } from 'react';

function Button() {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setErrorMessage(''); // Clear error message when the user starts typing
  };

  const handleSubmit = () => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!emailPattern.test(email)) {
      setErrorMessage('Please enter a valid email address');
      return;
    }

    // Handle form submission or redirection here
    // You can add your logic to handle the form submission
    // For this example, we'll just display a success message
    alert(`Access granted for email: ${email}`);
  };

  return (
    <div className="button-container">
      <input
        type="email"
        placeholder="Enter your email address"
        value={email}
        onChange={handleEmailChange}
      />
      <button className="get-access-button" onClick={handleSubmit}>
        Get Access Now
      </button>
      {errorMessage && (
        <p className="error-message">{errorMessage}</p>
      )}
    </div>
  );
}

export default Button;
*/

/////////////////////////////////////////////////////////////////
/*
// Button.js
import React, { useState } from 'react';

function Button() {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setErrorMessage(''); // Clear error message when the user starts typing
  };

  const handleSubmit = () => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!emailPattern.test(email)) {
      setErrorMessage('Please enter a valid email address');
      return;
    }

    // Handle form submission or redirection here
    // You can add your logic to handle the form submission
    // For this example, we'll just display a success message
    alert(`Access granted for email: ${email}`);
  };

  return (
    <div className="button-container">
      <div className="input-container">
        <input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      <button className="get-access-button" onClick={handleSubmit}>
        Get Access Now
      </button>
      {errorMessage && (
        <p className="error-message">{errorMessage}</p>
      )}
    </div>
  );
}

export default Button;
*/
///////////////////////////////////////////////////////
/*
// Button.js
import React, { useState } from 'react';

function Button() {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setErrorMessage(''); // Clear error message when the user starts typing
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!emailPattern.test(email)) {
      setErrorMessage('Please enter a valid email address');
      return;
    }

    // If the email is valid, submit the form to Formspree
    const form = e.target;
    const formData = new FormData(form);

    fetch('https://formspree.io/f/meqnprza', {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.ok) {
          // Form submission was successful
          alert('Form submitted successfully!');
        } else {
          // Form submission failed
          alert('Form submission failed. Please try again later.');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('An error occurred while submitting the form. Please try again later.');
      });
  };

  return (
    <div className="button-container">
      <form
        action="https://formspree.io/f/meqnprza"
        method="POST"
        onSubmit={handleSubmit} // Call handleSubmit when the form is submitted
      >
        <input
          type="email"
          name="_replyto" // Use "_replyto" as the name for the email field
          placeholder="Enter your email address"
          value={email}
          onChange={handleEmailChange}
        />
        <button type="submit" className="get-access-button">
          Get Access Now
        </button>
        {errorMessage && (
          <p className="error-message">{errorMessage}</p>
        )}
      </form>
    </div>
  );
}

export default Button;
*/


// Button under email input
///////////////////////////////////////////////////////////////////////

/*
// Button.js
import React, { useState } from 'react';

function Button() {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setErrorMessage(''); // Clear error message when the user starts typing
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!emailPattern.test(email)) {
      setErrorMessage('Please enter a valid email address');
      return;
    }

    // If the email is valid, submit the form to Formspree
    const form = e.target;
    const formData = new FormData(form);

    fetch('https://formspree.io/f/meqnprza', {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.ok) {
          // Form submission was successful
          alert('Form submitted successfully!');
        } else {
          // Form submission failed
          alert('Form submission failed. Please try again later.');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('An error occurred while submitting the form. Please try again later.');
      });
  };

  return (
    <div className="button-container">
      <form
        action="https://formspree.io/f/meqnprza"
        method="POST"
        onSubmit={handleSubmit} // Call handleSubmit when the form is submitted
      >
        <input
          type="email"
          name="_replyto" // Use "_replyto" as the name for the email field
          placeholder="Enter your email address"
          value={email}
          onChange={handleEmailChange}
        />
        {errorMessage && (
          <p className="error-message">{errorMessage}</p>
        )}
        <button type="submit" className="get-access-button">
          Get Access Now
        </button>
      </form>
    </div>
  );
}

export default Button;
*/
// Button.js
// final --- use this one
/*
import React, { useState } from 'react';

function Button() {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setErrorMessage(''); // Clear error message when the user starts typing
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!emailPattern.test(email)) {
      setErrorMessage('Please enter a valid email address');
      return;
    }

    // If the email is valid, submit the form to Formspree
    const form = e.target;
    const formData = new FormData(form);

    fetch('https://formspree.io/f/meqnprza', {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.ok) {
          // Form submission was successful
          alert('Form submitted successfully!');
        } else {
          // Form submission failed
          alert('Form submission failed. Please try again later.');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('An error occurred while submitting the form. Please try again later.');
      });
  };

  return (
    <div className="button-container">
      <form
        action="https://formspree.io/f/meqnprza"
        method="POST"
        onSubmit={handleSubmit} // Call handleSubmit when the form is submitted
      >
        <input
          type="email"
          name="_replyto" // Use "_replyto" as the name for the email field
          placeholder="Enter your email address"
          value={email}
          onChange={handleEmailChange}
        />
        {errorMessage && (
          <p className="error-message">{errorMessage}</p>
        )}
        <button type="submit" className="get-access-button">
          Get Access Now
        </button>
      </form>
    </div>
  );
}

export default Button;
*/


 // Button.js
import React, { useState } from 'react';

function Button() {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setErrorMessage(''); // Clear error message when the user starts typing
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!emailPattern.test(email)) {
      setErrorMessage('Please enter a valid email address');
      return;
    }

    // If the email is valid, submit the form to Formspree
    const form = e.target;
    const formData = new FormData(form);

    fetch('https://formspree.io/f/meqnprza', {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.ok) {
          // Form submission was successful
          alert('Form submitted successfully!');
        } else {
          // Form submission failed
          alert('Form submission failed. Please try again later.');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('An error occurred while submitting the form. Please try again later.');
      });
  };

  return (
    <div className="button-container">
      <form
        action="https://formspree.io/f/meqnprza"
        method="POST"
        onSubmit={handleSubmit} // Call handleSubmit when the form is submitted
      >
        <div className="input-container">
          <input
            type="email"
            name="_replyto" // Use "_replyto" as the name for the email field
            placeholder="Enter your email address"
            value={email}
            onChange={handleEmailChange}
          />
          {errorMessage && (
            <p className="error-message">{errorMessage}</p>
          )}
        </div>
        <button type="submit" className="get-access-button">
          Get Access Now
        </button>
      </form>
    </div>
  );
}

export default Button;

/*
// Button.js
import React, { useState } from 'react';

function Button() {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setErrorMessage(''); // Clear error message when the user starts typing
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!emailPattern.test(email)) {
      setErrorMessage('Please enter a valid email address');
      return;
    }

    // If the email is valid, submit the form to Formspree
    const form = e.target;
    const formData = new FormData(form);

    fetch('https://formspree.io/f/meqnprza', {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.ok) {
          // Form submission was successful
          alert('Form submitted successfully!');
        } else {
          // Form submission failed
          alert('Form submission failed. Please try again later.');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('An error occurred while submitting the form. Please try again later.');
      });
  };

  return (
    <div className="button-container">
      <form
        action="https://formspree.io/f/meqnprza"
        method="POST"
        onSubmit={handleSubmit} // Call handleSubmit when the form is submitted
      >
        <div className="input-container">
          <input
            type="email"
            name="_replyto" // Use "_replyto" as the name for the email field
            placeholder="Enter your email address"
            value={email}
            onChange={handleEmailChange}
          />
          {errorMessage && (
            <p className="error-message">{errorMessage}</p>
          )}
        </div>
        <button type="submit" className="get-access-button">
          Get Access Now
        </button>
      </form>
    </div>
  );
}

export default Button;
*/

