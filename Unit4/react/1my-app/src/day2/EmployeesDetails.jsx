import Card from "./Card"


const data = {
    name : "pankaj",
    org : "Adobe",
    qualification: "UG",
    gender : "male",
    ImgUrl : "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
}

const EmployeesDetails = () => {
    return (
        // Display A card with given details
        <>

         < Card{ ...data} />

        </>
    )
}

export default EmployeesDetails ;