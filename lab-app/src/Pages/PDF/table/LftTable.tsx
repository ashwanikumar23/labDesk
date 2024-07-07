import { useSelector } from "react-redux";
import ILFT from "../../../shared/Interface/ILFT";
import { valueOfLFT } from "../../../shared/Store/dataSlice";
import { useEffect } from "react";






export function LftTable(id: any,data:ILFT) {
    const  LFTData = useSelector(valueOfLFT(id.id));
    console.log('LFTdataPrint',data);
    useEffect(()=>{
  
    },[LFTData]);
  
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
              <td>{LFTData !== undefined ? LFTData.SGOT : ''}</td>
              <td>15.00 - 40.00</td>
              <td>U/L</td>
            </tr>
            <tr>
              <td colSpan={4}><strong>ALT (SGPT)</strong> <small>IFCC without PSP</small></td>
            </tr>
            <tr>
              <td>ALT (SGPT)</td>
              <td className="high">{LFTData !== undefined ? LFTData.SGPT : ''}</td>
              <td>High 10.00 - 49.00</td>
              <td>U/L</td>
            </tr>
            <tr>
              <td>AST:ALT Ratio <small>Calculated</small></td>
              <td>{LFTData !== undefined ? Number(LFTData.SGOT)/Number(LFTData.SGPT) : ''}</td>
              <td>&lt;1.0</td>
              <td></td>
            </tr>
            {/* <tr>
              <td>GGTP <small>IFCC</small></td>
              <td>10.20</td>
              <td>0 - 73</td>
              <td>U/L</td>
            </tr> */}
            <tr>
              <td colSpan={4}><strong>Alkaline Phosphatase (ALP)</strong> <small>IFCC-AMP</small></td>
            </tr>
            <tr>
              <td>Alkaline Phosphatase (ALP)</td>
              <td className="low">{LFTData !== undefined ? LFTData.SAlkalinePhosphatase : ''}</td>
              <td>Low 30.00 - 120.00</td>
              <td>U/L</td>
            </tr>
            <tr>
              <td colSpan={4}><strong>Bilirubin Total</strong> <small>DPD</small></td>
            </tr>
            <tr>
              <td>Total Bilirubin</td>
              <td>{LFTData !== undefined ? LFTData.TotalBilirubin : ''}</td>
              <td>0.30 - 1.20</td>
              <td>mg/dL</td>
            </tr>
            <tr>
              <td>Bilirubin Direct</td>
              <td>{LFTData !== undefined ? LFTData.ConjBilirubin : ''}</td>
              <td>&lt;0.3</td>
              <td>mg/dL</td>
            </tr>
            <tr>
              <td>Bilirubin Indirect</td>
              <td>{LFTData !== undefined ? LFTData.UnConjBilirubin : ''}</td>
              <td>&lt;1.10</td>
              <td>mg/dL</td>
            </tr>
            <tr>
              <td>Serum Protein <small></small></td>
              <td>{LFTData !== undefined ? LFTData.SerumProtein : ''}</td>
              <td>5.70 - 8.20</td>
              <td>g/dL</td>
            </tr>
            <tr>
              <td>Albumin </td>
              <td>{LFTData !== undefined ? LFTData.Albumin : ''}</td>
              <td>3.20 - 4.80</td>
              <td>g/dL</td>
            </tr>
            <tr>
              <td>A : G Ratio <small>Calculated</small></td>
              <td>{LFTData !== undefined ? LFTData.AGRatio : ''}</td>
              <td>0.90 - 2.00</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }