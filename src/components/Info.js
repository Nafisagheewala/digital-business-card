import profilePic from '../assets/profilePic.jpg';
export default function Info() {
    return (
        <header className="info">
            <img src={profilePic} alt="Profile Pic" className='profile-pic' />
            <h4 className='tagline'>Meet</h4>
            <h3>Nafisa Kayed Johar</h3>
            <h4 className='tagline'>Where coding meets creativity!</h4>
            <h4 className='profession'>Frontend Developer</h4>
            <div className='buttons'>
            <button className="email"><i className="fa-solid fa-envelope email-icon"></i> <span className='email-text'>Email</span></button>
            <button className='linkedin'><i className="fa-brands fa-linkedin linkedin-icon"></i> <span className='linkedin-text'>LinkedIn</span></button>
            </div>
        </header>
    )
}