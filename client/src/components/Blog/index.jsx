import { UserAuth } from "../../context/AuthContext";
import comments from "../../assets/comment.svg"
import { useParams } from "react-router-dom";
import NavBar from "../NavBar";

export default function Blog() {

    const { blogData, setBlogData } = UserAuth()
    const { id } = useParams()

    if (!blogData.content) {
        const fetchData = async () => {
            
            try{
                const response = await fetch(`http://localhost:8082/api/blog/${id}`);
                let json = await response.json();
    
                if (response.ok) {
                    let d = new Date(json.createdAt.split('T')[0]);
                    let month = d.toLocaleDateString('US-en', {month: 'short'})
                    let date = d.getDate()
                    let year = d.getFullYear()
                    let currYear = new Date().getFullYear()
                    if (year===currYear) year = ''; else year = ' ,'+year;
                    if (json.createdAt !== json.updatedAt) {
                      month = `Update ${month}`
                    } 

                    json = {...json, month, date, year}
                    setBlogData(json)
                }
                else {
                    console.log(json.error)
                }
            }
            catch(err) {
                console.log(err.message);
            }
            
        }

        fetchData();
    }

    return(
        <>
            <NavBar/>
            <div className="font-poppins p-[100px] w-full flex  justify-center overflow-scroll ">

                <div className="w-[65%] flex flex-col justify-center gap-y-[10px] px-[30px] ">

                    <div className="text-[42px] font-semibold w-fit " >{blogData.title}</div>

                    <div className='flex font-medium '>{blogData.userName} <span className='whitespace-pre text-[#757575] ' >{` . ${blogData.month} ${blogData.date}${blogData.year}`}</span></div>
                    <div className='w-full p-[12px] px-[25px] border-y-[2px] mt-[10px] border-[#f2f2f2] ' >
                        <img src={comments} alt='' className="h-[20px] w-[20px] [transform:scaleX(-1)] "/>
                    </div>

                    <div className='text-[22px] px-[10px] mt-[50px] w-fit' >
                        <pre className="whitespace-pre-wrap font-poppins ">{blogData.content}</pre>
                    </div>

                    <div className='w-full h-0 border-[1px] border-[#E6E6E6] mt-[50px] ' />

                </div>

            </div>
        </>
    )
}