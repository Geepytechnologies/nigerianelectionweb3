import React from "react";

type Props = {};

const Card = (props: Props) => {
  return (
    <div className="">
      <div className="flex overflow-x-scroll min-h-full sm:grid-cols-2 m-2 sm:grid grid-cols-1 md:grid-cols-3 gap-3">
        <div className="flex flex-col shadow-2xl bg-[white] overflow-hidden">
          <div className="font-[600] font-mont ">emblem</div>
          <img
            src="https://cdn.pmnewsnigeria.com/wp-content/uploads/2022/06/peter-obi-k.jpg"
            alt="candidate"
            className="hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer"
          />
          <p>name</p>
          <p>candidate ID</p>
          <p>address</p>
        </div>
        <div className="flex flex-col bg-[white]">
          <div>emblem</div>
          <img
            src="https://cdn.vanguardngr.com/wp-content/uploads/2020/03/Tinubu-1.jpg"
            alt="candidate"
          />
          <p>name</p>
          <p>candidate ID</p>
          <p>address</p>
        </div>
        <div className="flex flex-col bg-[white]">
          <div>emblem</div>
          <img
            src="https://cdn.vanguardngr.com/wp-content/uploads/2020/03/Tinubu-1.jpg"
            alt="candidate"
          />
          <p>name</p>
          <p>candidate ID</p>
          <p>address</p>
        </div>
        <div className="flex flex-col bg-[white]">
          <div>emblem</div>
          <img
            src="https://cdn.vanguardngr.com/wp-content/uploads/2020/03/Tinubu-1.jpg"
            alt="candidate"
          />
          <p>name</p>
          <p>candidate ID</p>
          <p>address</p>
        </div>
        <div className="flex flex-col bg-[white]">
          <div>emblem</div>
          <img
            src="https://cdn.vanguardngr.com/wp-content/uploads/2020/03/Tinubu-1.jpg"
            alt="candidate"
          />
          <p>name</p>
          <p>candidate ID</p>
          <p>address</p>
        </div>
        <div className="flex flex-col bg-[white]">
          <div>emblem</div>
          <img
            src="https://cdn.vanguardngr.com/wp-content/uploads/2020/03/Tinubu-1.jpg"
            alt="candidate"
          />
          <p>name</p>
          <p>candidate ID</p>
          <p>address</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
