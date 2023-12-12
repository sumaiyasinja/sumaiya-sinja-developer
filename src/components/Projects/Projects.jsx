import { Link } from "react-router-dom";
import img1 from '../../assets/images/newspaper-fe849.web.app_.png'
import img2 from '../../assets/images/assignment11-70459.web.app_ (1).png'
import img3 from  '../../assets/images/event-management-teamsinja.web.app_.png'


const Projects = () => {
  return (
    <div>
      {/* slider */}
      {/* screenshot,details,live,codelinks */}
      <div className="carousel w-full">
  <div id="item1" className="carousel-item w-full relative">

    <img src={img1} alt="project" className="w-full" />
    <p className="absolute top-1/2 left-1/2 text-3xl font-bold bg-teal-500 w-full px-20 py-20 text-white -translate-x-1/2 -translate-y-1/2"> Online Newspaper</p>
  </div> 
  <div id="item2" className="carousel-item w-full relative">
    <img src={img2} alt="project"  className="w-full" />
    <p className="absolute top-1/2 left-1/2 text-3xl font-bold bg-teal-500 w-full px-20 py-20 text-white -translate-x-1/2 -translate-y-1/2"> Pet care services  </p>

  </div> 
  <div id="item3" className="carousel-item w-full relative">
    <img src={img3} alt="project"  className="w-full" />
    <p className="absolute top-1/2 left-1/2 text-3xl font-bold  bg-teal-500 w-full px-20 py-20 text-white -translate-x-1/2 -translate-y-1/2"> Event manaement </p>

  </div> 
 
</div> 
<div className="flex justify-center w-full py-2 gap-2">
  <a href="#item1" className="btn btn-xs">1</a> 
  <a href="#item2" className="btn btn-xs">2</a> 
  <a href="#item3" className="btn btn-xs">3</a> 
</div>
    </div>
  );
};

export default Projects;
