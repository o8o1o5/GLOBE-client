import { FaSearch } from "react-icons/fa";

export default function Search() {
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("asdf");
  };

  return (
    <div className="w-full lg:w-9/12 " onSubmit={onSubmit}>
      <form className="flex items-center p-1 rounded-xl bg-gradient-to-r from-blue-400 to-purple-400">
        <input
          className="pl-4 text-lg focus:outline-none w-full font-notosanskr p-2 rounded-lg"
          placeholder="To the globe 😎 !"
        ></input>
        <button type="submit">
          <FaSearch className="mr-2 ml-3 w-8 h-8 text-white"></FaSearch>
        </button>
      </form>
    </div>
  );
}
