import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { CSSTransition } from 'react-transition-group'

const StyledGoldBand = styled.div`
	background-color: hsl(36.2, 27.4%, 55.6%);
	font-size: 12px;
	font-weight: 400;
	line-height: 18px;
	div {
		width: 290px;
		display: flex;
		justify-content: center;
		p,
		a {
			white-space: nowrap;
		}
	}

	.line-enter {
		opacity: 0;
		position: absolute;
	}
	.line-enter-active {
		opacity: 1;
		transition: opacity 800ms ease-in;
	}

	.line-exit {
		opacity: 1;
	}
	.line-exit-active {
		opacity: 0;
		transition: opacity 800ms ease-in;
	}
`

const copy = [ 'free and easy returns', 'free shipping on orders over $50' ]

const GoldBand = () => {
	const [ isTrue, setIsTrue ] = useState(true)
	useEffect(() => {
		const interval = setInterval(() => {
			setIsTrue(!isTrue)
		}, 4000)
		return () => clearInterval(interval)
	})
	return (
		<StyledGoldBand className=" text-white px-4 w-full h-11 flex items-center gap-3 justify-center uppercase">
			<CSSTransition in={isTrue} timeout={800} classNames="line" unmountOnExit>
				<div className="flex items-center gap-2">
					<p>{copy[0]}</p>
					<a href="/" className="font-semibold underline">
						see details
					</a>
				</div>
			</CSSTransition>
			<CSSTransition in={!isTrue} timeout={800} classNames="line" unmountOnExit>
				<div className="flex items-center gap-2">
					<p>{copy[1]}</p>
					<a href="/" className="font-semibold underline">
						see details
					</a>
				</div>
			</CSSTransition>
		</StyledGoldBand>
	)
}

export default GoldBand
