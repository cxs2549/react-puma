import Burger from './Burger/Burger'
import Cart from './Cart/Cart'
import Chat from './Chat/Chat'
import Search from './Search/Search'
import Searchbar from './Searchbar/Searchbar'
import User from './User/User'
import Wishlist from './Wishlist/Wishlist'

const Icons = ({ links }) => {
	return (
		<div className="flex items-center gap-4 pr-3 xl:pr-5">
			<Searchbar />
			<Search />
			<Chat />
			<Wishlist />
			<Cart />
			<User />
			<Burger links={links} />
		</div>
	)
}

export default Icons
