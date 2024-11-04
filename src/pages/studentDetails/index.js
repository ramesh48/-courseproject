


const StudentDetails=()=>{
   
    const courses = JSON.parse(localStorage.getItem("courses") || "[]")

    

    const handleDelete=(id)=>{
        //  dispatch(deleteStudent(id))
        localStorage.removeItem(id);
    
       const local = courses.filter((_,index)=>index!==id)

       
       localStorage.setItem("courses",JSON.stringify(local))
       
    }
    return(
        <div className="w-full px-4 py-8">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {courses?.length&&courses.map((item,index)=>(
                    <div key={index}
                        className="p-6 transition-shadow duration-300 bg-white border rounded-lg shadow-lg hover:shadow-xl">
                        <div className="flex items-center mb-4">
                            <div
                                className="bg-[#c9fd02] w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">{item.name.slice(0,1)}
                            </div>
                            <h3 className="text-xl font-semibold">{item.name}</h3></div>
                        <div className="space-y-2"><p><strong>Role:</strong> {item.role}</p><p>
                            <strong>Email:</strong> {item.email}</p><p><strong>Phone Number:</strong> {item.phoneNumber}
                        </p>
                            <p><strong>Course:</strong> {item.course}</p><p><strong>Status:</strong> {item.status}</p></div>
                        <button onClick={()=>handleDelete(index)}
                            className="w-full p-2 mt-4 text-white transition-colors bg-red-500 rounded hover:bg-red-600">Delete
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default StudentDetails;