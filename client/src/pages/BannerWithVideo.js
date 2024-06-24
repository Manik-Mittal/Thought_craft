import React from 'react';

const BannerWithVideo = () => {
    const bannerStyle = {
        position: 'relative',
        width: '100vw',
        height: '100vh',
        backgroundImage: 'url(../src/pages/images/bg5.jpg)', // Replace with your background image URL
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    const videoStyle = {
        position: 'absolute',
        top: '50%',
        right: '20px', // Adjust as needed
        transform: 'translateY(-50%)',
        width: '35vw', // Adjust as needed
        height: '45vh', // Maintain aspect ratio


        //boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.3)', // Optional: add shadow
        borderRadius: '100px', // Optional: add rounded corners
    };
    const textStyle = {
        position: 'absolute',
        top: '10%', // Adjust as needed
        left: '20px', // Adjust as needed
        color: 'white',
        fontSize: '2rem', // Adjust as needed
        fontWeight: 'bold',
    };

    return (
        <div >
            <video style={videoStyle} autoPlay loop muted >
                <source src="/bgvdo.mp4" type="video/mp4" /> {/* Replace with your video file URL */}

            </video>
            <div style={textStyle}>

            </div>

        </div>
    );
};

export default BannerWithVideo;
