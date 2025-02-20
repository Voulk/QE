import type { JSX, SetStateAction } from "react";
import { useCallback, useState, useEffect, lazy, Suspense } from "react";
import BrowserOnly from "@docusaurus/BrowserOnly";
import styles from "./style.module.css";

type PDFFile = string | File | null;

interface PdfEmbedProps {
    src: PDFFile;
}

// Lazy load react-pdf to avoid SSR conflicts
const Document = lazy(() => import("react-pdf").then((mod) => ({ default: mod.Document })));
const Page = lazy(() => import("react-pdf").then((mod) => ({ default: mod.Page })));

export default function PdfEmbed({ src }: PdfEmbedProps): JSX.Element {
    return (
        <BrowserOnly fallback={<div>Loading PDF...</div>}>
            {() => <PdfViewer src={src} />}
        </BrowserOnly>
    );
}

function PdfViewer({ src }: PdfEmbedProps) {
    const [numPages, setNumPages] = useState<number>();
    const [pageNumber, setPageNumber] = useState(1);
    const [searchText, setSearchText] = useState("");
    const [pdfWidth, setPdfWidth] = useState(800);

    // Ensure pdf.worker.min.mjs is set correctly
    useEffect(() => {
        import("react-pdf").then(({ pdfjs }) => {
            pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
        });

        function handleResize() {
            const calculatedWidth = getPDFWidth();
            setPdfWidth(calculatedWidth);
        }

        handleResize();

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
        setPageNumber(1);
    }

    function changePage(offset: number) {
        setPageNumber((prevPageNumber) => prevPageNumber + offset);
    }

    function getPDFWidth() {
        const screenWidth = window.innerWidth; // Get browser window width
        const minWidth = 400;
        const maxWidth = 800;

        // Calculate a responsive width (example logic)
        const calculatedWidth = Math.max(minWidth, Math.min(screenWidth - 50, maxWidth)); // Adjust 100 for margins

        return calculatedWidth;
    }

    return (
        <Suspense fallback={<div>Loading PDF Viewer...</div>}>
            <div className={styles.container}>
                <Document file={src} onLoadSuccess={onDocumentLoadSuccess}>
                    <div className={styles.documentViewer}>
                        <Page width={pdfWidth} 
                            pageNumber={pageNumber} 
                            renderAnnotationLayer={false}
                            renderTextLayer={false}
                            />
                    </div>
                </Document>
            </div>
        </Suspense>
    );
}
