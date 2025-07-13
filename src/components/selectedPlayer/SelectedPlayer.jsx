

const SelectedPlayer = ({selectedPlayer, handleRemovePlayer}) => {
    const {name, battingStyle} = selectedPlayer;
    return (
        <div className="flex justify-between items-center border-2 border-gray-200 p-6 rounded-xl mb-6">
            <div className="flex items-center space-x-6">
                <img className="h-30 rounded-2xl" src="/public/assets/Shakib-Al-Hasan.jpg" alt="" />
                <div>
                    <h3 className="font-semibold text-2xl">{name}</h3>
                    <p className="text-base text-gray-500 pt-3">{battingStyle}</p>
                </div>
            </div>
            <a onClick={()=>handleRemovePlayer(selectedPlayer)}><img width="50" height="50" src="https://img.icons8.com/plasticine/100/filled-trash.png" alt="filled-trash"/></a>
        </div>
    );
};

export default SelectedPlayer;