import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import burgerexpress from '../../Assets/burgerexpress.png'
import bmi from '../../Assets/BMI.png'
import loan from '../../Assets/Loan.png'
import rgb from '../../Assets/RGB.png'
import widget from '../../Assets/widget-2.png'
import credit_card from '../../Assets/credit_card.png'
import profile_card from '../../Assets/profile-card.png'
import quote_generator from '../../Assets/quote-generator.png'
import weather_app from '../../Assets/weather-app.png'


const rotateToMouse = (e, card) => {
    const bounds = card.getBoundingClientRect();
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const leftX = mouseX - bounds.x;
    const topY = mouseY - bounds.y;
    const center = {
        x: leftX - bounds.width / 2,
        y: topY - bounds.height / 2
    };


    card.querySelector('.glow').style.backgroundImage = `
        radial-gradient(
            circle at
            ${center.x * 2 + bounds.width / 2}px
            ${center.y * 2 + bounds.height / 2}px,
            #ffffff55,
            #0000000f
        )
    `;
};

const handleMouseMove = (card) => (e) => rotateToMouse(e, card);

const handleMouseEnter = (e) => {
    const card = e.currentTarget;
    card.mouseMoveHandler = handleMouseMove(card);
    document.addEventListener('mousemove', card.mouseMoveHandler);
};

const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    document.removeEventListener('mousemove', card.mouseMoveHandler);

    // Reset transformations and styles
    card.style.transform = '';
    const glowElement = card.querySelector('.glow');
    if (glowElement) {
        glowElement.style.backgroundImage = '';
    }
};


const Card = ({ name, link, description, tags, pic }) => {
    return (
        <div className="card"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            data-aos="flip-left" data-aos-delay="200" data-aos-duration="100"
        >
            <div
                className="card-img-top"
                style={{
                    backgroundImage: `url(${pic})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat",
                    padding: "0px 0px 0px 0px",
                    margin: "0px 0px 0px 0px",
                    boxSizing: "border-box"
                }}
            ></div>
            <div className="card-body">
                <p className="card-title" style={{ color: "white" }}>{name}</p>
                <p className="card-text">
                    {description}
                </p>
                <a href={link} target="_blank" className="btn btn-primary" style={{ cursor: "pointer" }}>
                    See Live Project
                </a>
                <p className="tags">{tags}</p>
            </div>
            <div className="glow"></div>
        </div>
    )
}

function Section2() {

    const CardData = [
        {
            heading: "A Profile Card",
            description: "A simple and clean profile card layout displaying user information like name, profile photo and social media handles.",
            link: "https://project-cardfolio.netlify.app/",
            tags: "#HTML #CSS",
            pic: profile_card
        },
        {
            heading: "Credit Card Display",
            description: " A UI design showcasing a credit card with details like cardholder name, number, and expiration date.",
            link: "https://creditsphere.netlify.app/",
            tags: "#HTML #CSS",
            pic: credit_card
        },
        // {
        //     heading: "Landing Page",
        //     description: "A Single-page static hospital website featuring sections or services, doctors, and patient appointments.",
        //     link: "https://hospital-landing-page-ui.netlify.app/",
        //     tags: "#HTML #CSS",
        //     pic: hospital
        // },
        {
            heading: "BMI calculator",
            description: "A tool that calculates Body Mass Index based on user input of height and weight, with instant results displayed.",
            link: "https://bmi-calculator-0110.netlify.app/",
            tags: "#HTML #CSS #JS",
            pic: bmi
        },
        {
            heading: "RGB Color Generator",
            description: "Generates random RGB color codes with live background color changes.",
            link: "https://color-generator-0110.netlify.app/",
            tags: "#HTML #CSS #JS",
            pic: rgb
        },
        {
            heading: "Time-Date Widget",
            description: " A simple widget that displays the current time and date, updating in real-time.",
            link: "https://time-date-widget.netlify.app/",
            tags: "#HTML #CSS #JS",
            pic: widget
        },
        {
            heading: "Loan Calculator",
            description: "A calculator that computes loan payments based on principal, interest rate, and term.",
            link: "https://loan-calculator-0110.netlify.app/",
            tags: "#HTML #CSS #JS",
            pic: loan
        },
        {
            heading: "Quote Generator",
            description: "A web app that generates random inspirational quotes at the click of a button.",
            link: "https://quote-generator-app-01.netlify.app/",
            tags: "#React #CSS",
            pic: quote_generator
        },
        {
            heading: "Weather App",
            description: "A weather forecast app that fetches real-time weather data for a user's location.",
            link: "https://weather-0110.netlify.app/",
            tags: "#React #CSS",
            pic: weather_app
        },
        {
            heading: "BurgerExpress",
            description: " A restaurant web app where users can add burger items to their cart from the menu and view them in the cart.",
            link: "https://burgerexpresscom.netlify.app/",
            tags: "#React #JS",
            pic: burgerexpress
        }
    ]

    return (
        <div>
            <section id="projects">
                <div className="section2-content">
                    <div className="heading">
                        <h1>PROJECTS</h1>
                    </div>
                    <div className="my_container">
                        {CardData.map((cardData, index) => (
                            <Card
                                key={index}
                                name={cardData.heading}
                                description={cardData.description}
                                tags={cardData.tags}
                                link={cardData.link}
                                pic={cardData.pic}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Section2
