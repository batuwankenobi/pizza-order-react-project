import React from 'react';
import './Head.css'; // Assuming you create this file for styles
import logoImage from '/images/iteration-1-images/logo.svg';

export default function Head() {
    return (
        <div className="head">
            <img className="teknyemekler" src={logoImage} alt="Teknolojik Yemekler" />
        </div>
    );
}
