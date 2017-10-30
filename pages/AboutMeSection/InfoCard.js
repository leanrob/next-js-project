import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const InfoCard = () => (
	<Card>
		<Image src='http://i2.wp.com/leanrob.com/wp-content/uploads/2015/09/robert-byrne-pitch-blur-small.png?zoom=2&w=1080' />
		<Card.Content>
			<Card.Header>
				Rob Byrne
			</Card.Header>
			<Card.Meta>
        <span className='date'>
          Joined in 1988
        </span>
			</Card.Meta>
			<Card.Description>
				A software developer living in Vancouver, BC.
			</Card.Description>
		</Card.Content>
		<Card.Content extra>
			<a>
				<Icon name='user' />
				420 Friends
			</a>
		</Card.Content>
	</Card>
);

export default InfoCard