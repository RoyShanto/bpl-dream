

const Header = () => {
    return (
        <div className="flex justify-between items-center">
            <img src="/public/assets/logo.png" alt="" />
            <div className="flex space-x-12 text-lg text-gray-500">
                <a href="">Home</a>
                <a href="">Fixture</a>
                <a href="">Teams</a>
                <a href="">Schedules</a>
                <button className="btn border-2 flex space-x-2.5 font-bold">
                    <span>0 Coin</span>
                    <img width="20" height="20" src="https://img.icons8.com/color/48/cheap-2--v1.png" alt="cheap-2--v1"/>
                </button>
            </div>
        </div>
    );
};

export default Header;