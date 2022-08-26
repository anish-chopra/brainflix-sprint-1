import React from "react";
import image from "../Images/videoPoster.png";
import videoDetails from "../Data/video-details.json";
import Videos from "../Data/videos.json";


function Main_travel_section(){
    
    return (
        
        <section className="MainSection">
            {
                      
                      videoDetails && videoDetails.map(Videodetails => {
                        if(Videodetails.id === "c05b9a93-8682-4ab6-aff2-92ebb4bbfc14"){
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

export default Main_travel_section;