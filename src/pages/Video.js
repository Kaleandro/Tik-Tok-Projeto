import React, { useRef, useState } from "react";
import "./Video.css";
import VideoFooter from "./Componentes/Footer/VideoFooter";
import VideoSidebar from "./Componentes/Sidebar/VideoSidebar";


function Video({likes, messages, shares, name, description, music, url}) {
  const VideoRef = useRef(null);
  const [play, setPlay] = useState(false);

  function handdleStart() {
    if (play) {
      VideoRef.current.pause();
      setPlay(false);
    } else {
      VideoRef.current.play();
      setPlay(true);
    }
  }

  return (
    <div className="video">
      <video
        className="video__player"
        ref={VideoRef}
        onClick={handdleStart}
        loop
        src={url}
      ></video>

      <VideoSidebar 
      
      likes={likes}
      messages={messages}
      shares={shares}

      />
      
      <VideoFooter 
        name={name}
        description={description}
        music={music}
      
      />
    </div>
  );
}

export default Video;
