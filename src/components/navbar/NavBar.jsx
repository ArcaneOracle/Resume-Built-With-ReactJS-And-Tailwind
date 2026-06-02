import './NavBar.css'
import profileImage from '../../assets/images/profile.jpg'

function NavBar() {
  return (
    <div id="navbar" className="navBarDiv sticky top-0 z-50 w-full h-fit bg-black/30 backdrop-blur-2xl">
      <nav className="navBar flex items-center transition-all ease-in-out space-x-2 p-2 flex-wrap h-fit align-middle">
        <a href="#profileImage" className="imageDiv flex justify-center items-center transition-all ease-in-out text-center">
          <img
            id="profileImage"
            src={profileImage}
            alt="Profile Image"
            className="profilePicture w-8 h-8 rounded-full object-cover border-2 transition-all ease-in-out"
          />
        </a>
        <a href="#profile" className="transition-all ease-in-out text-center">Profile</a>
        <a href="#aboutMe" className="transition-all ease-in-out text-center">About Me</a>
        <a href="#skills" className="transition-all ease-in-out text-center">Skills</a>
        <a href="#education" className="transition-all ease-in-out text-center">Education</a>
        <a href="#experience" className="transition-all ease-in-out text-center">Experience</a>
        <a href="#projects" className="transition-all ease-in-out text-center">Projects</a>
        <a href="#footer" className="transition-all ease-in-out text-center">Contact Me</a>
      </nav>
    </div>
  )
}

export default NavBar