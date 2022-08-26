import React from "react";
import image from "../Images/videoPoster.png";
import videoDetails from "../Data/video-details.json";
import Videos from "../Data/videos.json";


function MainSection(){
    
    return (
        
        <section className="MainSection">
            {
                      
                      videoDetails && videoDetails.map(Videodetails => {
                          if(Videodetails.id === "84e96018-4022-434e-80bf-000ce4cd12b8"){
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

export default MainSection;