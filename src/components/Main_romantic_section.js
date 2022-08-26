import React from "react";
import image from "../Images/videoPoster.png";
import videoDetails from "../Data/video-details.json";
import Videos from "../Data/videos.json";


function Main_romantic_section(){
    
    return (
        
        <section className="MainSection">
            {
                      
                      videoDetails && videoDetails.map(Videodetails => {
                        if(Videodetails.id === "9c268c0a-83dc-4b96-856a-bb5ded2772b1"){
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

export default Main_romantic_section;