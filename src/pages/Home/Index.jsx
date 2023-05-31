// simple home

// import { Link } from "react-router-dom";
// import Navbar from '../../components/Navbar';
import discord from '../../assets/icons/discord-icon.svg';
import github from '../../assets/icons/github-icon.svg';
import linkedin from '../../assets/icons/linkedin-icon.svg';
import mail from '../../assets/icons/mail-142.svg';
import xbox from '../../assets/icons/xbox.svg';
// import avatar from '../../assets/images/avatar.jpg';
import avatarVideo from '../../assets/videos/display.webm';
import './style.css';


function AvatarVideo(){
    return (
        <div className="avatar-container">
            <video className='h-[600px] m-auto' src={avatarVideo} autoPlay loop muted>
                <source src={avatarVideo} type="video/mp4" />
            </video>
        </div>
    )
}

function Home() {
    return (
        <div className='w-full h-screen root' id="root">
            <div className="container mx-auto text-white p-[20px] md:p-[80px]">
                <div className="main">
                    <div className='header flex h-[50px] flex-row justify-between'>
                        <p className='font-stylish text-md my-auto'>1024.</p>
                        <div className="btns flex gap-3">
                            {/* <img src={twitter} alt="twitter logo" /> */}
                            <img src={xbox} alt="xbox logo" />
                            <img src={linkedin} alt="linkedin logo" />
                            <img src={github} alt="github logo" />
                            <img src={discord} alt="discord logo" />
                            <img src={mail} alt="mail logo" />
                        </div>
                    </div>

                    <div className="main-content my-10 flex flex-col md:flex-row">
                        <div className="w-full my-auto md:w-3/5">
                            <div className="main my-auto place-content-center">
                                <div className="greeting font-headers font-bold text-xl mb-10">
                                    <p className="intro">
                                        Unleashing Creativity through<br></br>
                                        Functional Design
                                    </p>
                                </div>
                                <p className="title font-stylish text-base mt-2">Human-Centric Engineer</p>

                                {/* content */}
                                <div className="content mb-10 font-sans text-base">
                                    <p className="section-1 max-w-[500px] my-5">
                                        I'm a Senior Software Engineer. I have worked diligently to bring ideas to life, creating impactful products that resonate with users. Alongside my team, I have navigated the challenges of the startup world, leveraging my expertise to drive success.
                                    </p>
                                    <p className="section-2 max-w-[500px]">
                                        Beyond my professional endeavors, I find fulfillment in assisting startups in shipping their products. By offering my guidance and support, I empower emerging businesses to overcome obstacles and achieve their goals.
                                    </p>
                                </div>

                                {/* btns */}
                                <div className="btn-container flex flex-row gap-5 my-5 font-sans">
                                    <div className="btn p-1">Stack</div>
                                    <div className="btn p-1">Projects</div>
                                    <div className="btn p-1">Blog</div>
                                    <div className="btn p-1">Contact</div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full md:w-2/5 my-3">
                            <div className="avatar">
                                <AvatarVideo/>
                                {/* <img src={avatar} className='rounded-full w-[280px] m-auto' alt="" /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;