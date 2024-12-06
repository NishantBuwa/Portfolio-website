import React, { useEffect, useState } from 'react'

function Animation() {

    const [circle1Style, setCircle1Style] = useState({});
    const [circle2Style, setCircle2Style] = useState({});
    const [textStyle, setTextStyle] = useState({});
    const [hasCollided, setHasCollided] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const section2 = document.getElementById('animation-container');
            const section2Top = section2?.offsetTop || 0;
            const section2Height = section2?.offsetHeight || 0;
            const section2Bottom = section2Top + section2Height - 200;

            // Set maxBlurDistance based on viewport width
            const maxBlurDistance = window.innerWidth < 500 ? 130 : 400;

            if (scrollTop >= section2Top && scrollTop < section2Bottom) {
                const scrollPercentage = Math.min(
                    ((scrollTop - section2Top) / section2Height) * 100,
                    100
                );

                const leftPx = (scrollPercentage / 50) * (window.innerWidth / 2);
                const rightPx = window.innerWidth - ((scrollPercentage / 50) * (window.innerWidth / 2));
                const middlePx = (leftPx + rightPx) / 2;
                const distance = Math.abs(leftPx - rightPx);

                // console.log("left: ", leftPx, "right: ", rightPx, "distance: ", distance);

                if (leftPx > rightPx) {
                    setHasCollided(true);
                } else {
                    setHasCollided(false);
                }

                // Calculate blur level
                const blurLevel = Math.max(0, Math.min(100, ((maxBlurDistance - distance) / maxBlurDistance) * 20));

                // Update circle styles
                setCircle1Style({
                    display: 'block',
                    position: 'fixed',
                    top: '50%',
                    left: `${leftPx}px`,
                    transform: 'translate(-50%, -50%)',
                    filter: `blur(${blurLevel}px)`,
                    zIndex: 1
                });

                setCircle2Style({
                    display: 'block',
                    position: 'fixed',
                    top: '50%',
                    right: `${window.innerWidth - rightPx}px`,
                    transform: 'translate(0%, -50%) translate(30px, 0px)',
                    filter: `blur(${blurLevel}px)`,
                    zIndex: 1
                });

                // Update text style only after collision
                if (hasCollided) {
                    setTextStyle({
                        display: 'block',
                        position: 'fixed',
                        top: '50%',
                        left: `${middlePx}px`,
                        transform: 'translate(-50%, -50%)',
                        opacity: 1,
                        filter: `blur(${Math.max(0, blurLevel - 10)}px)`,
                        transition: 'filter 0.3s ease, opacity 0.3s ease',
                        zIndex: 2
                    });
                } else {
                    setTextStyle({
                        display: 'none',
                    });
                }
            } else {
                setCircle1Style({ display: 'none' });
                setCircle2Style({ display: 'none' });
                setTextStyle({ display: 'none' });
                setHasCollided(false);
            }
        };


        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [hasCollided]);

    return (
        <div>
            <section id="animation-container">
                <div className="circles">
                    <div className="circle_1" style={circle1Style}></div>
                    <div className="blur-text" style={textStyle}>Welcome to my Website</div>
                    <div className="circle_2" style={circle2Style}></div>
                </div>
            </section>
        </div>
    );
}

export default Animation;