import { Button, Modal } from "antd";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import { MyComponent } from "../../../Pages/PDF/PdfLayout";
import GradientButton from "./gradientButton";



export function PDFPreview(){
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
      {/* <Button type="primary" onClick={showModal}>
        Preview
      </Button> */}
      <GradientButton id={0} BtnName={" Preview"} clickEvent={showModal} />
      <Modal
        open={open}
        title="PRINT"
        onCancel={handleCancel}
        width={1000}
        footer={[
          <Button key="back" style={{padding:'30px auto'}} onClick={handleCancel}>
            Close
          </Button>,
          <GradientButton  id={0} BtnName={"Print"} clickEvent={handlePrint} />,
          <Button key="download" type="primary" >
            Download as PDF
          </Button>,
        ]}
      >
        <div style={{  }}>
          <MyComponent ref={componentRef} />
        </div>
      </Modal>
    </>
  );
};
