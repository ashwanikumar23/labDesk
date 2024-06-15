import { Button, Modal } from "antd";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import { MyComponent } from "../../../Pages/PDF/PdfLayout";
import GradientButton from "./gradientButton";
import CloseButton from "./closeButton";



export function PDFPreview({id}:any){
    const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const componentRef = useRef<HTMLDivElement | null>(null);

  const showModal = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };

//   const handlePrint = useReactToPrint({
//     content: () => componentRef.current,
//   });

//   const handleDownloadPDF = () => {
//     const input = componentRef.current;
//     if (input) {
//         html2canvas(input as HTMLElement)
//           .then((canvas) => {
//             const imgData = canvas.toDataURL("image/png");
//             const pdf = new jsPDF();
//             pdf.addImage(imgData, "PNG", 0, 0,canvas.width, canvas.height);
//             pdf.save("download.pdf");
//           })
//           .catch((error) => {
//             console.error("Error generating PDF", error);
//           });
//       }
//   };
const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    pageStyle: `
    @page {
      margin: 20mm; /* Adjust the margin as needed */
    }
    body {
      margin: 20mm; /* Ensure the body margin matches the page margin */
    }
  `,
  });

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 3000);
  };

  return (
    <>
      <GradientButton id={0} BtnName={" Preview"} clickEvent={showModal} />
      <Modal
        open={open}
        title="PRINT"
        onCancel={handleCancel}
        width={1000}
        footer={[
          <CloseButton  id={0} BtnName={"back"} clickEvent={handleCancel} />,
          // <Button key="back" style={{padding:'30px auto'}} onClick={handleCancel}>
          //   Close
          // </Button>,
          <GradientButton  id={0} BtnName={"Print"} clickEvent={handlePrint} />,
          <GradientButton  id={0} BtnName={" Download"} clickEvent={handlePrint} />,
          // <Button key="download" type="primary" >
          //   Download as PDF
          // </Button>,
        ]}
      >
        <div style={{  }}>
          <MyComponent id={id} ref={componentRef} />
        </div>
      </Modal>
    </>
  );
};
