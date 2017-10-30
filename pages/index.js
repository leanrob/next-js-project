"use strict";

import React from 'react'
import { Button } from 'semantic-ui-react'

import HeaderSection from "./HeaderSection/HeaderSection.js"
import ContactMeSection from "./ContactMeSection/ContactMeSection.js"
import SkillsSection from "./SkillsSection/SkillsSection.js"
import AboutMeSection from "./AboutMeSection/AboutMeSection.js"
import HackathonSection from "./HackathonsSection/HackathonSection.js"
import StartupAcceleratorSection from "./StartupAcceleratorSection/StartupAcceleratorSection.js"

const Index = () => (
	<div>
		<Button
			color='red'
			content='Like'
			icon='heart'
			label={{ basic: true, color: 'red', pointing: 'left', content: '2,048' }}
		/>
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
		<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"></link>
	</div>
);

export default Index