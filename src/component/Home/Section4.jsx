import React from 'react'

function Section4() {

    const my_skills = [
        {
            name: "HTML",
            percentage: "85"
        },
        {
            name: "CSS",
            percentage: "80",
        },
        {
            name: "JavaScript",
            percentage: "75"
        },

        {
            name: "React.JS",
            percentage: "65"
        },
        {
            name: "SQL",
            percentage: "75",
        },
        {
            name: "C++",
            percentage: "85",
        },
    ]

    const calculatePercentage = (percentage) => {
        let a = 360 * percentage / 100;
        return a
    }
    return (
        <div>
            <section id="skills">
                <div className="section4-content">
                    <div className="heading">
                        <h1>SKILLS</h1>
                    </div>
                    <div className="my_container">
                        {my_skills.map((skill, index) => (
                            <div className="skills" key={index} data-aos="slide-left" data-aos-delay="100" data-aos-duration="1000">
                                <div className="text">
                                    <p>{skill.name}</p>
                                </div>
                                <div className="outer"
                                    style={{
                                        background: `conic-gradient(yellow, orange ,red ${calculatePercentage(skill.percentage)}deg,black ${calculatePercentage(skill.percentage)}deg 360deg)`
                                    }}>
                                    <div className="inner">
                                        <div className="number">
                                            <p>{skill.percentage}%</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Section4
