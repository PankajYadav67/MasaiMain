import styles from "./Form.module.css";
import { useState } from "react";


export const Form = () => {
    const [formData,setFormdata] = useState({});

    const handleChange = (e) => {

        const inputName = e.target.name;


        if(e.target.type === "checkbox"){
            //checkbox
            setFormdata({
                ...formData,
                [inputName] :e.target.checked,
            })

        }
        else  if(e.target.type === "file"){
            //file 
            setFormdata({
                ...formData,
                [inputName] :e.target.files,
            });
        }
        else{
            setFormdata({
                ...formData,
                [inputName] :e.target.value,
            });
        }

        
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);

        // fetch(url).{method:"post",body: "JSON.stringify(formData)"}
    };

  return (

    <div className={styles.form}> Form

        <form onSubmit={handleSubmit}>
            
            <div className={styles.grid} >
                <label>UserName:-</label>
                <input type="text" name="username" onChange={handleChange}/>
            </div>

            <div className={styles.grid} >
                <label>Password:-</label>
                <input type={formData.showpassword ? "text" : "password"} name="password" onChange={handleChange}/>
               <div/> 

                <div> 
                 <input type="checkbox" name="showpassword" onChange={handleChange}/>
                 <label >Show Password</label>
                </div>
            
            </div>

            <div className={styles.grid}> 

            </div>

            <div className={styles.grid}>
                <label>Age:-</label>
                <input type="number" name="age" onChange={handleChange}/>
            </div>

            <div className={styles.grid}>
                <label>Gender:-</label>
                <select name="gender" onChange={handleChange} >
                    <option value="">Do not want share</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
                
            </div>
    
            <div className={styles.grid}>
                <label>Gender:-</label>
                <div>
                    <input type="radio" value="M" name="genderRadio" onChange={handleChange} />
                    Male
                    <br />
                    <input type="radio" value="f" name="genderRadio" onChange={handleChange} />
                    female
                </div>
                

                
            </div>
    
            <div className={styles.grid}>
                <label>Date Of Birth:-</label>
                <input type="date" name="dob" onChange={handleChange}/>
            </div>
          
            <div className={styles.grid}>
                <label>Resume:-</label>
                <input type="file" name="resume" onChange={handleChange}/>
            </div>


            <div className={styles.grid}>
                <div/>
                <input type="submit" name="submit"></input>
            </div>


        </form>

    </div>
  )   
}