import styled from 'styled-components'
import pumaTrac from '../../assets/pumatrac.png'
import { useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import Email from './Email'
import Links from './Links'

const StyledFooter = styled.div.attrs({ className: 'text-white' })`

	.drop-enter {
		max-height: 0;
		opacity: 0;
	}
	.drop-enter-active {
		max-height: 100rem;
		opacity: 1;
		transition: all 500ms ease-in;
	}
	.drop-exit {
		opacity: 1;
		max-height: 100rem;
	}
	.drop-exit-active {
		max-height: 0;
		opacity: 0;
		transition: all 500ms ease-in;
	}

	#container {
		> div {
			border-color: #333335;
		}
		div:last-child {
			border-bottom: none;
		}
		@media (min-width: 768px) {
			#email {
				order: 2;
			}
		}
	}
`

const supportLinks = [
	'customer service',
	'service discount',
	'shipping & delivery',
	'student discount'
]

const aboutLinks = [
	'company',
	'investors',
	'corporate news',
	'sustatinability',
	'press center',
	'careers',
	'#REFORM'
]

const Container = ({ children }) => (
	<div id="container" className="px-6 md:grid md:grid-cols-2">
		{children}
	</div>
)

const Section = ({ children }) => (
	<div className={`px-6 xl:px-0 py-10 border-b flex items-center justify-between`}>{children}</div>
)

const Socials = () => {
	return (
		<div className="max-w-xs text-xl w-full mx-auto md:mx-1 flex justify-between">
			<i className="fa fa-facebook" aria-hidden="true" />
			<i className="fa fa-twitter" aria-hidden="true" />
			<i className="fa fa-instagram" aria-hidden="true" />
			<i className="fa fa-pinterest" aria-hidden="true" />
			<i className="fa fa-youtube" aria-hidden="true" />
		</div>
	)
}

const Trac = () => {
	return (
		<div className="flex gap-3 items-center">
			<img src={pumaTrac} alt="" />
			<p className="text-xs uppercase font-bold">train with the fastest</p>
		</div>
	)
}

const Copy = () => {
	return (
		<div className="flex flex-col gap-3">
			<p className="text-sm">
				&copy; CxS Development for PUMA SE, 2021. All Rights Reserved.
			</p>
			<p className="text-xs text-gray-400 font-medium">Imprint & Legal Data</p>
		</div>
	)
}

const Footer = () => {
	return (
		<StyledFooter className="bg-brandBlack">
			<Container>
				<div className="md:hidden">
					<Section>
						<Email />
					</Section>
				</div>

				<Section id="links">
					<Links supportLinks={supportLinks} aboutLinks={aboutLinks} />
				</Section>

				<div className="hidden md:block w-full border-b">
					<Section>
						<div className="flex flex-col w-full gap-12">
							<Email />
							<Socials />
							<Trac />
						</div>
					</Section>
				</div>

				<div className="md:hidden">
					<Section id="socials">
						<Socials />
					</Section>
				</div>

				<div className="md:hidden">
					<Section id="trac">
						<Trac />
					</Section>
				</div>

				<Section id="copy">
					<Copy />
				</Section>
			</Container>
		</StyledFooter>
	)
}
export default Footer
