const Ui = ()=>{
    return (
        <div className="flex flex-col gap-2">
            <div className="flex justify-center items-center mt-[50px]">
                <h1 className="text-4xl font-bold tracking-wider">Text Converter</h1>
            </div>
            <div className="flex items-center justify-between h-[80px]">
                <select className="border-black border-[1px] rounded-md outline-none w-[280px] h-[30px]" name="" id="">
                    <option className="flex justify-center" value="en" selected>English</option>

                </select>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M15.97 2.47a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 1 1-1.06-1.06l3.22-3.22H7.5a.75.75 0 0 1 0-1.5h11.69l-3.22-3.22a.75.75 0 0 1 0-1.06Zm-7.94 9a.75.75 0 0 1 0 1.06l-3.22 3.22H16.5a.75.75 0 0 1 0 1.5H4.81l3.22 3.22a.75.75 0 1 1-1.06 1.06l-4.5-4.5a.75.75 0 0 1 0-1.06l4.5-4.5a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
                </svg>

                <select className="border-black border-[1px] rounded-md outline-none w-[280px] h-[30px]" name="" id="">
                    <option disabled>Select</option>

                </select>
                
            </div>
            <div className="border-blue p-2 border-2 flex gap-2 items-center ">
                <textarea className="border-black border-2 w-[302px] h-[166] p-3 rounded-md" name="" id="" cols="30" rows="7" placeholder="ENTER TEXT"></textarea>
                <div className="border-black border-2 w-[302px] h-[195px] p-3 rounded-md">Translation</div>
            </div>
            
        </div>
    )
}
export default Ui;