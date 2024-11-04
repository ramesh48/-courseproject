

import {useEffect, useState} from "react";
import StudentDetails from "../studentDetails";

function From() {
    const [name,setName]=useState("")
    const [role,setRole]=useState("")
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [status, setStatus] = useState("Unplaced");
    const [selectedCourse, setSelectedCourse] = useState("Select a course" );
    // const dispatch=useDispatch()
  
    const courses = [
        { id: 1, name: "Select a course:" },
        { id: 2, name: "React Basics" },
        { id: 3, name: "UI/UX Design" },
        { id: 4, name: "JavaScript Fundamentals" },
        { id: 5, name: "Advanced CSS" },
        { id: 6, name: "Backend Development" },
    ];
    const statusList=[
        {id:1,name:"unplaced"},
        {id:2,name:"Placed"}
    ]
    
    const handleSubmit=(e)=>{
      
       let courses = JSON.parse(localStorage.getItem("courses") || "[]")
        const course = 
        
        {
            name:name,
            role:role,
            email:email,
            phoneNumber:phoneNumber,
            status:status,
            selectedCourse:selectedCourse
        }
        courses.push(course)
    
        localStorage.setItem("courses",JSON.stringify(courses))
      
       

    
        setName('')
        setRole('')
        setEmail('')
        setPhoneNumber('')
        setStatus('')
        setSelectedCourse('')
    }
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
            <div className='p-6'>
                <div className="w-full px-10 py-14 bg-black">
                    <h1 className="text-[#c9fd02] text-3xl text-center mt-10 mb-10 font-black">Fill This Form</h1>
                    <div className='grid grid-cols-2 gap-10'>
                        <div className='flex flex-col gap-1'>
                            <label className="block text-[#c9fd02] mb-2 text-3xl font-black">Name:</label>
                            <input placeholder={'Enter Name'}
                                   className="w-full px-4 py-6 bg-gray-100 border-b border-gray-600 rounded-lg focus:outline-none focus:border-indigo-500"
                                   value={name} onChange={(e) => setName(e.target.value)}/>
                        </div>
                        <div className='flex flex-col gap-1'>
                            <label className="block  text-[#c9fd02] mb-2 text-3xl font-black">Role:</label>
                            <input placeholder={'Enter Name'}
                                   className="w-full px-4 py-6 bg-gray-100 border-b border-gray-600 rounded-lg focus:outline-none focus:border-indigo-500"
                                   value={role} onChange={(e) => setRole(e.target.value)}/>
                        </div>
                        <div className='flex flex-col gap-1'>
                            <label className="block  text-[#c9fd02] mb-2 text-3xl font-black">Email:</label>
                            <input type="email" placeholder="Enter your email"
                                   className="w-full px-4 py-6 bg-gray-100 border-b border-gray-600 rounded-lg focus:outline-none focus:border-indigo-500"
                                   value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div className='flex flex-col gap-1'>
                            <label className="block  text-[#c9fd02] mb-2 text-3xl font-black">Phone Number:</label>
                            <input type="tel" placeholder="Enter your phone number"
                                   className="w-full px-4 py-6 bg-gray-100 border-b border-gray-600 rounded-lg focus:outline-none focus:border-indigo-500"
                                   value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>
                        </div>
                        <div className='flex flex-col gap-1'>
                            <label className="block  text-[#c9fd02] mb-2 text-3xl font-black">Course:</label>
                            <select
                                value={selectedCourse}
                                onChange={(e) => setSelectedCourse(e.target.value)}
                                className="w-full px-4 py-6 bg-gray-100 border-b border-gray-600 rounded-lg focus:outline-none focus:border-indigo-500"
                            >
                                {courses.map((course) => (
                                    <option key={course.id} value={course.name}>
                                        {course.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className='flex flex-col gap-1'>
                            <label className="block  text-[#c9fd02] mb-2 text-3xl font-black">Status:</label>
                            <select
                                value={status}
                                onChange={(e) => setStatus(e.target.value)}
                                className="w-full px-4 py-6 bg-gray-100 border-b border-gray-600 rounded-lg focus:outline-none focus:border-indigo-500"
                            >
                                {statusList.map((item) => (
                                    <option key={item.id} value={item.name}>
                                        {item.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="flex justify-end px-4 py-4 mt-4">
                        <button type="submit" onClick={() => handleSubmit()}
                                className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-[#c9fd02] hover:bg-[#c9fd02] transition duration-300 ease-out border-2 rounded-full shadow-md ">
                                <span
                                    className="absolute inset-0 flex items-center justify-center w-full h-full text-black duration-300 -translate-x-full hover:translate-x-0 ease"><svg
                                    className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round"
                                                                             strokeLinejoin="round" strokeWidth="2"
                                                                             d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg></span><span
                            className="absolute flex items-center justify-center w-full h-full text-white hover:bg-[#c9fd02] transition-all duration-300 transform group-hover:translate-x-full ease">Submit</span><span
                            className="relative invisible">Submit</span>
                        </button>
                    </div>
                </div>
                {/* <h1>{courses}</h1> */}
                <StudentDetails/>
                <footer className='flex justify-center pb-14'>
                    <div className="">
                        <h1 className="text-[#c9fd02] text-center text-[2.5rem] font-bold">LearnHub</h1><p
                        className="mt-[1.25rem] text-[0.87rem] text-[#64748b]">© 2022 Tailwind Labs Inc. All rights
                        reserved.</p>
                        <div className="flex justify-center items-center gap-4 mt-[2rem] ">
                            <a href="/form" className="text-white">Form</a>
                            <div className='bg-[#f1f5f933] h-4 w-[1px]'></div>
                            <a href="/Notes" className="text-white">Notes</a>
                        </div>
                    </div>
                </footer>
              
            </div>
        </div>
    );
}

export default From;
