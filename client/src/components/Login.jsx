import { useState } from 'react';
import image from '../assets/login.jpg'
export default function Login() {
    let inputStyle = ' rounded-[7px] border-2 px-[10px] py-[2px] border-[#5f5e5e60] focus:outline focus:outline-[#9fd7ff] focus:border-[#55b8ff] ';
    const [isSignIn, setIsSignIn] = useState(true)


    return(
        <div className="flex h-[100vh] font-poppins ">
            <div className='bg-[#9dbed6] w-[50%] h-full overflow-y-hidden '>
                <img src={image} alt='' className='bg-cover bg-center rounded-r-[65px] h-[100vh] ' />
            </div>
            <div className='flex justify-center items-center bg-gradient-to-r to-[#f3faff] from-[#9dbed6]  w-[55%] '>
                <div className='  border-2 rounded-[20px] shadow-xl bg-[#ffffff] flex flex-col justify-center items-center overflow-hidden '>
                    <div className=' '>
                        <div className='flex h-[50px] w-full bg-[#8D8D8D]'>
                            <div className={"w-[50%] flex justify-center items-center border-[#707070] "+(isSignIn?" border-t-2 border-x-2 rounded-t-[20px] bg-white  ":" bg-[#ffffff91] shadow-[-8px_-5px_25px_0px_-_inset] shadow-[rgba(0,0,0,0.4)] border-b-2 ")} onClick={()=>setIsSignIn(true)} >Sign Up</div>
                            <div className={"w-[50%] flex justify-center items-center  border-[#707070] "+(isSignIn?" bg-[#ffffff91] shadow-[8px_-5px_25px_0px_-_inset] shadow-[rgba(0,0,0,0.4)] border-b-2 ": " border-t-2 border-x-2 rounded-t-[20px] bg-white ")} onClick={()=>setIsSignIn(false)} >Log In</div>
                        </div>
                        <div className='w-full h-0 border-[1px] border-[#c8c8c8e6] ' />
                        <div className='px-[30px] py-[20px] border-b-2 border-x-2 rounded-b-[20px] border-[#707070] '>
                            <div className='text-center w-full'>
                                <h2 className='text-[45px] '>{isSignIn?"Create an account":"Hello again"}</h2>
                                <h5 className='text-[20px] text-[#5f636c] '>{isSignIn ? "Sign up and unleash your creativity" :"Let's pick up where we left off!"}</h5>
                            </div>
                            <form className='gap-y-[15px] flex flex-col  text-[20px] mt-[30px] '>
                                { 
                                    isSignIn && <div className='flex justify-between gap-x-[20px] '>
                                        <label>User Name</label>
                                        <input type='text' className=' rounded-[7px] border-2 px-[10px] py-[2px] border-[#5f5e5e60] focus:outline focus:outline-[#9fd7ff] focus:border-[#55b8ff] ' />
                                    </div>
                                }
                                <div className='flex justify-between gap-x-[20px] '>
                                    <label>Email</label>
                                    <input type='text' className={inputStyle}/>
                                </div>
                                <div className='flex justify-between gap-x-[20px] '>
                                    <label>Password</label>
                                    <input type='password' className={inputStyle}/>
                                </div>
                                <button type='submit' className='w-[110px] h-[45px] font-semibold border-2 rounded-[12px] border-[#66bfff] bg-[#3c9de2] text-white self-center mt-[15px] hover:bg-[rgba(55,148,214,0.71)] hover:border-[#4798d2e4] shadow-2xl '>{isSignIn ? "Sign Up":"Log In"}</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}