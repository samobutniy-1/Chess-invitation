export function Header() {
  return (
    <div className="relative h-screen overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ filter: "brightness(0.5)" }}
      >
        <source src="/header.mp4" type="video/mp4" />
      </video>

      <div className="relative z-10 flex flex-col justify-between h-full p-5 text-center">
        <div className="flex flex-col items-center text-gray-200">
          <h1 className="font-black uppercase text-[clamp(40px,5vw,84px)] w-full mb-12 mt-18 ">
            Make your first move
          </h1>

          <a
            href="/"
            className="font-montserrat font-black uppercase text-[clamp(32px,5vw,40px)] border-2 rounded-2xl max-w-xs bg-[#1E1E1E]/75 py-5 px-9 hover:text-black hover:border-black hover:bg-white/75 transition duration-300  xl:max-w-sm "
          >
            Sign up
          </a>
        </div>

        <div className="flex items-center justify-between font-black text-gray-200 uppercase gap-2 text-2xl mb-1">
          <span className="bg-[#1a1a1a]/70 py-3.5 w-full rounded-2xl  text-[clamp(24px,5vw,50px)]">
            Play
          </span>
          <span className="bg-[#1a1a1a]/70 py-3.5 w-full rounded-2xl  text-[clamp(24px,5vw,50px)]">
            Think
          </span>
          <span className="bg-[#1a1a1a]/70 py-3.5 w-full rounded-2xl  text-[clamp(24px,5vw,50px)]">
            Win
          </span>
        </div>
      </div>
    </div>
  );
}
