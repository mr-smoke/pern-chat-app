import { FaSearch } from "react-icons/fa";
import useConversation from "../zustand/useConversation";
import { useState } from "react";
import toast from "react-hot-toast";

const Search = () => {
  const [search, setSearch] = useState("");
  const { setSearchConversations } = useConversation();
  const searchHandler = () => {
    if (!search || search.length <= 3) {
      toast.error("Search must be more than 3 characters");
    }
    if (search.length > 3) {
      setSearchConversations(search);
    }
    setSearch("");
  };

  return (
    <div className="border-b-2 p-4 flex items-center gap-3">
      <input
        className="p-3 rounded-lg bg-slate-700 flex-1 w-full"
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      <button className="rounded-full bg-slate-700 p-3" onClick={searchHandler}>
        <FaSearch className="w-5 h-5" />
      </button>
    </div>
  );
};

export default Search;
