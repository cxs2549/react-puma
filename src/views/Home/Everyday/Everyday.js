import everyday from '../../../assets/everyday.png'
const Everyday = () => {
    return (
        <div>
            <img src={everyday} alt="" />
            <div className="bg-black text-white pt-5 pb-12 grid place-items-center gap-3 uppercase">
                <h2 className="text-xl font-semibold">everyday favorites</h2>
                <p cn>on point. over and over again.</p>
                <button className="uppercase bg-white text-black px-5 py-3 mt-2 text-sm font-bold">shop now</button>
            </div>
        </div>
    )
}

export default Everyday
