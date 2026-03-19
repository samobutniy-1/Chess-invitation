export function Header() {
  return (
    <>
      <div className="relative">
        <div className="flex flex-col justify-between h-screen p-5">
          <div className="text-gray relative z-50 flex flex-col text-center items-center">
            <h1 className="font-montserrat font-black uppercase text-[40px] w-full mb-12.5 mt-18">
              Make your first move
            </h1>
            <a
              className="font-montserrat font-black uppercase text-[32px] border-2 rounded-2xl max-w-3xs bg-[#1E1E1E]/75 py-5 px-9 hover:text-black hover:border-black hover:bg-white/75 transition duration-300"
              href="/"
            >
              Sign up
            </a>
          </div>
          <div className="relative z-50 flex items-center justify-between font-black text-gray uppercase gap-2 text-2xl mb-1 text-center">
            <span className="bg-[#1a1a1a]/70 py-3.5 max-w-[136px] w-full rounded-2xl">
              Play
            </span>
            <span className="bg-[#1a1a1a]/70 py-3.5 max-w-[136px] w-full rounded-2xl">
              Think
            </span>
            <span className="bg-[#1a1a1a]/70 py-3.5 max-w-[136px] w-full rounded-2xl">
              Win
            </span>
          </div>
        </div>

        <div>
          <img
            className="absolute inset-0 h-screen w-full object-cover z-0"
            src="/header-bg.png"
            alt="header background"
          />
          <div className="absolute inset-0 bg-black h-screen w-full z-10 opacity-50"></div>
        </div>
      </div>
    </>
  );
}
