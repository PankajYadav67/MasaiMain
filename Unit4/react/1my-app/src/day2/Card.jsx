
import styles from"./Card.modules.css"

const Card = (props) => {
    console.log(props);
    const {name,org,qualification,gender,ImgUrl} = props
    return (
        <div className={styles.main}>  

            <div className={styles.left_content}> 
             <img src={ImgUrl} alt={name} />
            </div>

            <div className="right_content"> 
                <h1>{org}</h1>
                <h2>name : {name}</h2>
                <h2>Gender: {gender}</h2>
                <h2>Qualification: {qualification}</h2>
            </div>

        </div>
    )
}

export default Card 