import './Projects.css';
import cataloguePage from '../../assets/images/cataloguePage.png'
import clock from '../../assets/images/clock.png'
import playerRegistrationForm from '../../assets/images/playerRegistrationForm.png'
import backerRegistrationForm from '../../assets/images/backerRegistrationForm.png'
import userRegistrationForm from '../../assets/images/userRegistrationForm.png'
import Card from '../../components/card/Card.jsx';

function Projects() {
  const cardDetails = [
    {
      id: 1,
      name: "Catalogue Page",
      description: "Dragon Ball Z wallpaper catalogue.",
      technologies: [
        "HTML", "CSS", "JavaScript",
      ],
      source: cataloguePage,
      link: "https://github.com/ArcaneOracle/CataloguePage"
    },
    {
      id: 2,
      name: "Auto Updating Clock",
      description: "Real-time updating clock using JavaScript.",
      technologies: [
        "HTML", "CSS", "JavaScript",
      ],
      source: clock,
      link: "https://github.com/ArcaneOracle/Auto-Updating-Clock-using-Vanilla-JavaScript"
    },
    {
      id: 3,
      name: "Player Registration Form",
      description: "Registration form for poker players.",
      technologies: [
        "HTML", "CSS", "TailwindCSS",
      ],
      source: playerRegistrationForm,
      link: "https://github.com/ArcaneOracle/player-registration-form"
    },
    {
      id: 4,
      name: "Backer Registration Form",
      description: "Form for poker match backers.",
      technologies: [
        "HTML", "CSS", "JavaScript",
      ],
      source: backerRegistrationForm,
      link: "https://github.com/ArcaneOracle/backer-registration-form"
    },
    {
      id: 5,
      name: "User Registration Form",
      description: "Basic user registration form.",
      technologies: [
        "HTML", "CSS", "JavaScript",
      ],
      source: userRegistrationForm,
      link: "https://github.com/ArcaneOracle/user-registration-form"
    }
  ]

  return (
    <div id="projects" className="projects text-justify xl:mx-72 xl:my-16 my-8 p-12 space-y-4">
      <h2 className="text-3xl xl:mb-16 mb-8">Projects</h2>
      <div className="projectsCards flex flex-col xl:gap-32 gap-16">
        {cardDetails.map(project => (
          <Card key={project.id} {...project} />
        ))}
      </div>
    </div>
  )
}
export default Projects;