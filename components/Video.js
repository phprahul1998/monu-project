"use client";
import { useEffect, useState,useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { FaVolumeMute} from "react-icons/fa";
import { VscUnmute } from "react-icons/vsc";

export default function Video() {
  const { t, i18n } = useTranslation("en", { useSuspense: false });
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
    }
  };

 
  return (
    <main  className="project-area area-padding imagegallery">
        <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-12 col-xl-12 col-sm-12 col-xs-12 vc" >
          <button
          className="readMorebtn playbtn"
              onClick={toggleMute}
            >
<div style={{ display: "flex", alignItems: "center" }}>
  {isMuted ? <FaVolumeMute /> : <VscUnmute />}
  <span>{isMuted ? ' UN-MUTE' : ' MUTE'}</span>
</div>            </button>
          <video  ref={videoRef}  autoPlay muted={isMuted} loop    playsinline controls={false} controlsList="nodownload" style={{ display: "block", width: "100%"}}>
          <source src="/video.mp4" />
          Your browser does not support the video tag...
        </video>
          </div>
          </div>
          </div>
    </main>
  );
}
