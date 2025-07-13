

const Header = () => {
    return (
        <div className="navbar justify-between">
            <div>
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" > <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul tabIndex="0" className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><a href="">Home</a></li>
                        <li><a href="">Fixture</a></li>
                        <li><a href="">Teams</a></li>
                        <li><a href="">Schedules</a></li>
                        <button className="btn font-bold">
                            <span>0 Coin</span>
                            <img width="20" height="20" src="https://img.icons8.com/color/48/cheap-2--v1.png" alt="cheap-2--v1" />
                        </button>
                    </ul>
                </div>
                <a className="md:flex max-sm:hidden" href="">
                    <img src="/public/assets/logo.png" alt="" />
                </a>
            </div>
            <a className="md:hidden" href="">
                <img className="navbar-end md:hidden h-20 w-20" src="/public/assets/logo.png" alt="" />
            </a>
            <div className="hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-12">
                    <li><a href="">Home</a></li>
                    <li><a href="">Fixture</a></li>
                    <li><a href="">Teams</a></li>
                    <li><a href="">Schedules</a></li>
                    <button className="btn border-2 flex space-x-2.5 font-bold">
                        <span>0 Coin</span>
                        <img width="20" height="20" src="https://img.icons8.com/color/48/cheap-2--v1.png" alt="cheap-2--v1" />
                    </button>
                </ul>
            </div>
        </div>
    );
};

export default Header;