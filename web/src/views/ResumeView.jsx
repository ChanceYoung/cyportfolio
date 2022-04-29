import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
import ChanceYoungResume from '../Assets/ChanceYoungResume.pdf'
import { useState } from 'react'

const ResumeView = () => {
    const [numPages, setNumPages] = useState(null)
    const [pageNumber, setPageNumber] = useState(1)

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages)
    }

    return (
        <div className="container">
            <div className="d-flex justify-content-center bg-secondary rounded">
                <Document
                    className="pt-4"
                    file={ChanceYoungResume}
                    onLoadSuccess={onDocumentLoadSuccess}
                >
                    <Page pageNumber={pageNumber} />
                </Document>
            </div>
        </div>
    )
}

export default ResumeView
