import './body.css'
import zoro from '../assets/Rr.jpg'
import CustomButton from '../myComponents/CustomButton'

function Body(props){
    return (
        <>
            <div className="body-main">
                <div className="intro">
                    <span>Hello, I am</span>
                    <code><h1>SUS</h1></code>
                    <h3>DESIGNER</h3>
                    <p>In the story, Zoro is the first crewmate to join Monkey D. Luffy's crew after he is saved (by Luffy and Koby) from being executed at the Marine Base by Captain Morgan. He is the crew's combatant,[4] and one of the two swordsmen of the Straw Hat Pirates, the other being Brook. He is also known as the vice-captain of the Straw Hat Pirates as he was the 1st to join the Straw Hat Pirates and he is the second strongest member of the crew after Luffy(Captain). </p>
                    <div className='action'>
                        <CustomButton colorClass="btn-style1" title="Hire Me"></CustomButton>
                        <CustomButton id="download" colorClass="btn-style2" title="Download CV "></CustomButton>
                    </div>
                </div>
                <div className="profile">
                    <img src={zoro}></img>
                </div>
            </div>
        </>
    )
}

export default Body