import Everyday from './Everyday/Everyday'
import Explore from './Explore/Explore'
import Hero from './Hero/Hero'

const Home = () => {
	return (
		<div>
			<Hero />
			<div className="">
				<Explore />
				<Everyday />
			</div>
		</div>
	)
}

export default Home
