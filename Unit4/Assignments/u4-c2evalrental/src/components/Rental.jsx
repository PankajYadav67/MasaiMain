
import { useState } from "react";
import styles from "./app.module.css";

export const Rental = () => {
    const [formData,setFormData] =useState({});

    const handleChange = (e) => {
        const inputName = e.target.name;

        if(e.target.type==="checkbox"){
            // for checkbox
            setFormData({
                ...formData,
                [inputName] : e.target.checked
            })
        }
        else if(e.target.type === "file"){
            //For files
            setFormData({
                ...formData,
                [inputName] : e.target.files
            })
        }
        else{
            setFormData({
                ...formData,
                [inputName] :e.target.value

            })
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(formData);

        // Send a POST request to add data to the database
        fetch('/db.json',{ //`/db.json` for production http://localhost:8080/houses
            method: "POST",
            headers:{
                'Content-Type' : 'application/json',
            },
            body:JSON.stringify(formData)
        })
        .then((response)=>{
            if (!response.ok) {
                throw new Error(`Network response was not ok.`);
              }
              return response.json();
        })
        .then((data)=>{
            console.log('Data added:', data);
            // Clear the form or perform any other necessary actions
            setFormData({
                name: '',
                ownersName: '',
                address: '',
                areaCode: '',
                rentPrice: '',
                availableFor:'',
                image: '',
              });
        })
        .catch((error)=>{
            console.log("Error adding Data:-",error)
        })
        
    }

    return(
        <>

        <div className={styles.form}>

            <form onSubmit={handleSubmit}>

                <div className={styles.grid}>
                    <label >Name:-</label>
                    <input type="text" name="name" placeholder="Enter your name here" value={formData.name} onChange={handleChange}  />
                </div>

                <div className={styles.grid}>
                    <label >Owners Name:-</label>
                    <input type="text" name="ownersName" placeholder="Enter Ownername here:" value={formData.ownersName} onChange={handleChange}  />
                </div>

                <div className={styles.grid}>
                    <label >ID:-</label>
                    <input type="number" name="id" placeholder="Enter Vaild ID here:" value={formData.id} onChange={handleChange} />
                </div>

                <div className={styles.grid}>
                    <label >Address:-</label>
                    <input type="textarea" name="address" placeholder="Enter your Address here:" value={formData.address} onChange={handleChange} />
                </div>
                
                <div className={styles.grid}>
                    <label >Area Code:-</label>
                    <input type="text" name="areaCode" placeholder="Enter Vaild Area Code here:" value={formData.areaCode} onChange={handleChange} />
                </div>

                <div className={styles.grid}>
                    <label >Rent Amount:-</label>
                    <input type="text" name="rentPrice" placeholder="Enter Rent Amount here:" value={formData.rentPrice} onChange={handleChange} />
                </div>

            
                <div className={styles.grid}>
                    <label >Preferened tenant:-</label>

                    <div>
                        Bachelor
                        <input type="checkbox" name="tenant" onChange={handleChange} value={formData.availableFor} />
                    
                        
                        Married
                        <input type="checkbox" name="tenant" onChange={handleChange} value={formData.availableFor} />
                    </div>
                
                </div>

                <div className={styles.grid}>
                    <label >Upload Image:-</label>
                    <input type="file" name="image" value={formData.image} />
                </div>


                <div className={styles.grid}>
                    <div/>
                    <button >
                        Submit
                    </button>
                </div>
            </form>


        </div>

        </>
    )
}