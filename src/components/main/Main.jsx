import React, { useState } from 'react';
import Players from '../players/Players';
import SelectedPlayers from '../selectedPlayers/SelectedPlayers';

const Main = ({coins, handleRemoveCoin}) => {
    const [isAvailable, setIsAvailable] = useState(true);
    const [isSelected, setIsSelected] = useState(false);
    const [selectedPlayers, setSelectedPlayers] = useState([]);

    const handleAvailable = () => {
        setIsAvailable(true);
        setIsSelected(false);
    }
    const handleSelected = () => {
        setIsAvailable(false);
        setIsSelected(true);
    }
    const handleSelectedPlayers = (player) => {
        if (selectedPlayers.length < 6 && player.biddingPrice <= coins) {
            const newSelected = [...selectedPlayers, player];
            setSelectedPlayers(newSelected);
            handleRemoveCoin(player.biddingPrice);
        }
        else{
            alert('Done');
        }

    }



    return (
        <div className='md:mt-20 max-sm:mt-10'>
            <div className='flex justify-between items-center max-sm:px-2'>
                <h1 className='md:text-3xl max-sm:text-lg font-bold'>{isAvailable ? 'Available Players' : `Selected Player (${selectedPlayers.length}/6)`}</h1>
                <div className='flex'>
                    <button onClick={handleAvailable} className={`btn rounded-l-lg rounded-r-none text-base ${isAvailable ? 'bg-yellow-300 font-bold' : ''}`}>Available</button>
                    <button onClick={handleSelected} className={`btn rounded-r-lg rounded-l-none text-base ${isSelected ? 'bg-yellow-300 font-bold' : ''}`}>Selected ({selectedPlayers.length})</button>
                </div>
            </div>
            <div className="mt-8">
                {isAvailable
                    ? <Players handleSelectedPlayers={handleSelectedPlayers} />
                    : <SelectedPlayers selectedPlayers={selectedPlayers} handleAvailable={handleAvailable} />}
            </div>

        </div>
    );
};

export default Main;