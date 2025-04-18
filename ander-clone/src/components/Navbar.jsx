import React from "react";

function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full px-6 py-4 flex justify-between items-center z-999">
      <div className="text-lg font-bold uppercase tracking-wide">Ander</div>
      <div className="text-sm uppercase tracking-widest cursor-pointer">
        Menu
      </div>
    </nav>
  );
}

export default Navbar;
