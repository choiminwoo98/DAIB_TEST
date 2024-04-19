import React, { useEffect, useState } from "react";

const DownLoad = () => {
  const [downloaded, setDownloaded] = useState(false);

  useEffect(() => {
    const downloadPDF = async () => {
      const pdfPath = process.env.PUBLIC_URL + "/example.pdf";
      const response = await fetch(pdfPath);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "example.pdf";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);

      setDownloaded(true);
    };

    downloadPDF();
  }, []);

  const handleClose = () => {
    window.close();
  };

  return (
    <div>
      {downloaded ? (
        <div>
          <h1>PDF Downloaded Successfully!</h1>
          <p>
            Click <button onClick={handleClose}>here</button> to close this
            page.
          </p>
        </div>
      ) : (
        <h1>Downloading PDF...</h1>
      )}
    </div>
  );
};

export default DownLoad;
