import SelectedPlayer from "../selectedPlayer/SelectedPlayer";


const SelectedPlayers = ({ selectedPlayers, handleAvailable, handleRemovePlayer }) => {
    return (
        <div>
            {
                selectedPlayers.map(selectedPlayer => <SelectedPlayer selectedPlayer={selectedPlayer} handleRemovePlayer={handleRemovePlayer} />)
            }
            <div className="border-2 p-2 w-max rounded-xl">
                <button onClick={handleAvailable} className="btn font-bold text-base bg-yellow-300 rounded-xl">Add More Player</button>
            </div>
        </div>
    );
};

export default SelectedPlayers;