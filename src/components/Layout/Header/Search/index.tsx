import Image from "next/image"
import SearchIcon from '../../../../../public/assets/icons/search-icon.svg'

const Search = () => {
    return (
        <form className="flex items-center ml-8">
            <input 
                type="text" 
                placeholder="Kategori | Lokasi"
                className="border border-50 px-4 py-3 rounded-l-md text-sm text-gray-50" 
            />
            <button
                className="flex justify-center items-center bg-blue-100 border border-blue-100 text-white text-sm rounded-r-md h-[46px] w-[46px]"
                type="submit" 
            >
                <Image 
                    src={SearchIcon}
                    alt="search-icon"
                    height="24px"
                    width="24px"
                />
            </button>
        </form>
    )
}

export default Search