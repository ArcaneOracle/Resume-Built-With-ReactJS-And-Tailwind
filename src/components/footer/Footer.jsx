import './Footer.css';

function Footer() {
  return (
    <div id="footer" className="flex flex-col items-center my-8 p-8 gap-8">
      <h2 className="text-3xl">Contact Me</h2>
      <div className="flex w-full">
        <a href="mailto:deonbesterpersonal@gmail.com" className="flex-1 text-center">Email</a>
        <a href="tel:0644353618" className="flex-1 text-center">064 435 3618</a>
        <a href="https://github.com/ArcaneOracle" rel="noopener noreferrer" target="_blank" className="flex-1 text-center">ArcaneOracle on GitHub</a>
      </div>
    </div>
  )
}
export default Footer;