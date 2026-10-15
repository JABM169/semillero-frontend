import { Outlet } from "react-router-dom";
import { Toaster } from 'sonner'

export default function AuthLayout () {
    return (

        <>
        <div className=' bg-slate-800 min-h-screem' >
            <div className=' max-w-lg mx-auto pt-10 px-5'>
                <img src='/logo.png' alt='logo' />

                <div className='py-10'>
                    <Outlet />
                </div>
            </div>

        </div>

        < Toaster position='top-right'/>
        
        </>
    )

}