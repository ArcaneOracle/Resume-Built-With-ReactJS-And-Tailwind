import './Profile.css';
import profileImage from '../../assets/images/profile.jpg'

function Profile() {
  return (
    <div id="profile" className="profileDiv space-y-6 p-6">
        <h1 className="text-4xl flex justify-center items-center">Deon Justus Bester</h1>
        <h2 className="text-xl flex justify-center items-center">Intern Web Developer</h2>
      <div className="imageDiv flex justify-center items-center">
        <img
          src={profileImage}
          alt="profile"
          className="profilePicture w-52 h-52 rounded-full object-cover border-4 transition-all duration-100 ease-in-out"
        />
      </div>
    </div>
  )
}
export default Profile;