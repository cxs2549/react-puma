import { BiSearch } from 'react-icons/bi'
import { useState, useRef } from 'react'
import Menu from '../Burger/Menu'
import useOnClickOutside from 'use-onclickoutside'
import { CSSTransition } from 'react-transition-group'
import styled from 'styled-components'
import { GrClose } from 'react-icons/gr'

const StyledSearch = styled.div`
	.search-enter {
		opacity: 0;
	}
	.search-enter-active {
		opacity: 1;
		transition: all 500ms ease-in-out;
	}
	.search-exit {
		opacity: 1;
	}
	.search-exit-active {
		opacity: 0;
		transition: all 500ms ease-in-out;
	}
	.fade-enter {
		opacity: 0;
	}
	.fade-enter-active {
		opacity: 1;
		transition: all 500ms ease-in-out;
	}
	.fade-exit {
		opacity: 1;
	}
	.fade-exit-active {
		opacity: 0;
		transition: all 500ms ease-in-out;
	}

	.card {
		h3 {
			font-size: 16px;
			font-weight: 400;
			line-height: 24px;
		}
		h4 {
			font-size: 15px;
		}
		&:hover > * {
			text-decoration: underline;
			cursor: pointer;
		}
	}
`

const Search = () => {
	const [ open, setOpen ] = useState(false)
	const searchRef = useRef(null)
	const handleOpen = () => {
		setOpen(!open)
	}
	useOnClickOutside(searchRef, () => setOpen(false))
	const closeOrSearch = () => {
		if (open) {
			return <GrClose size={27} onClick={handleOpen} />
		} else {
			return <BiSearch size={30} onClick={handleOpen} />
		}
	}
	return (
		<StyledSearch className="px-1" ref={searchRef}>
			<div className="cursor-pointer mt-0.5">
				{open ? (
					<GrClose size={27} onClick={handleOpen} />
				) : (
					<BiSearch size={30} onClick={handleOpen} />
				)}
			</div>
			<CSSTransition in={open} timeout={500} classNames="search" unmountOnExit>
				<Menu bg="#F4F4F4">
					<div className="relative max-w-xs mx-auto mb-4">
						<input
							id="searchInput"
							type="search"
							placeholder="Search PUMA.com"
							className="py-3 w-full pl-12 rounded shadow-sm text-gray-700 focus:shadow-xl focus:outline-none"
						/>
						<div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-700">
							<i class="fa fa-search" aria-hidden="true" />
						</div>
					</div>
					<div className="bg-white text-gray-800 opacity-90 py-4 px-4 flex flex-col gap-4">
						<div className="card border p-8 flex gap-4 items-start">
							<div className="text-4xl">
								<i className="fa fa-qrcode" aria-hidden="true" />
							</div>
							<div>
								<h3 className="uppercase">inside a puma store?</h3>
								<h4>Scan your QR code to add products to your cart.</h4>
							</div>
						</div>
						<div className="card border p-8 flex gap-4 items-start">
							<div className="text-4xl">
								<i className="fa fa-barcode" aria-hidden="true" />
							</div>
							<div>
								<h3 className="uppercase">scan barcode</h3>
								<h4>Hold your camera up to a PUMA product and scan the barcode.</h4>
							</div>
						</div>
					</div>
				</Menu>
			</CSSTransition>
		</StyledSearch>
	)
}

export default Search
