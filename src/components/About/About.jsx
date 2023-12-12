const About = () => {
  return (
    <div className="border rounded-xl space-y-6">
      {/* hero */}
      <h2 className="text-7xl text-[#4F4F4F] font-bold text-center">Experience</h2>
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
      <div className="flex justify-center items-center gap-5  "> 
          {/* <p className="roboto text-7xl text-[#4F4F4F] font-bold">4</p> */}
          <ul className="roboto text-2xl text-[#828282] list-disc ">
<li>            I have work with some personal project and web development course assignment. <br />
</li>
<li>I am with coding for 4 years</li>
</ul>
        </div>    </div>
  );
};

export default About;
