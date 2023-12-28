
import { useEffect, useState } from "react";
import styles from "./app.module.css";


export const Button = ()=> {
    const [selectedOption,setSelectedOption] =useState("Null");
    const [houses,setHouses] =useState([]);

    const handleSelectedChange = (e) => {

      const SelectedValue = e.target.value;
        
      setSelectedOption(SelectedValue);
  
      console.log(SelectedValue);
      console.log(e.target.value);

    }

    useEffect(()=>{
      fetch(`/db.json`)
      .then((res)=>res.json())
      .then((data)=>{
        setHouses(data.houses);
      })
      .catch((error)=>{
        console.log("error:-",error);
      })
    },[])


    return (
        <>
           <div className={styles.flex}>
              <div >
                <select value={selectedOption} onChange={handleSelectedChange}>
                  <option value="Null">Sort By ID</option>
                  <option value="Ascending">Ascending</option>
                  <option value="Descending">Descending</option>
                </select>
              </div>

              <div >
                <select value={selectedOption}  onChange={handleSelectedChange}>
                  <option value="Null">Sort By Rent</option>
                  <option value="Ascending">Ascending</option>
                  <option value="Descending">Descending</option>
                </select>
              </div>

              <div >
                <select value={selectedOption}  onChange={handleSelectedChange}>
                    <option value="Null">Sort By Area</option>
                    <option value="High">High</option>
                    <option value="Low">Low</option>
                </select>
              </div>

              <div className={styles.flex}>
                 <input type="text" placeholder="Search Address" />
              </div>
         </div>

         <div>

          <table className="table" border="1">

            <thead>
               
              <tr>
                <th>Sr.No</th>
                <th>Name</th>
                <th>Owner Name</th>
                <th>Address</th>
                <th>Area Code</th>
                <th>Rent Price</th>
                <th>Available For</th>
                <th>Image</th>
              </tr>

            </thead>

              <tbody>
                {houses.map((house) => (
                 <tr key={house.id}>
                    <td>{house.id}</td>
                    <td>{house.name}</td>
                    <td>{house.ownersName}</td>
                    <td>{house.address}</td>
                    <td>{house.areaCode}</td>
                    <td>{house.rentPrice}</td>
                    <td>{house.availableFor}</td>
                    <td>{house.image}</td>
                 </tr>
                ))}
              </tbody>

          </table>

         </div>
        </>
    )
}