import { appleImg, bagImg, searchImg } from '../utils'
import { navLists } from "../constants"

const Navbar = () => {
    return (
        <header className="w-full py-5 px-5 sm:px-10 flex justify-between items-center">
            <nav className="flex w-full screen-max-width">
                <img src={appleImg} width={14} height={18} />
            </nav>

            <div className="flex flex-1 justify-center max-sm:hidden">
                {navLists.map((nav, index) =>
                    <div key={index} className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all">
                        {nav}
                    </div>
                )}
            </div>
            <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
                <img src={searchImg} className="cursor-pointer" width={24} height={24} />
                <img src={bagImg} className="cursor-pointer" width={24} height={24} />
            </div>
        </header>
    )
}

export default Navbar
