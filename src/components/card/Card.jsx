import './Card.css';

function Card({ id, name, description, technologies, source, link }) {
  return (
    <div className="cardMain rounded-sm">
      <div className="card space-y-2">
        <img src={source} alt="Project Image" className="projectImage rounded-sm" />
        <h3 className="text-2xl my-4">{name}</h3>
        <p>{description}</p>
        <ul>
          Technologies:
          {technologies.map(technology => (
            <li key={technology} className="list-disc ml-8">
              {technology}
            </li>
          ))}
        </ul>
        <p>View code on GitHub for this project by clicking <a href={link} target="_blank" rel="noopener noreferrer">here</a>.</p>
      </div>
    </div>
  )
}
export default Card;