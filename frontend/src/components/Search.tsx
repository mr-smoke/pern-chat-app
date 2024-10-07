import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <div className="border-b-2 p-4 flex items-center gap-3">
      <input
        className="p-3 rounded-lg bg-slate-700 flex-1"
        type="text"
        placeholder="Search..."
      />
      <button className="rounded-full bg-slate-700 p-3">
        <FaSearch className="w-5 h-5" />
      </button>
    </div>
  );
};

export default Search;
