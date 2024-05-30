import { Col, Divider, Row } from "antd";


const val = "end";

export default function App() {
  return (
    <div style={{ padding: "0px 22px" }}>
      {/* header */}
      <Divider />
      <div style={{ border: 'solid 1.1px black', padding: '10px' }}>
        <Row gutter={24}>
          <Col span={12}>Report No: <strong>RN123</strong> </Col>
          <Col span={12} style={{ textAlign: val, paddingRight: '10px' }}>Collection Date: <strong>23/09/2022</strong> </Col>
        </Row>
        <Row gutter={24}>
          <Col span={12}>Name: <strong>Rohan Raj</strong> </Col>
          <Col span={12} style={{ textAlign: val, paddingRight: '10px' }}>Date: <strong>23/09/2022</strong></Col>
        </Row>
        <Row gutter={24}>
          <Col span={12}>Age: <strong>23</strong></Col>
          <Col span={12} style={{ textAlign: val, paddingRight: '10px' }}>Sample Type: <strong>Blood</strong></Col>
        </Row>
        <Row gutter={24}>
          <Col span={12}>Referred By: <strong>Dr RAM</strong></Col>
          <Col span={12} style={{ textAlign: val, paddingRight: '10px' }}></Col>
        </Row>
      </div>
      {/* <Divider /> */}
      {/* body */}
      <div>
        <Row gutter={24} style={{ marginTop: '5px' }} >
          <Col span={24}><div style={{ textAlign: 'center', padding: '4px 10px', border: 'solid 1.1px black' }} ><strong >Report</strong></div></Col>
        </Row>
        <Row gutter={24} style={{ marginTop: '2px', padding: '1px 0px', alignItems: 'center', width: '99%', margin: "0px auto", border: "solid 1.1px black" }}>
          <Col span={15}>
            <Row gutter={24}>
              <Col span={12}><strong style={{ textTransform: 'uppercase' }}>Test Description</strong></Col>
              <Col span={12}><strong style={{ textTransform: 'uppercase' }}>Observation Value</strong></Col>
            </Row>
          </Col>
          <Col span={9}>
            <Row gutter={24}>
              <Col span={12}><strong style={{ textTransform: 'uppercase' }}>units</strong></Col>
              <Col span={12} style={{ textAlign: 'end', textTransform: 'uppercase' }}><strong>Reference Value</strong></Col>
            </Row>
          </Col>
        </Row>
      </div>
      <div>
        <Row gutter={24} style={{ marginTop: '5px' }} >
          <Col span={24}><div style={{ textAlign: 'center', padding: '4px 10px' }} ><span style={{ fontWeight: '400' }}>-------CBC--------</span></div></Col>
        </Row>
        <TableData />
        <TableData />
        <Row gutter={24} style={{ marginTop: '5px' }} >
        <Col span={15}>
          <Row gutter={24}>
            <Col span={12}><span style={{ textTransform: "capitalize",paddingLeft:'18px' }}>DLC</span></Col>
            {/* <Col span={12}><span style={{ textTransform: 'capitalize' }}>10.8</span></Col> */}
          </Row>
        </Col>
        <Col span={9}>
          {/* <Row gutter={24}>
            <Col span={12}><span style={{ textTransform: 'capitalize' }}>gm/dl</span></Col>
            <Col span={12} style={{ textAlign: 'end', textTransform: 'capitalize' }}><span>11.14</span></Col>
          </Row> */}
        </Col>
        </Row>
        <div style={{ paddingLeft:"8px" }}>
          <TableData />
          <TableData />
          <TableData />
          <TableData />
          <TableData />
        </div>
        <TableData />
        <TableData />
        <TableData />
      </div>
      <div>
        <Row gutter={24} style={{ marginTop: '5px' }} >
          <Col span={24}><div style={{ textAlign: 'center', padding: '4px 10px' }} ><span style={{ fontWeight: '400' }}>-------CBC--------</span></div></Col>
        </Row>
        <TableData />
        <TableData />
        <Row gutter={24} style={{ marginTop: '5px' }} >
        <Col span={15}>
          <Row gutter={24}>
            <Col span={12}><span style={{ textTransform: "capitalize",paddingLeft:'18px' }}>DLC</span></Col>
            {/* <Col span={12}><span style={{ textTransform: 'capitalize' }}>10.8</span></Col> */}
          </Row>
        </Col>
        <Col span={9}>
          {/* <Row gutter={24}>
            <Col span={12}><span style={{ textTransform: 'capitalize' }}>gm/dl</span></Col>
            <Col span={12} style={{ textAlign: 'end', textTransform: 'capitalize' }}><span>11.14</span></Col>
          </Row> */}
        </Col>
        </Row>
        <div style={{ paddingLeft:"8px" }}>
          <TableData />
          <TableData />
          <TableData />
          <TableData />
          <TableData />
        </div>
        <TableData />
        <TableData />
        <TableData />
      </div>
      {/* footer */}
      <div></div>
    </div>
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