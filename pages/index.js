"use strict";

import React from 'react'

import HeaderSection from "./HeaderSection/HeaderSection.js"
import ContactMeSection from "./ContactMeSection/ContactMeSection.js"
import SkillsSection from "./SkillsSection/SkillsSection.js"
import AboutMeSection from "./AboutMeSection/AboutMeSection.js"

const Index = () => (
	<div>

		<HeaderSection />
		<AboutMeSection />
		<SkillsSection />
		<ContactMeSection />
		
	    <style global jsx>{`
	      	body {
	        	color: black;
	        	font-family: courier;
	      	}
	    `}</style>
	</div>
);

export default Index