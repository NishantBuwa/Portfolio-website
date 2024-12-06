import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';

function Section5() {
    
    const [isActive,setActive]=useState(false)
    const handleClick=()=>{
        setActive(!isActive)
    }

    const [state, handleSubmit] = useForm("mwpkyakj"); 
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });
    const [showPopover, setShowPopover] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        await handleSubmit(event);
        if (state.succeeded) {
            setShowPopover(true);
            setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
            setTimeout(() => setShowPopover(false), 1000);
        }
    };

    return (
        <div>
            <section id="contact_resume">
                <div className="section5-content">
                    <div className="contact-me">
                        <div className="heading">
                            <div className="both-heading">
                                <h1>LET'S BUILD A</h1>
                                <h1>PROJECT TOGETHER</h1>
                            </div>
                        </div>
                        <div className="contact_form">
                            <form onSubmit={onSubmit}>
                                <label htmlFor="name">
                                    <input
                                        type="text"
                                        placeholder="Full Name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </label>
                                <ValidationError
                                    prefix="Name"
                                    field="name"
                                    errors={state.errors}
                                />
                                <label htmlFor="email">
                                    <input
                                        type="email"
                                        placeholder="Email address"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </label>
                                <ValidationError
                                    prefix="Email"
                                    field="email"
                                    errors={state.errors}
                                />
                                <label htmlFor="phone">
                                    <input
                                        type="tel"
                                        placeholder="Phone Number"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                    />
                                </label>
                                <ValidationError
                                    prefix="Phone"
                                    field="phone"
                                    errors={state.errors}
                                />
                                <label htmlFor="subject">
                                    <input
                                        type="text"
                                        placeholder="Subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                    />
                                </label>
                                <ValidationError
                                    prefix="Subject"
                                    field="subject"
                                    errors={state.errors}
                                />
                                <label htmlFor="message">
                                    <textarea
                                        rows="5"
                                        columns="10"
                                        placeholder="Enter Your Message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                </label>
                                <ValidationError
                                    prefix="Message"
                                    field="message"
                                    errors={state.errors}
                                />
                                <button onClick={handleClick} className={isActive?'active':''} type="submit" disabled={state.submitting}>
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                {showPopover && (
                    <div className="popover">
                        <p>Message Sent ✅</p>
                    </div>
                )}
            </section>
        </div>
    );
}

export default Section5;
