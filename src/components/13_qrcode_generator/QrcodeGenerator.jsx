import "./qrcodeGenerator.css";
import { useEffect, useState } from "react";

// api link : https://api.qrserver.com/v1/create-qr-code/?data=textcomeshere&size=sizexsize&bgcolor=fff

const QrcodeGenerator = () => {
  const [text, setText] = useState("");
  const [temp, setTemp] = useState();
  const [qrCode, setQrCode] = useState(null);
  const [bgColor, setBgColor] = useState("ffffff");
  const [size, setSize] = useState(200);

  useEffect(() => {
    if (text) {
      const cleanColor = bgColor.replace("#", "");
      console.log(cleanColor);

      setQrCode(
        `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(text)}&size=${size}x${size}&bgcolor=${cleanColor}`,
      );
    }
  }, [text, size, bgColor]);

  const handleClick = async () => {
    setText(temp);
  };

  return (
    <div className="qrcode-container">
      <h1>Generate QR Code For Any Text</h1>
      <div className="text-container">
        <input
          type="text"
          placeholder="Type your text here..."
          className="qrcode-text"
          onChange={(e) => setTemp(e.target.value)}
        />
        <button onClick={handleClick}>Generate</button>
      </div>

      <div className="preferences-container">
        <div>
          <label htmlFor="color">Choose Background Color: </label>
          <input
            type="color"
            id="color"
            onChange={(e) => setBgColor(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="size">Choose QR Image Size: </label>
          <input
            type="range"
            id="size"
            min="200"
            max="600"
            value={size}
            onChange={(e) => setSize(e.target.value)}
          />
          <strong>{size}</strong>
        </div>
      </div>
      <div className="qrcode-img-container">
        {qrCode && (
          <img src={qrCode} alt="generated QR code" className="qrcode-img" />
        )}
      </div>
      {qrCode && <strong>QR code for: {text}</strong>}
    </div>
  );
};

export default QrcodeGenerator;
