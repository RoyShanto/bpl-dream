

const Player = ({ player, handleSelectedPlayers }) => {
    const {name, image, country, role, battingStyle, bowlingStyle, biddingPrice } = player;
    return (
        <div className="border-2 border-gray-200 p-6 rounded-lg">
            <img className="rounded-lg w-full" src={image} alt="" />
            <div className="flex items-center mt-6 space-x-4">
                <img width="30" height="30" src="https://img.icons8.com/puffy-filled/32/user.png" alt="user" />
                <h3 className="font-semibold text-xl">{name}</h3>
            </div>
            <div className="flex justify-between mt-4">
                <div className="flex items-center space-x-3">
                    <img width="30" height="30" src="https://img.icons8.com/color/48/flag--v1.png" alt="flag--v1" />
                    <p className="text-base text-gray-400">{country}</p>
                </div>
                <p className="px-4 py-2 bg-stone-100 rounded-md">{role}</p>
            </div>
            <hr className="border-gray-200 my-4" />
            <h4 className="font-bold text-base">Rating</h4>
            <div className="flex justify-between mt-4">
                <h4 className="font-semibold text-base">{battingStyle}</h4>
                <p className="text-gray-500 text-base">{bowlingStyle}</p>
            </div>
            <div className="flex justify-between items-center mt-3">
                <h4 className="font-semibold text-base">Price: ${biddingPrice}</h4>
                <button onClick={() => handleSelectedPlayers(player)} className="btn text-sm">Choose Player</button>
            </div>
        </div>
    );
};

export default Player;