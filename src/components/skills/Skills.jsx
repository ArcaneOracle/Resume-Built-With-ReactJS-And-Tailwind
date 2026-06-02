import './Skills.css';

function Skills() {
  return (
    <div id="skills" className="skills text-justify xl:mx-72 my-8 p-12 space-y-4">
      <h2 className="text-3xl">Skills</h2>
      <div>
        <h3 className="text-xl">Technical Skills</h3>
        <ul>
          <li className="list-disc ml-6">HTML</li>
          <li className="list-disc ml-6">CSS, BootStrapCSS, TailwindCSS</li>
          <li className="list-disc ml-6">JavaScript, ReactJS</li>
          <li className="list-disc ml-6">Front-end Website Development</li>
          <li className="list-disc ml-6">Responsive Web Design</li>
        </ul>
      </div>
      <div>
        <h3 className="text-xl">Tools</h3>
        <ul>
          <li className="list-disc ml-6">Git</li>
          <li className="list-disc ml-6">VS Code</li>
          <li className="list-disc ml-6">Sublime Text</li>
          <li className="list-disc ml-6">WebStorm</li>
          <li className="list-disc ml-6">Warp</li>
        </ul>
      </div>
      <div>
        <h3 className="text-xl">Strengths</h3>
        <p>Strong analytical thinking and problem-solving skills with a focus on understanding front-end
          development deeply.</p>
      </div>
    </div>
  )
}
export default Skills;