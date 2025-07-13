import React, { useState } from 'react';
import Players from '../players/Players';

const Main = () => {
    const [isAvailable, setIsAvailable] = useState(true);
    const [isSelected, setIsSelected] = useState(false);
    const [selectedPlayers, setSelectedPlayers] = useState(0);

    const handleAvailable = () => {
        setIsAvailable(true);
        setIsSelected(false);
    }
    const handleSelected = () => {
        setIsAvailable(false);
        setIsSelected(true);
    }
    const handleSelectedPlayers = () => {
        const newSelected = selectedPlayers + 1;
        setSelectedPlayers(newSelected);
    }

    return (
        <div className='md:mt-20 max-sm:mt-10'>
            <div className='flex justify-between items-center max-sm:px-2'>
                <h1 className='md:text-3xl max-sm:text-lg font-bold'>Available Players</h1>
                <div className='flex'>
                    <button onClick={handleAvailable} className={`btn rounded-l-lg rounded-r-none text-base ${isAvailable ? 'bg-yellow-300 font-bold' : ''}`}>Available</button>
                    <button onClick={handleSelected} className={`btn rounded-r-lg rounded-l-none text-base ${isSelected ? 'bg-yellow-300 font-bold' : ''}`}>Selected ({selectedPlayers})</button>
                </div>
            </div>
            <Players handleSelectedPlayers={handleSelectedPlayers} />
        </div>
    );
};

export default Main;