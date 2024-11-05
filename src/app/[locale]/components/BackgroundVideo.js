// components/BackgroundVideo.js
import React from 'react';

const BackgroundVideo = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/videos/1.mp4" // ระบุเส้นทางไฟล์วิดีโอที่นี่
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="relative z-10 flex items-center justify-center h-full bg-black bg-opacity-50">
        <h1 className="text-white text-5xl font-bold">Welcome to Our Website</h1>
      </div>
    </div>
  );
};

export default BackgroundVideo;