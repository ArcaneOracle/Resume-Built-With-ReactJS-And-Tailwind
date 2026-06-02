import './Footer.css';

function Footer() {
  return (
    <div id="footer" className="flex flex-col items-center xl:p-12 p-6 gap-8 transition-all ease-in-out">
      <h2 className="text-3xl transition-all ease-in-out">Contact Me</h2>
      <div className="flex flex-col md:flex-row w-full transition-all ease-in-out">
        <a href="mailto:deonbesterpersonal@gmail.com" className="flex-1 text-center transition-all ease-in-out">Email</a>
        <a href="tel:0644353618" className="flex-1 text-center transition-all ease-in-out">064 435 3618</a>
        <a href="https://github.com/ArcaneOracle"
           rel="noopener noreferrer"
           target="_blank"
           className="flex-1 text-center transition-all ease-in-out">ArcaneOracle on GitHub</a>
      </div>
    </div>
  )
}
export default Footer;