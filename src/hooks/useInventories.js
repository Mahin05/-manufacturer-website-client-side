import { useEffect, useState } from "react";

const useInventories = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://manufacturer-website-server-side-zd8v.onrender.com/manageInventory')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return [services,setServices]
}
export default useInventories;