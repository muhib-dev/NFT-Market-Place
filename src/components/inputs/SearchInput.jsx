import { SearchIcon } from "../../assets/icons";

const SearchInput = ({ containerClass = "" }) => {
  return (
    <div className={`relative ${containerClass}`}>
      <input
        type="text"
        className="block w-full py-2.5 px-8 text-base text-gray-900 transition duration-300 ease-in-out border border-[#EFEFEF] rounded-3xl focus:border-brand-500 focus:outline-none"
        placeholder="Search"
      />
      <div className="absolute inset-y-0 right-5 flex items-center pl-3 pointer-events-none">
        <SearchIcon />
        <span className="sr-only">Search icon</span>
      </div>
    </div>
  );
};

export default SearchInput;
