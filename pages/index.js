import HeaderSection from "./HeaderSection.js"
import ContactMeSection from "./ContactMeSection/ContactMeSection.js"

const Index = () => (
	<div>

		<HeaderSection />
		<ContactMeSection />
		
	    <style global jsx>{`
	      body {
	        color: black;
	        font-family: courier;
	      }
	    `}</style>
	</div>
)

export default Index