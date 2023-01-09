import styles from "./AboutMe.module.css";
import zdjecie6 from "./IMG_2033.jpg";
import { Link } from "react-router-dom";

export const AboutMe = () => {
  return (
    <>
     
    <div className={styles.aboutMeWrapper} >

    <div className={styles.imageWrapper}>
            <img className={styles.image} src={zdjecie6} alt="zdjecie"></img> 
</div>


      <div className={styles.aboutMe}>

		<p>
		Salon kosmetyczny Joanna Jaruszewska  <br></br> specjalizuje się w stylizacji paznokci oraz zabiegach pielęgnacyjnych twarzy, szyi i dekoltu. 
Do każdego klienta podchodzę indywidualnie. 
W salonie stawiam na bezpieczeństwo zabiegów i profesjonalizm. 

Salon kosmetyczny Joanna Jaruszewska to przytulny salon z dwoma gabinetami i komfortową recepcją, ma dobry dojazd i darmowe miejsca parkingowe .
		</p>
    <div>
      <Link to="/cennik">
        <button className={styles.btn}>Zobacz cennik</button>
        </Link>
      </div>
      </div>

     
    </div>
    </>
  );
};






// import cennik from "./cennik.jpg"
// import cennik1 from "./cennik1.jpg"
// import styles from "./PriceList.module.css"

// export function PriceList() {
//     return (
// 		<>
// <h2>Cennik</h2>
// <div className={styles.wrapper}>

// 		<div>
// 			<img className={styles.image} src={cennik} alt="cennik"></img>

// 		</div>


// 		<div >
// 		<img className={styles.image}  src={cennik1} alt="cennik"></img>
// 		</div>

	

// </div>
// </>
// 	)
// 	}