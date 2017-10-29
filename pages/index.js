"use strict";

import React from 'react'

import HeaderSection from "./HeaderSection/HeaderSection.js"
import ContactMeSection from "./ContactMeSection/ContactMeSection.js"
import SkillsSection from "./SkillsSection/SkillsSection.js"

const Index = () => (
	<div>

		<HeaderSection />
		<ContactMeSection />
		<SkillsSection />
		
	    <style global jsx>{`
	      	body {
	        	color: black;
	        	font-family: courier;
	      	}
	    `}</style>
	</div>
);

export default Index