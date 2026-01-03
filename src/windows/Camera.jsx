/* eslint-disable react-hooks/set-state-in-effect */
'use client'

import { useEffect, useRef, useState } from 'react'
import WindowWrapper from '#hoc/WindowWrapper'
import { WindowControls } from '#components'
import { Camera as CameraIcon } from 'lucide-react'

const Camera = ({ dockRefs }) => {
  const videoRef = useRef(null)
  const streamRef = useRef(null)
  const [error, setError] = useState(null)
  const [captured, setCaptured] = useState(null)
  const canvasRef = useRef(null)

  // Start camera
  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'user' },
        audio: false,
      })
      streamRef.current = stream
      if (videoRef.current) videoRef.current.srcObject = stream
    } catch  {
      setError('Camera access denied')
    }
  }

  useEffect(() => {
    startCamera()
    return () => {
      streamRef.current?.getTracks().forEach(t => t.stop())
    }
  }, [])

  const capturePhoto = () => {
    const video = videoRef.current
    if (!video) return
    const canvas = canvasRef.current
    canvas.width = video.videoWidth
    canvas.height = video.videoHeight
    const ctx = canvas.getContext('2d')
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height)
    const dataUrl = canvas.toDataURL('image/png')
    setCaptured(dataUrl)
  }

  const savePhoto = () => {
    if (!captured) return
    const a = document.createElement('a')
    a.href = captured
    a.download = 'photo.png'
    a.click()
    // alert('Photo saved! You can take another one.')
    setCaptured(null)
    startCamera()
  }

  const retakePhoto = () => {
    setCaptured(null)
    startCamera()
  }

  return (
    <>
      {/* Header */}
      <div id="window-header" className="flex items-center  px-2 py-1">
        <WindowControls target="camera" dockRefs={dockRefs} />
        <CameraIcon className="ml-2 w-4 h-4 opacity-70" />
        <span className="ml-2 text-sm font-medium">Camera</span>
      </div>

      {/* Body */}
      <div className="bg-black h-full w-full flex items-center justify-center relative">
        {error && <p className="text-red-400 text-sm">{error}</p>}

        {!captured ? (
          <>
            <video
              ref={videoRef}
              autoPlay
              playsInline
              muted
              className="w-full h-full object-cover"
            />
            {/* Capture Button */}
            <button
              onClick={capturePhoto}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center hover:scale-105 transition-transform"
            >
              <div className="w-8 h-8 bg-red-500 rounded-full" />
            </button>
          </>
        ) : (
          <>
            {/* Preview */}
            <img src={captured} alt="Preview" className="w-full h-full object-cover" />

            {/* Buttons */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-4">
              <button
                onClick={savePhoto}
                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 cursor-pointer"
              >
                Save
              </button>
              <button
                onClick={retakePhoto}
                className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 cursor-pointer"
              >
                Retake
              </button>
            </div>
          </>
        )}

        <canvas ref={canvasRef} className="hidden" />
      </div>
    </>
  )
}

const CameraWrapper = WindowWrapper(Camera, 'camera',{height:"32rem"})
export default CameraWrapper
