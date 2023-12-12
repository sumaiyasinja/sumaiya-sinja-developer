
const Skills = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-7xl font-bold text-center py-7 my-9 text-gray-500">Technologies</h1>
      {/* <p>something</p> */}
      {/* icons */}
      <div className="my-9 mx-auto px-20">
        <h2>Languages</h2>
        <ul className="list-disc grid justify-around items-center grid-cols-5 ">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>ReactJs</li>
          <li>Tailwind CSS</li>
          <li>Bootstrap</li>
          <li>Mongodb</li>
          <li>Nodejs</li>
          <li>Expressjs</li>
        </ul>
      </div>
      <h2 className="text-7xl font-bold text-center py-7 my-9 text-gray-500">Additional technologies and skills</h2>
      <ul className="list-disc grid mx-auto px-20 justify-around items-center grid-cols-5 mb-32 ">
        <li>Git</li>
        <li>problem solving</li>
        <li>Teamwork</li>
        <li>B2 english</li>
        <li>Engagement</li>
        <li>Quick learning</li>
      </ul>
    </div>
  );
};

export default Skills;
