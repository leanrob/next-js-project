"use strict";

import React from 'react'

import AboutMeSectionStyle from "../../styles/aboutMeSection.style.js"
import InfoCard from "./InfoCard.js";

const AboutMeSection = () => (
	<div className="aboutMe-section">
		<h1>About Me</h1>
		<AboutMeSectionStyle/>
		<InfoCard />
	</div>
);

export default AboutMeSection