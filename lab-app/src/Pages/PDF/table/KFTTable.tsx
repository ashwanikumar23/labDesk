import { useSelector } from "react-redux";
import { valueOFKFT } from "../../../shared/Store/dataSlice";

export function KFTTable(id:any) {
    // const {id}=props;
    const  LFTData = useSelector(valueOFKFT(id.id));
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
              <td>{LFTData?.urea}</td>
              <td>13 - 43</td>
              <td>mg/dL</td>
            </tr>
            <tr>
              <td>Creatinine <small>Modified Jaffe, Kinetic</small></td>
              <td className="high">{LFTData?.Creatinine}</td>
              <td>High 0.7 - 1.3</td>
              <td>mg/dL</td>
            </tr>
            <tr>
              <td>Uric Acid <small>Uricase</small></td>
              <td>{LFTData?.S_Uric_Acid}</td>
              <td>3.5 - 7.2</td>
              <td>mg/dL</td>
            </tr>
            <tr>
              <td>Calcium, Total <small>Arsenazo III</small></td>
              <td>{"  "}</td>
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
              <td>{" "}</td>
              <td>30 - 120</td>
              <td>U/L</td>
            </tr>
            <tr>
              <td>Total Protein <small>Biuret</small></td>
              <td>{LFTData?.SerumProtein}</td>
              <td>5.7 - 8.2</td>
              <td>g/dL</td>
            </tr>
            <tr>
              <td>Albumin <small>BCG</small></td>
              <td>{LFTData?.Albumin}</td>
              <td>3.2 - 4.8</td>
              <td>g/dL</td>
            </tr>
            <tr>
              <td>Sodium <small>Indirect ISE</small></td>
              <td>{" "}</td>
              <td>136 - 145</td>
              <td>mEq/L</td>
            </tr>
            <tr>
              <td>Potassium <small>Indirect ISE</small></td>
              <td>{" "}</td>
              <td>3.5 - 5.1</td>
              <td>mEq/L</td>
            </tr>
            <tr>
              <td>Chloride <small>Indirect ISE</small></td>
              <td>{" "}0</td>
              <td>98 - 107</td>
              <td>mEq/L</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }