import { useRef } from "react";
import NavBar from "../NavBar";
import { UserAuth } from "../../context/AuthContext";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";


export default function Create() {

    const { user } = UserAuth()
    const navigate = useNavigate()

    const titleRef = useRef()
    const contentRef = useRef()

    async function createBlog() {
    
        if (titleRef.current.value.trim() && contentRef.current.value.trim()){
    
            try{
                const response = await fetch(`http://localhost:8082/api/blog/`, {
                    method:"POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${user.token}`
                    },
                    body: JSON.stringify({
                        title: titleRef.current.value,
                        content: contentRef.current.value
                    })
                });
                const json = await response.json();
        
                if (response.ok) {
                    toast.success('Blog Published')
                    console.log(json)
                    setTimeout(()=>navigate('/'),4000)
                }
                else {
                    console.log(json.error)
                }
            }
            catch(err) {
                console.log(err.message);
            }

        }
        else {
            toast.error("Fields Cannot be empty!")
        }
    }
    return (
        <div className='font-poppins'>
            <NavBar />
            <div className=" p-[100px] w-full flex  justify-center overflow-scroll ">
                <div className="w-[65%] flex flex-col justify-center gap-y-[30px] px-[30px] ">

                    <div className="flex gap-x-[20px] items-center ">
                        <h2 className=" whitespace-nowrap text-[22px] " >Title :</h2>    
                        <input type="text" className="border-2 border-[#E6E6E6] rounded-[10px] h-[50px] w-full p-[10px] " ref={titleRef} />
                    </div>
                    <h1 className="text-[22px] ">Content :</h1>
                    <textarea className="h-[300px] w-full border-2 border-[#E6E6E6] rounded-[10px]  p-[20px]  " ref={contentRef} />
                    
                    <button onClick={createBlog} className="cursor-pointer bg-[#6ec825] text-white border-2 w-[120px] h-[50px] text-[22px] font-medium rounded-[10px] self-center hover:bg-[#80e130] ">Create</button>
                    <ToastContainer
                        position="bottom-left"
                        limit={1}
                        autoClose={3000}
                        hideProgressBar
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        pauseOnHover
                        theme="dark"
                    />
                </div>
            </div>
        </div>
    )
}
