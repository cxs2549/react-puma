import hero from '../../../assets/hero.jpg'
import styled from 'styled-components'

const StyledHero = styled.div`
	display: block;
	position: relative;
	min-height: calc(100vh - 300px);
	max-height: calc(100vh - 300px);
	overflow: hidden;
	text-transform: uppercase;
	img {
		max-height: 100%;
		object-position: center center;
		object-fit: contain;
	}
    #hero {
        position: relative;
        &::after {
            content: '';
            position: absolute;

            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.2);
        }
    }
`

const Hero = () => {
	return (
		<StyledHero>
			<div id="hero">
				<img src={hero} alt="" />
			</div>
			<div className="absolute text-white top-0 left-0 w-full h-full grid place-items-center">
				<div className="flex flex-col items-center justify-center gap-4">
					<h4 className="font-semibold text-lg">holiday starts now</h4>
					<div className="flex flex-col gap-2">
						<h1 className="text-3xl text-center font-bold">
							ADDITIONAL 30% OFF <br /> MARKDOWNS
						</h1>
						<h4 className="font-semibold text-lg text-center leading-6">
							<span className="font-normal">NOW THROUGH 11/18</span> <br />
							<span className="font-normal">CODE:</span> GIFTNOW
						</h4>
					</div>
					<button className="uppercase font-semibold bg-white text-black py-3 px-4 rounded text-sm mt-2">
						shop all holiday deals
					</button>
				</div>
			</div>
		</StyledHero>
	)
}

export default Hero
