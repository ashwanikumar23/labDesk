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
{/* <CompleteBloodCount />
<LftTable />
<KFTTable />
<PregnancyReportTable /> */}
<WidalSlideAgglutinationTest />
<LipidProfileTable />

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


export function LftTable() {
  return (
    <div className="lft-container">
      <h2>Liver Function Test (LFT)</h2>
      <table className="lft-table">
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
            <td>Serum</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td colSpan={4}><strong>AST (SGOT)</strong> <small>IFCC without PSP</small></td>
          </tr>
          <tr>
            <td>AST (SGOT)</td>
            <td>16.00</td>
            <td>15.00 - 40.00</td>
            <td>U/L</td>
          </tr>
          <tr>
            <td colSpan={4}><strong>ALT (SGPT)</strong> <small>IFCC without PSP</small></td>
          </tr>
          <tr>
            <td>ALT (SGPT)</td>
            <td className="high">100.50</td>
            <td>High 10.00 - 49.00</td>
            <td>U/L</td>
          </tr>
          <tr>
            <td>AST:ALT Ratio <small>Calculated</small></td>
            <td>0.50</td>
            <td>&lt;1.0</td>
            <td></td>
          </tr>
          <tr>
            <td>GGTP <small>IFCC</small></td>
            <td>10.20</td>
            <td>0 - 73</td>
            <td>U/L</td>
          </tr>
          <tr>
            <td colSpan={4}><strong>Alkaline Phosphatase (ALP)</strong> <small>IFCC-AMP</small></td>
          </tr>
          <tr>
            <td>Alkaline Phosphatase (ALP)</td>
            <td className="low">15.40</td>
            <td>Low 30.00 - 120.00</td>
            <td>U/L</td>
          </tr>
          <tr>
            <td colSpan={4}><strong>Bilirubin Total</strong> <small>DPD</small></td>
          </tr>
          <tr>
            <td>Bilirubin Total</td>
            <td>0.60</td>
            <td>0.30 - 1.20</td>
            <td>mg/dL</td>
          </tr>
          <tr>
            <td>Bilirubin Direct</td>
            <td>0.10</td>
            <td>&lt;0.3</td>
            <td>mg/dL</td>
          </tr>
          <tr>
            <td>Bilirubin Indirect</td>
            <td>0.50</td>
            <td>&lt;1.10</td>
            <td>mg/dL</td>
          </tr>
          <tr>
            <td>Total Protein <small>Biuret</small></td>
            <td>6.39</td>
            <td>5.70 - 8.20</td>
            <td>g/dL</td>
          </tr>
          <tr>
            <td>Albumin <small>BCG</small></td>
            <td>2.00</td>
            <td>3.20 - 4.80</td>
            <td>g/dL</td>
          </tr>
          <tr>
            <td>A : G Ratio <small>Calculated</small></td>
            <td>0.10</td>
            <td>0.90 - 2.00</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}



export function  KFTTable () {
  return (
    <div className="kft-container">
      <h2>Kidney Panel (KFT)</h2>
      <table className="kft-table">
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
            <td>Serum</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Urea <small>Urease UV</small></td>
            <td>15</td>
            <td>13 - 43</td>
            <td>mg/dL</td>
          </tr>
          <tr>
            <td>Creatinine <small>Modified Jaffe, Kinetic</small></td>
            <td className="high">1.5</td>
            <td>High 0.7 - 1.3</td>
            <td>mg/dL</td>
          </tr>
          <tr>
            <td>Uric Acid <small>Uricase</small></td>
            <td>5.5</td>
            <td>3.5 - 7.2</td>
            <td>mg/dL</td>
          </tr>
          <tr>
            <td>Calcium, Total <small>Arsenazo III</small></td>
            <td>10.2</td>
            <td>8.7 - 10.4</td>
            <td>mg/dL</td>
          </tr>
          <tr>
            <td>Phosphorus <small>Molybdate UV</small></td>
            <td className="low">1.4</td>
            <td>Low 2.4 - 5.1</td>
            <td>mg/dL</td>
          </tr>
          <tr>
            <td>Alkaline Phosphatase (ALP) <small>IFCC-AMP</small></td>
            <td>80</td>
            <td>30 - 120</td>
            <td>U/L</td>
          </tr>
          <tr>
            <td>Total Protein <small>Biuret</small></td>
            <td>5.9</td>
            <td>5.7 - 8.2</td>
            <td>g/dL</td>
          </tr>
          <tr>
            <td>Albumin <small>BCG</small></td>
            <td>4.1</td>
            <td>3.2 - 4.8</td>
            <td>g/dL</td>
          </tr>
          <tr>
            <td>Sodium <small>Indirect ISE</small></td>
            <td>139</td>
            <td>136 - 145</td>
            <td>mEq/L</td>
          </tr>
          <tr>
            <td>Potassium <small>Indirect ISE</small></td>
            <td>3.9</td>
            <td>3.5 - 5.1</td>
            <td>mEq/L</td>
          </tr>
          <tr>
            <td>Chloride <small>Indirect ISE</small></td>
            <td>100</td>
            <td>98 - 107</td>
            <td>mEq/L</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}



export function PregnancyReportTable () {
  return (
    <div className="report-container">
      <h2>Pregnancy Report</h2>
      <table className="report-table">
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
            <td>Beta hCG</td>
            <td className="positive">1500</td>
            <td>0 - 5</td>
            <td>mIU/mL</td>
          </tr>
          <tr>
            <td>Progesterone</td>
            <td>25</td>
            <td>9.7 - 47.8</td>
            <td>ng/mL</td>
          </tr>
          <tr>
            <td>Estradiol</td>
            <td>75</td>
            <td>0 - 50</td>
            <td>pg/mL</td>
          </tr>
          <tr>
            <td>AFP (Alpha-fetoprotein)</td>
            <td>30</td>
            <td>0 - 40</td>
            <td>ng/mL</td>
          </tr>
          <tr>
            <td>TSH</td>
            <td>2.5</td>
            <td>0.3 - 4.2</td>
            <td>uIU/mL</td>
          </tr>
          <tr>
            <td>Free T4</td>
            <td>1.2</td>
            <td>0.8 - 1.8</td>
            <td>ng/dL</td>
          </tr>
          <tr>
            <td>Free T3</td>
            <td>3.5</td>
            <td>2.3 - 4.2</td>
            <td>pg/mL</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}



export function WidalSlideAgglutinationTest () {
  return (
    <div className="widal-container">
      <h2>Widal Slide Agglutination Test</h2>
      <table className="widal-table">
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
            <td>Sample Type</td>
            <td>Serum (2 ml)</td>
            <td><strong>TAT :</strong> 8 Hr (Normal: 8 - 12 hrs)</td>
            <td></td>
          </tr>
          <tr>
            <td>Salmonella typhi O (TO)</td>
            <td className="non-reactive">Non-Reactive</td>
            <td>&gt; 1:80</td>
            <td>Titre</td>
          </tr>
          <tr>
            <td>Salmonella typhi H (TH)</td>
            <td className="non-reactive">Non-Reactive</td>
            <td>&gt; 1:160</td>
            <td>Titre</td>
          </tr>
          <tr>
            <td>Salmonella paratyphi A, H (AH)</td>
            <td className="non-reactive">Non-Reactive</td>
            <td>&gt; 1:320</td>
            <td>Titre</td>
          </tr>
          <tr>
            <td>Salmonella paratyphi B, H (BH)</td>
            <td className="non-reactive">Non-Reactive</td>
            <td>&gt; 1:320</td>
            <td>Titre</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}


export function LipidProfileTable() {
  return (
    <div className="lipid-profile-container">
      <h2>Lipid Profile</h2>
      <table className="lipid-profile-table">
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
            <td>Cholesterol Total <small>Spectrophotometry</small></td>
            <td className="high">250.00</td>
            <td>High &lt; 200.00</td>
            <td>mg/dL</td>
          </tr>
          <tr>
            <td>Triglycerides <small>Spectrophotometry</small></td>
            <td>100.00</td>
            <td>&lt; 150.00</td>
            <td>mg/dL</td>
          </tr>
          <tr>
            <td>HDL Cholesterol <small>Spectrophotometry</small></td>
            <td>50.00</td>
            <td>&gt; 40.00</td>
            <td>mg/dL</td>
          </tr>
          <tr>
            <td>LDL Cholesterol <small>Calculated</small></td>
            <td className="high">190.00</td>
            <td>High &lt; 100.00</td>
            <td>mg/dL</td>
          </tr>
          <tr>
            <td>VLDL Cholesterol <small>Calculated</small></td>
            <td>10.00</td>
            <td>&lt; 30.00</td>
            <td>mg/dL</td>
          </tr>
          <tr>
            <td>Non-HDL Cholesterol <small>Calc. HDL</small></td>
            <td>100.00</td>
            <td>&lt; 130.00</td>
            <td>mg/dL</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}


export function ThyroidProfileTable()  {
  return (
    <div className="thyroid-profile-container">
      <h2>Thyroid Profile, Total</h2>
      <table className="thyroid-profile-table">
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
            <td>T3, Total, Serum <small>CLIA</small></td>
            <td className="high">217.40</td>
            <td>High 80.00 - 200.00</td>
            <td>ng/dL</td>
          </tr>
          <tr>
            <td>T4, Total, Serum <small>CLIA</small></td>
            <td className="high">13.60</td>
            <td>High 4.50 - 12.50</td>
            <td>mcg/dL</td>
          </tr>
          <tr>
            <td>TSH <small>CLIA</small></td>
            <td className="high">10.10</td>
            <td>High 0.40 - 4.00</td>
            <td>mU/L</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}



















