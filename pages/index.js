"use strict";

import React from 'react'

import HeaderSection from "./HeaderSection/HeaderSection.js"
import ContactMeSection from "./ContactMeSection/ContactMeSection.js"
import SkillsSection from "./SkillsSection/SkillsSection.js"
import AboutMeSection from "./AboutMeSection/AboutMeSection.js"
import HackathonSection from "./HackathonsSection/HackathonSection.js"
import StartupAcceleratorSection from "./StartupAcceleratorSection/StartupAcceleratorSection.js"

const Index = () => (
	<div>
		<HeaderSection />
		<AboutMeSection />
		<SkillsSection />
		<HackathonSection />
		<StartupAcceleratorSection />
		<ContactMeSection />

	    <style global jsx>{`
	      	body {
	        	color: black;
	        	font-family: courier;
	      	}
	    `}
	    </style>
	</div>
);

export default Index