import BackgroundImage from '../../assest/Backgroundimg.svg'


const Note=()=>{
 
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
  


            <div className="flex h-screen ">
 



      {/* Left Side */}
      <div className="w-1/2 bg-blue-950 flex items-center justify-center text-white  text-2xl border rounded-lg mr-8 ml-8 gap-4 mt-[8rem] ">
      <div className="mb-2 text-lg font-semibold">This is the line title</div>
      
      {/* <div className="w-[90%] h-1 bg-yellow-500  mb-[30rem]"> */}

      <p className="underline ... bg-yellow-500">Frontend Development Guide</p>
      {/* </div> */}
      </div>

      {/* Right Side */}
      <div className="w-1/2 bg-blue-950 flex items-center justify-center text-white  text-2xl border rounded-lg mr-8 ml-8 gap-4 mt-[8rem]">
        Right Side Content
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
export default Note;
