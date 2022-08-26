import views from "../Images/views.svg";
import likes from "../Images/likes.svg";
import headerPic from "../Images/Mohan-muruge.jpg";
import icon from "../Images/add_comment.svg";
import videoDetails from "../Data/video-details.json";
import Videos from "../Data/videos.json";
import { Link } from "react-router-dom";


import React, { Component, useState, useEffect } from 'react'

     
 class Sub_romantic_section extends Component {

    

  
    state = {
        comment_count: 0,
        comment: "",
     }

    add = (e) =>{
        e.preventDefault();
        if(this.state.comment === ""){
            alert("Please enter a comment!");
        }
        else{
            console.log(this.state);
        }
    }

    

    
    

  render() {
    return (
        <section className='subSection'>
        <div className='subSection-comments'>
            

                         {    videoDetails && videoDetails.map(Videodetails1 => {
                            if(Videodetails1.id === "9c268c0a-83dc-4b96-856a-bb5ded2772b1"){
                                var date = new Date(Videodetails1.timestamp);
                            return(
                                
                                <div className='description'>
                                    <h1>{Videodetails1.title}</h1>
                                    <div className='description-header'>
                                        <div className="description-header-info">
                                            <span className='description-subheader'>{Videodetails1.channel}</span>
                                            <span className='description-spans'>{date.getMonth()+1 + "/" + date.getDate() + "/" + date.getFullYear()}</span>
                                        </div>

                                        <div className='description-header-icons'>
                                            <div>
                                                <img src={views} alt="views icon" className='description-span-icons' /> 
                                                <span className='description-spans'> {Videodetails1.views}</span>
                                            </div>

                                            <div>
                                                <img src={likes} alt="likes icon" className='description-span-icons likes' /> 
                                                <span className='description-spans'>{Videodetails1.likes}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='description-text'>
                                        <p>{Videodetails1.description}</p>
                                    </div>
                                </div>

                                
                            )
                            }
                        
                        })
                    }
                    
            <div className='comments-section'>
                <span className='description-subheader comments-heading'> 3 Comments</span>

                <div className='comments-input'>
                    <span className="search-container-image"> <img src={headerPic}/> </span>
                    <form onSubmit={this.add}>
                        <div>
                            <label className='comment-lbl'>JOIN THE CONVERSATION</label>
                            <br/>
                            <input type="text" id="comment" placeholder='Add a new comment' className='comment-inp' />
                        </div>
                        <button className='hero-btn2 form-btn'> <img src={icon} alt="icon"/> COMMENT </button>
                    </form>

                </div>

                <div className="all-comments">
                   

                    


                    {
                      
                        videoDetails && videoDetails.map(Videodetails => {
                            if(Videodetails.id === "9c268c0a-83dc-4b96-856a-bb5ded2772b1"){
                              
                            return(
                                <div key={Videodetails.id}>
                                    
                                    {Videodetails.comments && Videodetails.comments.map(comment => {
                                        var date = new Date(comment.timestamp);
                                        return(
                                            <div className="posted-comments" key={Videodetails.id}>
                       
                                            <span className="comment-container-image"></span>
                                            
                                        <div className="inner-posted-comments">
                                            <div className="inner-posted-date">
                                                <span className='description-subheader'>{comment.name}</span> 
                                                <span className="comment-date">{date.getMonth()+1 + "/"+date.getDate() + "/" +date.getFullYear()}</span> 
                                            </div>
                                            <br/>
                                            <p>{comment.comment}</p>
                                        </div>
                                    </div>
                                        )
                                    })}
                                
                                </div>
                                
                            )
                            }
                        
                        })
                    }
                    
                </div>
            </div>
        </div>

        <div className='subSection-videos'>
            <div className="next-vid-top">
                <p>Next Video</p>
                
            </div>
            <br/>
            <div className="next-videos">
                {
                    Videos && Videos.map(video => {

                        if(video.id !== "9c268c0a-83dc-4b96-856a-bb5ded2772b1"){
                            return(
                                <div className="next-video-section">
                                    <div className="next-video-img">
                                        <Link to={video.goTo} className="links-vid"><img src={video.image} className="next-img"/></Link>
                                    </div>

                                    <div className="next-video-description">
                                        <span className='next-vid-descrip'><Link to={video.goTo} className="links-vid"> {video.title} </Link> </span>
                                    
                                        <br/> 
                                        
                                        <span>{video.channel}</span>
                                    </div>
                                 </div>
                            )
                        }
                        
                    })
                }
                

            </div>
        </div>
        
    </section>
    )
  }
}



export default Sub_romantic_section;