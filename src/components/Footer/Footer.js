import styled from 'styled-components'
import pumaTrac from '../../assets/pumatrac.png'
const StyledFooter = styled.div.attrs({ className: 'text-white' })`

    background-color: hsl(0, 0%, 11.5%);
`
const Footer = () => {
	return (
		<StyledFooter>
			<div className="max-w-7xl mx-auto">
				<div className="border-t border-gray-800 px-6 py-10 text-xl flex items-center justify-between max-w-xs mx-auto">
					<i className="fa fa-facebook" aria-hidden="true"></i>
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                    <i className="fa fa-pinterest" aria-hidden="true"></i>
                    <i className="fa fa-youtube" aria-hidden="true"></i>
				</div>
				<div className="border-t border-gray-800 px-6 py-10 text-xl flex gap-8  items-center">
					<img src={pumaTrac} alt="" />
                    <p className="text-xs uppercase font-bold">train with the fastest</p>
				</div>
				<div className="border-t border-gray-800 px-6 py-10">
					<div className="flex flex-col gap-3">
						<p className="text-sm">
							&copy; CxS Development for PUMA SE, 2021. All Rights Reserved.
						</p>
						<p className="text-xs text-gray-400 font-medium">Imprint & Legal Data</p>
					</div>
				</div>
			</div>
		</StyledFooter>
	)
}
export default Footer
