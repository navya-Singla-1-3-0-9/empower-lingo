import React, { useState } from "react";
import '../components/css/profile.css'
import CircularProgress from '../components/circularProgress.js'
import NavBar from "../components/navbar";


const Profile=()=>{
    const importAll=(r)=> {
        let images = {};
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
        return images;
      }
      
      const images = importAll(require.context('../components/images/keys', false, /\.(png|jpe?g|svg)$/));
    const [name,setName]= useState(null);
    const [email,setEmail]= useState(null);
    const [prog,setProg]= useState(null);
    const [mastered,setMas]= useState([]);
React.useEffect(() => {
    fetch("/getuser")
      .then((res) => res.json())
      .then((data) => {
          setName(data.username);
          setEmail(data.email);
          setProg(parseInt(data.progress));
          setMas(data.mastered)
      });
  }, []);
//  console.log(prog)
  return(
      <div>
          <NavBar/>
    <div className="profile-pg">
        
        <div className="head">
            <img src="https://www.kindpng.com/picc/m/495-4952535_create-digital-profile-icon-blue-user-profile-icon.png" className="prof-img"/>
        </div>
        <div className="main-info">
            <h1>{name}</h1>
            <p>{email}</p>
           
        </div>
        {prog?<CircularProgress value={prog}/>:""}
        <div className="mastered">
            {
                mastered.map((sign)=>{
                    return(
                        <img src={images[`${sign}.jpg`].default}/>
                    );
              
                })
            }
        </div>
        </div>
    </div>
  );

}
export default Profile;