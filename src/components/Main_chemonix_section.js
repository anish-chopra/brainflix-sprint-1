import React from "react";
import image from "../Images/videoPoster.png";
import videoDetails from "../Data/video-details.json";
import Videos from "../Data/videos.json";


function Main_chemonix_section(){
    
    return (
        
        <section className="MainSection">
            {
                      
                      videoDetails && videoDetails.map(Videodetails => {
                        if(Videodetails.id === "25ce5d91-a262-4dcf-bb87-42b87546bcfa"){
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

export default Main_chemonix_section;