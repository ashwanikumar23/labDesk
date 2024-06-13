import { Col, Divider, Row } from "antd";
import './style.css'


const val = "end";

export default function App() {
  return (
    <>
    <div className="header-container">
      <div className="flex">
      <div className="logo" style={{width:'20%'}}>
          <img src="path-to-logo-image" alt="Pb Logo" />
      </div>
      <div className="header-content" style={{display:'flex',gap:"2px",textAlign:'left'}}>
        <div style={{padding:'10px 0px',width:'70%'}}>
          <h1>DRLOGY <span>PATHOLOGY LAB</span></h1>
          <p>Accurate | Caring | Instant</p>

        </div>
          <div className="" style={{width:"30%",textAlign:"left",justifyContent:"left"}}>
              <div className="contact-item" style={{width:'100%' ,fontSize:"14px", textAlign:'left'}}>
              <svg aria-hidden="true" focusable="false" className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em"><path d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"/></svg>
                  <span>0123456789 | 0912345678</span>
              </div>
              <br/>
              <div className="" style={{width:'100%',fontSize:"14px",textAlign:'left'}}>
                  <img src="email-icon-path" alt="Email Icon" />
                  <span>samplemaile.com</span>
              </div>
          </div>
        
      </div>

      </div>
  <p style={{textAlign:'center',fontSize:'12px'}}>105-108, SMART VISION COMPLEX, HEALTHCARE ROAD, OPPOSITE HEALTHCARE COMPLEX, MUMBAI - 689578</p>
</div>
<div style={{backgroundColor: 'white' }}>
    <div style={{display:'flex',gap:"2px", backgroundColor: 'white' ,width:'90%',margin:'0px auto'}}>
      <div style={{width:'33%', borderRight:'1px solid black' ,padding:'2px 5px'}}>
      <p><strong>Yash M. Patel</strong></p>
            <p>Age : 21 Years</p>
            <p>Sex : Male</p>
            <p>PID : 555</p>
      </div>
      <div style={{width:'33%',borderRight:'1px solid black',padding:'2px 5px'}}>
      <p><strong>Sample Collected At:</strong></p>
            <p>125, Shivam Bungalow, S G Road, Mumbai</p>
            <p>Ref. By: <strong>Dr. Hiren Shah</strong></p>
      </div>
      <div style={{width:'33%',padding:'2px 5px'}}>
      <p>Registered on: 02:31 PM 02 Dec, 2X</p>
            <p>Collected on: 03:11 PM 02 Dec, 2X</p>
            <p>Reported on: 04:35 PM 02 Dec, 2X</p>
      </div>

    </div>
    <hr/>
<CompleteBloodCount />

</div>
    </>
  );
}

function TableData() {
  return (
    <>
      <Row gutter={24} style={{ marginTop: '2px', padding: '1px 0px', alignItems: 'center', width: '99%', margin: "0px auto" }}>
        <Col span={15}>
          <Row gutter={24}>
            <Col span={12}><span style={{ textTransform: "capitalize" }}>Hb</span></Col>
            <Col span={12}><span style={{ textTransform: 'capitalize' }}>10.8</span></Col>
          </Row>
        </Col>
        <Col span={9}>
          <Row gutter={24}>
            <Col span={12}><span style={{ textTransform: 'capitalize' }}>gm/dl</span></Col>
            <Col span={12} style={{ textAlign: 'end', textTransform: 'capitalize' }}><span>11.14</span></Col>
          </Row>
        </Col>
      </Row>
    </>
  )
}


export function CompleteBloodCount (){
  return (
    <div className="cbc-container">
      <h2>Complete Blood Count (CBC)</h2>
      <table className="cbc-table">
        <thead>
          <tr>
            <th>Investigation</th>
            <th>Result</th>
            <th>Reference Value</th>
            <th>Unit</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Primary Sample Type :</td>
            <td>Blood</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td colSpan={4}><strong>HEMOGLOBIN</strong></td>
          </tr>
          <tr>
            <td>Hemoglobin (Hb)</td>
            <td className="low">12.5</td>
            <td>Low 13.0 - 17.0</td>
            <td>g/dL</td>
          </tr>
          <tr>
            <td colSpan={4}><strong>RBC COUNT</strong></td>
          </tr>
          <tr>
            <td>Total RBC count</td>
            <td>5.2</td>
            <td>4.5 - 5.5</td>
            <td>mill/cumm</td>
          </tr>
          <tr>
            <td colSpan={4}><strong>BLOOD INDICES</strong></td>
          </tr>
          <tr>
            <td>Packed Cell Volume (PCV)</td>
            <td className="high">57.5</td>
            <td>High 40 - 50</td>
            <td>%</td>
          </tr>
          <tr>
            <td>Mean Corpuscular Volume (MCV)</td>
            <td>87.75</td>
            <td>83 - 101</td>
            <td>fL</td>
          </tr>
          <tr>
            <td>MCH <small>Calculated</small></td>
            <td>27.2</td>
            <td>27 - 32</td>
            <td>pg</td>
          </tr>
          <tr>
            <td>MCHC <small>Calculated</small></td>
            <td>32.8</td>
            <td>32.5 - 34.5</td>
            <td>g/dL</td>
          </tr>
          <tr>
            <td>RDW</td>
            <td>13.6</td>
            <td>11.6 - 14.0</td>
            <td>%</td>
          </tr>
          <tr>
            <td colSpan={4}><strong>WBC COUNT</strong></td>
          </tr>
          <tr>
            <td>Total WBC count</td>
            <td>9000</td>
            <td>4000 - 11000</td>
            <td>cumm</td>
          </tr>
          <tr>
            <td colSpan={4}><strong>DIFFERENTIAL WBC COUNT</strong></td>
          </tr>
          <tr>
            <td>Neutrophils</td>
            <td>60</td>
            <td>50 - 62</td>
            <td>%</td>
          </tr>
          <tr>
            <td>Lymphocytes</td>
            <td>31</td>
            <td>20 - 40</td>
            <td>%</td>
          </tr>
          <tr>
            <td>Eosinophils</td>
            <td>1</td>
            <td>00 - 06</td>
            <td>%</td>
          </tr>
          <tr>
            <td>Monocytes</td>
            <td>7</td>
            <td>00 - 10</td>
            <td>%</td>
          </tr>
          <tr>
            <td>Basophils</td>
            <td>1</td>
            <td>00 - 02</td>
            <td>%</td>
          </tr>
          <tr>
            <td colSpan={4}><strong>PLATELET COUNT</strong></td>
          </tr>
          <tr>
            <td>Platelet Count</td>
            <td className="borderline">150000</td>
            <td>Borderline 150000 - 410000</td>
            <td>cumm</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}


