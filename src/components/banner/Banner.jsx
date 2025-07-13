

const Banner = ({handleAddCoin}) => {
    return (
        <div className="bg-black text-white mt-6 rounded-3xl">
            <div className="bg-[url(/public/assets/bg-shadow.png)] bg-cover bg-center text-center rounded-3xl ">
                <div className=" px-44 py-16 space-y-6">
                    <img className="mx-auto" src="/public/assets/banner-main.png" alt="" />
                    <h1 className="text-4xl font-bold">Assemble Your Ultimate Dream 11 Cricket Team</h1>
                    <p className="text-gray-500 text-2xl font-medium">Beyond Boundaries Beyond Limits</p>
                    <div className="border-2 border-yellow-300 p-1 rounded-md mx-auto w-max">
                        <button className="btn bg-yellow-300" onClick={()=>handleAddCoin(1000)}>Claim Free Credit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;