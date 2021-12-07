import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import ChanceYoungResume from '../Assets/ChanceYoungResume.pdf' 
import { useState } from 'react';

const ResumeView = () => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
  
    function onDocumentLoadSuccess({ numPages }) {
      setNumPages(numPages);
    }
  
    return (
      <div>
        <Document
          file={ChanceYoungResume}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} />
        </Document>
        <p>Page {pageNumber} of {numPages}</p>
      </div>
    );
}

export default ResumeView
