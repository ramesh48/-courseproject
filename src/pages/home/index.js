import BackgroundImage from '../../assest/Backgroundimg.svg'
import AirbnbLogo from '../../assest/img/airbnb.png';
import Grabyo from '../../assest/logo/client-8.png';
import LifeGroup from '../../assest/logo/Lifegroups.png';
import Myob from '../../assest/logo/myob.png';
import Tailus from '../../assest/img/tailus.png';
import MicroSoft from '../../assest/img/microsoft.png';
import Coty from '../../assest/img/coty.png';
import Lilly from '../../assest/img/lilly.png';
import Medel from '../../assest/logo/medal.png';
import Thought from '../../assest/logo/thought.png';
import Training from '../../assest/logo/training.png';
import Dashboard from '../../assest/img/AboutDashboard.png';


const Home=()=>{

    const backgroundStyle = {
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'bottom',
        color: '#fff'
    };
    return (
        <div>
            <header
                className="fixed left-1/2 transform -translate-x-1/2 z-50 py-[0.70rem] border border-[#f3f4f6] rounded-3xl mt-[2rem] w-full md:max-w-[60rem] bg-black">
                <div className="px-[1rem]">
                    <div className="flex justify-between">
                        <div>
                            <a aria-current="page" href="/" className="">
                                <h1 className="font-bold text-[1.5rem] text-[#c9fd02]">LearnHub</h1>
                            </a>
                        </div>
                        <div className="flex items-center justify-end gap-3">
                            <a href="/form" className="text-white pr-2">Admin</a>
                        </div>
                    </div>
                </div>
            </header>
            <div style={backgroundStyle} className='flex flex-col justify-center items-center pt-[14rem] pb-[5rem] px-[1rem]'>
                <div className='text-center max-w-[40rem] font-bold leading-none text-[2.25rem] md:text-[3.75rem]'>Learn
                    from the best, be your best..
                </div>
                <p className='mt-10 max-w-[30rem] text-center text-[#4b5563]'>Give yourself an upgrade with our
                    inspiring online courses and join a global community of learners</p>
                <a href="#aboutus" className="bg-[#facc15] text-black text-xl font-semibold rounded-[5rem] mt-5 py-4 px-7">Get Started</a>
            </div>
            <div className='pt-[5rem] pb-[1rem] px-[1rem] lg:px-[10rem]'>
                <div className='text-white font-bold text-[3rem] text-center'>Our Placement Partners</div>
            </div>
            <div className='px-[3rem] lg:px-[15rem]'>
                <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 place-items-center'>
                    <img className="h-20 w-fit aspect-auto" src={AirbnbLogo} alt="logo" />
                    <img className="h-14 w-fit aspect-auto" src={Grabyo} alt="logo" />
                    <img className="h-14 w-fit aspect-auto" src={LifeGroup} alt="logo" />
                    <img className="h-14 w-fit aspect-auto" src={Myob} alt="logo" />
                    <img className="h-10 w-fit aspect-auto" src={Tailus} alt="logo" />
                    <img className="h-12 w-fit aspect-auto" src={MicroSoft} alt="logo" />
                    <img className="h-16 w-fit aspect-auto" src={Coty} alt="logo" />
                    <img className="h-14 w-fit aspect-auto" src={Lilly} alt="logo" />

                </div>
            </div>
            <div className='flex justify-center'><div className='bg-[#c9fd02] py-[0.25rem] px-[1.5rem] text-center text-[1rem] mt-[2.5rem] rounded-full w-[11rem]'>and, more companies</div></div>
            <div className='pt-[4rem] lg:pt-[6rem] flex flex-col items-center'>
                <div className='text-[1rem] font-semibold text-[#7dd3fc] max-w-[36rem] uppercase text-center'>Open Source Theme and UI Components</div>
                <div className='text-[2rem] md:text-[3rem] leading-[3rem] mt-[2rem] font-bold text-white max-w-[36rem] text-center'>Geaux Astro helps you craft beautiful websites efficiently</div>
            </div>
            <div className='grid grid-cols-1 xl:grid-cols-5 gap-4 mb-[5rem] mt-[5rem] px-[2rem]' >
                <div className='col-span-1 xl:col-span-2 pr-1 xl:pr-[6rem]'>
                    <div className='flex gap-4 items-start'>
                        <img src={Medel} className='w-8 h-8' alt={'Medal'}/>
                        <div className='flex flex-col'>
                            <div className='text-[1.25rem] font-semibold text-white'>Certificate Distribution</div>
                            <div className='text-white mt-[0.75rem] text-[1rem]'>We offer certificates to validate and
                                recognize your achievement.
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-4 mt-16 items-start'>
                        <img src={Thought} className='w-8 h-8' alt={'Thought'}/>
                        <div className='flex flex-col'>
                            <div className='text-[1.25rem] font-semibold text-white'>Knowledge</div>
                            <div className='text-white mt-[0.75rem] text-[1rem]'>We deliver transformative knowledge that empowers and inspires.
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-4 mt-16 items-start'>
                        <img src={Training} className='w-8 h-8' alt={'Training'}/>
                        <div className='flex flex-col'>
                            <div className='text-[1.25rem] font-semibold text-white'>Hands-on Experience</div>
                            <div className='text-white mt-[0.75rem] text-[1rem]'>We provide hands-on experience for real-world learning. You learn best by doing.
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-span-1 xl:col-span-3'>
                    <img src={Dashboard} className='w-full h-full' alt={'Dashboard'}/>
                </div>
            </div>
            <div className='pt-[3rem] xl:pt-[6rem] px-[1rem] xl:px-[8rem] grid grid-cols-1 xl:grid-cols-2 gap-2 mb-[5rem]'>
                <div className='flex flex-col font-bold leading-[2rem] xl:leading-[3.2rem] text-[2rem] xl:text-[3rem]'>
                    <div className='text-[#16a34a] text-start lg:text-center xl:text-start'>Empower your future with cutting-edge skills</div>
                    <div className='text-[#0ea5e9] text-start lg:text-center xl:text-start'>New, Embrace innovation, master technology, & shape the digital world</div>
                    <div className='text-[#dc2626] text-start lg:text-center xl:text-start'>Your journey to success starts here.</div>
                </div>
                <div>
                    <div className='text-white text-xl mt-5'>Join our course with a proven track record of success, where learning isn't just about gaining skills; it's about growing them. Join us, learn with confidence, and watch your skills soar.</div>
                    <div className='flex gap-4 xl:gap-10 mt-16 items-center'>
                        <div className='flex flex-col gap-3 items-center'>
                            <div className='bg-[#c9fd02] py-[0.12rem] leading-6 px-[0.75rem] text-lg rounded-full'>Total student
                            </div>
                            <div className='text-white font-bold text-[2.5rem]'>{JSON.parse(localStorage.getItem("courses") || "[]").length}</div>
                        </div>
                        <div className='flex flex-col gap-3 items-center'>
                            <div className='bg-[#c9fd02] py-[0.12rem] leading-6 px-[0.75rem] text-lg rounded-full'>Placed student
                            </div>
                            <div className='text-white font-bold text-[2.5rem]'>{JSON.parse(localStorage.getItem("courses") || "[]").filter(item=>item.status==='Placed').length}</div>
                        </div>
                        <div className='flex flex-col gap-3 items-center'>
                            <div className='bg-[#c9fd02] py-[0.12rem] leading-6 px-[0.75rem] text-lg rounded-full'>Unplaced student
                            </div>
                            <div className='text-white font-bold text-[2.5rem]'>{JSON.parse(localStorage.getItem("courses") || "[]").filter(item=>item.status==='Unplaced').length}</div>
                        </div>
                    </div>
                </div>
            </div>
            <footer className='flex justify-center pb-14'>
                <div className="">
                    <h1 className="text-[#c9fd02] text-center text-[2.5rem] font-bold">LearnHub</h1><p
                    className="mt-[1.25rem] text-[0.87rem] text-[#64748b]">© 2022 Tailwind Labs Inc. All rights
                    reserved.</p>
                    <div className="flex justify-center items-center gap-4 mt-[2rem] ">
                            <a href="/form" className="text-white">Form</a>
                            <div className='bg-[#f1f5f933] h-4 w-[1px]'></div>
                            <a href="/Notes" className="text-white">Notes</a>
                            <div className='bg-[#f1f5f933] h-4 w-[1px]'></div>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
export default Home;