import React from "react";
import Logo from "@/components/Logo";
import { Search, X } from "lucide-react";

const SearchModal = ({ isSearchFormActive, onClose }) => {
  return (
    <div
      className={`${
        isSearchFormActive ? "translate-y-0" : "-translate-y-full"
      } absolute z-[100] top-0 left-0 text-white font-prata w-full bg-black px-[50px] py-[50px] transition-transform duration-300`}
    >
      <div className="flex flex-col md:flex-row items-center gap-[30px] md:gap-[120px] w-full max-w-[1300px] mx-auto">
        <Logo color="light" className="w-[100px] md:w-[200px]" />

        <form className="w-full h-[45px] relative">
          <input
            type="text"
            placeholder="Search Your Product"
            className="border-0 outline-0 bg-zinc-900 pl-[20px] pr-[60px] w-full h-full placeholder:!text-zinc-500 rounded-[5px]"
            style={{
              fontSize: "15px",
            }}
          />
          <button
            type="submit"
            className="absolute top-0 right-0 w-[50px] h-full bg-zinc-800 flex items-center justify-center !rounded-r-[5px]"
          >
            <Search size={20} className="text-white" />
          </button>
        </form>
      </div>

      <button
        onClick={onClose}
        className="absolute top-[10px] right-[10px] p-[5px] hover:text-red-400 transition-colors"
      >
        <X />
      </button>
    </div>
  );
};

export default SearchModal;
