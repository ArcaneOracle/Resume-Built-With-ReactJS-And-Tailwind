import './NavBar.css'

function NavBar() {
  return (
    <div id="navbar" className="navBarDiv sticky top-0 z-50">
      <nav className="navBar flex items-center justify-between py-4 md:px-8 transition-all duration-100 ease-in-out space-x-2 px-2">
        <a href="#profile" className="transition-all duration-100 ease-in-out text-center">Profile</a>
        <a href="#aboutMe" className="transition-all duration-100 ease-in-out text-center">About Me</a>
        <a href="#skills" className="transition-all duration-100 ease-in-out text-center">Skills</a>
        <a href="#education" className="transition-all duration-100 ease-in-out text-center">Education</a>
        <a href="#experience" className="transition-all duration-100 ease-in-out text-center">Experience</a>
        <a href="#projects" className="transition-all duration-100 ease-in-out text-center">Projects</a>
        <a href="#footer" className="transition-all duration-100 ease-in-out text-center">Contact Me</a>
      </nav>
    </div>
  )
}

export default NavBar