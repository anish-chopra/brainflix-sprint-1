import React from "react";
import image from "../Images/videoPoster.png";
import videoDetails from "../Data/video-details.json";
import Videos from "../Data/videos.json";


function Main_accommodation_section(){
    
    return (
        
        <section className="MainSection">
            {
                      
                      videoDetails && videoDetails.map(Videodetails => {
                        if(Videodetails.id === "fc5261d1-58a0-47e4-9c19-2b7a1715fa1b"){
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

export default Main_accommodation_section;