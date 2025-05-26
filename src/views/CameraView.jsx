import React, { useEffect, useRef, useState } from 'react';
import { startCamera, captureImage } from '../presenter/cameraPresenter';

const CameraView = ({ onCapture }) => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    startCamera(videoRef, setError);
  }, []);

  const handleCapture = () => {
    const imageBase64 = captureImage(videoRef, canvasRef);
    if (imageBase64) {
      onCapture(imageBase64);
    }
  };

  return (
    <div className="text-center space-y-4">
      {error && <p className="text-red-500">{error}</p>}
      <video ref={videoRef} autoPlay className="w-full max-w-md mx-auto rounded-xl border" />
      <button onClick={handleCapture} className="bg-black text-white px-4 py-2 rounded hover:bg-gray-700">
        Ambil Foto
      </button>
      <canvas ref={canvasRef} style={{ display: 'none' }} />
    </div>
  );
};

export default CameraView;
