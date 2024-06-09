'use client';

import React, { useEffect, useRef, useState } from 'react';

type Props = { className?: string };

const VideoSection = (props: Props) => {
  const [loading, setLoading] = useState(true);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null); // Create a reference for the video element

  const openMediaDevices = async (constraints: MediaStreamConstraints) => {
    return await navigator.mediaDevices.getUserMedia(constraints);
  };

  useEffect(() => {
    try {
      const fetchStream = async () => {
        const mediaStream = await openMediaDevices({
          audio: true,
          video: true,
        });
        console.log('Got MediaStream:', mediaStream);
        setStream(mediaStream);
        setLoading(false);
      };
      fetchStream();
    } catch (error) {
      console.error('Error accessing media devices.', error);
      // Handle error gracefully, maybe set an error state to display to the user
    }

    // Cleanup function
    return () => {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  // Check if stream and videoRef exist before setting srcObject
  useEffect(() => {
    if (stream && videoRef.current) {
      videoRef.current.srcObject = stream;
    }
  }, [stream]);

  return (
    <div className={props.className}>
      {loading ? (
        <div className="relative flex items-center justify-center h-full">
          <div className="w-12 h-12 rounded-full animate-spin border border-solid border-cyan-500 border-t-transparent"></div>
        </div>
      ) : (
        <video ref={videoRef} preload="auto" autoPlay></video>
      )}
    </div>
  );
};

export default VideoSection;
