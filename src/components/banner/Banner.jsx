

const Banner = ({handleAddCoin}) => {
    return (
        <div className="bg-black text-white md:mt-6 md:rounded-3xl">
            <div className="bg-[url(/public/assets/bg-shadow.png)] bg-cover bg-center text-center rounded-3xl ">
                <div className=" lg:px-44 md:py-16 max-sm:py-12 space-y-6">
                    <img className="mx-auto" src="/public/assets/banner-main.png" alt="" />
                    <h1 className="md:text-4xl max-sm:text-2xl font-bold">Assemble Your Ultimate Dream 11 Cricket Team</h1>
                    <p className="text-gray-500 md:text-2xl max-sm:text-lg font-medium">Beyond Boundaries Beyond Limits</p>
                    <div className="border-2 border-yellow-300 p-1 rounded-md mx-auto w-max">
                        <button className="btn bg-yellow-300 text-base" onClick={()=>handleAddCoin(1000)}>Claim Free Credit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;