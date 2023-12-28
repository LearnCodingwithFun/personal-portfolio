import BannerCard from "@/components/BannerCard";
import ProjectCard from "@/components/ProjectCard";
import { ProjectContent } from "@/constant";


const Projects = () => {
  return <div className="mt-[120px]  " >
    <div className="w-full flex justify-center items-center">
      <BannerCard title="Projects" src="white-desk-work-study-aesthetics" />
    </div>


    <div className="flex items-center justify-center w-full flex-wrap  gap-4">
      {
        ProjectContent.map((project) => (
          <ProjectCard key={project.title} name={project.name} title={project.title} image={project.imgUrl} />
        ))
      }

    </div>
  </div>;
};

export default Projects;
