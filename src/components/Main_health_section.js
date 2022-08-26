import React from "react";
import image from "../Images/videoPoster.png";
import videoDetails from "../Data/video-details.json";
import Videos from "../Data/videos.json";


function Main_health_section(){
    
    return (
        
        <section className="MainSection">
            {
                      
                      videoDetails && videoDetails.map(Videodetails => {
                        if(Videodetails.id === "b6f35f03-7936-409b-bd2a-446bcc5f30e7"){
                        return(
                              <div className="vid-container" key={Videodetails.id}>
                                  <video controls className="MainSection-video" poster={Videodetails.image} src={Videodetails.video}></video>
                              </div>
                          )
                        }
                      
                      })
                  }
            
        </section>
    )
}

export default Main_health_section;