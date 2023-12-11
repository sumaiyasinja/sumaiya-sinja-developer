const About = () => {
  return (
    <div>
      {/* hero */}
      <h2>About me</h2>
      <div className="flex justify-center items-center gap-9">
        <div className="flex justify-center items-center gap-5"> 
          <p className="roboto text-7xl text-[#4F4F4F] font-bold">4</p>
          <p className="roboto text-3xl text-[#828282]">years of<br />
experience</p>
        </div>
        <div className="flex justify-center items-center gap-5"> 
          <p className="roboto text-7xl text-[#4F4F4F] font-bold">4</p>
          <p className="roboto text-2xl text-[#828282]">Projects Completed <br />
around the world</p>
        </div>
      </div>
      <p></p>
    </div>
  );
};

export default About;
