import {Link} from 'react-router-dom';
import cv from '../assets/cv_sample.pdf';

const Download = () => {

    const handleDownload = () => {
        const pdfURL = cv;
        const link = document.createElement('a');
        link.href = pdfURL;
        link.download = "test-cv.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

  return (
    <>
        <button onClick={handleDownload}>Download CV</button>
    </>
  )
}

export default Download;