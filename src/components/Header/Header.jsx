const Header = () => {
  return (
    <div className="header flex flex-col justify-center items-center gap-6 h-screen">
      <h2 className="text-7xl font-ubuntu font-normal text-teal-300 capitalize leading-10">
        developer
      </h2>
      <div>
        {/* resume links */}
      </div>
      <div>
        <h1 className="text-white"><p className="text-teal-300">&lt;h1&gt;<span className="text-white">Hi,<br /> I&rsquo;m</span> Sumaiya Sinja,</p> <br />Front-end developer. <br /> <span className="text-teal-300">&lt;/h1&gt;</span></h1>
        <p className="text-teal-300">&lt;p&gt;<span className="text-white">In this ever-evolving world of technology, I am carving my career path and crafting projects with a blend of presence and creativity.</span>&lt;/p&gt;</p>
        <p className="text-teal-500 text-lg font-ibm-mono font-medium capitalize leading-7">let&rsquo;s talk</p>
      </div>
    </div>
  );
};

export default Header;
