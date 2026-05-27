type ErrorMessageprops ={
    children: React.ReactNode
}

export default function ErroMessage ({children} : ErrorMessageprops) {

    return(

        <p className=" bg-red-50 text-red-600 p-3 text-sm font-bold text-center">{children}</p>
    )
}