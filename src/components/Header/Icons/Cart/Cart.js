import { AiOutlineShoppingCart } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Cart = () => {
    return (
        <div className="w-10 h-10 flex items-center justify-center">
				<Link to="/cart">
                    <AiOutlineShoppingCart size={30} />
                </Link>
			</div>
    )
}

export default Cart
