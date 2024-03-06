import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactForm() {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.persist();
        e.preventDefault();
        setIsSubmitting(true);
        // setStatus('Submitting...');

        // Simulate form submission (replace with your actual submission logic)
        emailjs
            .sendForm(
                process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, e.target, process.env.REACT_APP_PUBLICKEY
            )
            .then(
                (result) => {
                    setStatus('Message sent!');
                    setIsSubmitting(false);
                    setTimeout(() => {
                        setStatus(null);
                    }, 5000); // hide message after 5 seconds
                },
                (error) => {
                    setStatus('Something went wrong, please try again later');
                    setIsSubmitting(false);
                    setTimeout(() => {
                        setStatus(null);
                    }, 5000); // hide message after 5 seconds
                }
            );

        // Clears the form after sending the email
        e.target.reset();

        setTimeout(() => {
            setStatus('Submitted!');
            setUsername('');
            setEmail('');
            setMessage('');
        }, 2000);
    };
    return (
        <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <h3 className="text-3xl font-bold tracking-tight text-white">Let's Connect, Make things happen.</h3>
            <p className="mt-5 text-base text-gray-300">I am looking forward to this great opportunity to share my passion and skills with you.</p>
            <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form onSubmit={handleSubmit}>
                    <div className='pb-3'>
                        <label htmlFor="username" className="flex block text-sm font-medium leading-6 text-white">
                            Username
                        </label>
                        <div className="mt-2">
                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                <input
                                    type="text"
                                    name="username"
                                    id="username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    className="block flex-1 border-0 bg-transparent p-2 text-white placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                    placeholder="janesmith"
                                    required
                                />
                            </div>
                        </div>
                    </div>
                    <div className='pb-3'>
                        <label htmlFor="email" className="flex block text-sm font-medium leading-6 text-white">
                            Email
                        </label>
                        <div className="mt-2">
                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                <input
                                    type="email"
                                    id="email"
                                    name="email_from"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="block flex-1 border-0 bg-transparent p-2 text-white placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                    placeholder="janesmith@gmail.com"
                                />
                            </div>
                        </div>
                    </div>
                    <div className='pb-3'>
                        <label htmlFor="message" className="flex block text-sm font-medium leading-6 text-white">
                            Message
                        </label>
                        <div className="mt-2">
                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                <textarea
                                    id="message"
                                    name="message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    placeholder='Message'
                                    required
                                    className="block flex-1 border-0 bg-transparent p-2 text-white placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                    </div>
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        {status === 'Submitting...' ? 'Submitting...' : 'Submit'}
                    </button>
                    {status && <p className='pt-2 block text-sm font-medium leading-6 text-white'>{status}</p>}
                </form>
            </div>
        </div>
    )
}
