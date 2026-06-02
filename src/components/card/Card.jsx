import './Card.css';

function Card({ id, name, description, technologies, source, link }) {
  return (
    <div className="cardMain rounded-sm w-full mx-auto transition-all ease-in-out">
      <div className="card space-y-2 transition-all ease-in-out">
        <div className="w-full items-center flex flex-col transition-all ease-in-out">
          <img src={source} alt="Project Image" className="projectImage w-full h-auto object-cover rounded-sm xl:w-10/12 items-center
           transition-all ease-in-out" />
        </div>
        <h3 className="text-2xl my-4 transition-all ease-in-out">{name}</h3>
        <p className="transition-all ease-in-out">{description}</p>
        <ul className="transition-all ease-in-out">
          Technologies:
          {technologies.map(technology => (
            <li key={technology} className="list-disc ml-8 transition-all ease-in-out">
              {technology}
            </li>
          ))}
        </ul>
        <p className="transition-all ease-in-out">
          View code on GitHub for this project by clicking <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all ease-in-out">here</a>.
        </p>
      </div>
    </div>
  )
}
export default Card;