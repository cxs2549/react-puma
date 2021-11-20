import everyday from '../../../assets/card.png'
const Everyday = () => {
    return (
        <div className="md:flex">
            <img src={everyday} alt="" className="w-full md:w-7/12" />
            <div className="bg-black text-white pt-5 pb-12 flex flex-col items-center justify-center gap-3 uppercase md:w-5/12">
                <h2 className="text-xl font-semibold text-center">everyday favorites</h2>
                <p className="text-center">on point. over and over again.</p>
                <button className="uppercase bg-white text-black px-5 py-3 mt-2 text-sm font-bold">shop now</button>
            </div>
        </div>
    )
}

export default Everyday
