import { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";
import { Button } from "./ui/button";

export const WebcamCapture = ({
  facingType,
}: {
  facingType: "user" | "environment";
}) => {
  const videoConstraints = {
    width: 1920,
    height: 1080,
    facingMode: facingType,
  };

  const webcamRef = useRef(null);
  const [url, setUrl] = useState("");
  const imageRef = useRef(null);

  const capture = useCallback(async () => {
    //@ts-ignore
    const imageSrc = webcamRef.current.getScreenshot();
    setUrl(imageSrc);
  }, [webcamRef]);

  const downloadImage = () => {
    const link = document.createElement("a");
    link.href = url;
    link.download = `${Date.now()}_image.jpeg`; // Customize filename (optional)
    link.click();
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <Webcam
        audio={false}
        height={1080}
        ref={webcamRef}
        width={1920}
        screenshotFormat="image/jpeg"
        videoConstraints={videoConstraints}
        screenshotQuality={1}
        className="my-5"
      />
      <Button
        onClick={capture}
        className="bg-[#007b83] text-white rounded-md shadow-md hover:bg-[#005a5f] px-6 py-3 text-sm md:px-8 md:py-4 md:text-base lg:px-10 lg:py-5 lg:text-lg"
      >
        Capture photo
      </Button>
      {url && (
        <div>
          <div className="my-2 font-semibold text-2xl">
            Click on the image to download
          </div>
          <img
            src={url}
            alt="image"
            ref={imageRef}
            onClick={downloadImage}
            className="cursor-pointer"
          />
        </div>
      )}
    </div>
  );
};
