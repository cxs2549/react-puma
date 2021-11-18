import { AiOutlineShoppingCart } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Cart = () => {
    return (
        <div className="px-3">
				<Link to="/cart">
                    <AiOutlineShoppingCart size={30} />
                </Link>
			</div>
    )
}

export default Cart
