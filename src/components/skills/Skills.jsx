import './Skills.css';

function Skills() {
  return (
    <div id="skills" className="skills text-justify xl:mx-72 xl:p-12 p-6 space-y-4 transition-all ease-in-out">
      <h2 className="text-3xl transition-all ease-in-out">Skills</h2>
      <div className="transition-all ease-in-out">
        <h3 className="text-xl transition-all ease-in-out">Technical Skills</h3>
        <ul>
          <li className="list-disc ml-6 transition-all ease-in-out">HTML</li>
          <li className="list-disc ml-6 transition-all ease-in-out">CSS, BootStrapCSS, TailwindCSS</li>
          <li className="list-disc ml-6 transition-all ease-in-out">JavaScript, ReactJS</li>
          <li className="list-disc ml-6 transition-all ease-in-out">Front-end Website Development</li>
          <li className="list-disc ml-6 transition-all ease-in-out">Responsive Web Design</li>
        </ul>
      </div>
      <div className="transition-all ease-in-out">
        <h3 className="text-xl transition-all ease-in-out">Tools</h3>
        <ul>
          <li className="list-disc ml-6 transition-all ease-in-out">Git</li>
          <li className="list-disc ml-6 transition-all ease-in-out">VS Code</li>
          <li className="list-disc ml-6 transition-all ease-in-out">Sublime Text</li>
          <li className="list-disc ml-6 transition-all ease-in-out">WebStorm</li>
          <li className="list-disc ml-6 transition-all ease-in-out">Warp</li>
        </ul>
      </div>
      <div className="transition-all ease-in-out">
        <h3 className="text-xl transition-all ease-in-out">Strengths</h3>
        <p className="transition-all ease-in-out">
          Strong analytical thinking and problem-solving skills with a focus on understanding front-end
          development deeply.</p>
      </div>
    </div>
  )
}
export default Skills;