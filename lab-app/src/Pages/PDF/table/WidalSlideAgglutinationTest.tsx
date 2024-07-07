import { useSelector } from "react-redux";
import { valueOfWadal } from "../../../shared/Store/dataSlice";


export function WidalSlideAgglutinationTest(id:any) {
    const  wadal = useSelector(valueOfWadal(id.id));
    return (
      <div className="widal-container">
        <h2>Widal Slide Agglutination Test</h2>
        {/* <table className="widal-table">
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
              <td className="non-reactive">{wadal?.STYPHIH?wadal?.STYPHIO:""}</td>
              <td>&gt; 1:20</td>
              <td>Titre</td>
            </tr>
            <tr>
              <td>Salmonella typhi H (TH)</td>
              <td className="non-reactive">{wadal?.STYPHIH2?wadal?.STYPHIH:""}</td>
              <td>&gt; 1:160</td>
              <td>Titre</td>
            </tr>
            <tr>
              <td>Salmonella paratyphi A, H (AH)</td>
              <td className="non-reactive">{wadal?.STYPHIH2?wadal?.PARATYPHI:""}</td>
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
        </table> */}
        <table className="widal-table">
        <thead>
            <tr>
              <th>Investigation</th>
              <th>1:20</th>
              <th>1:40</th>
              <th>1:80</th>
              <th>1:160</th>
              <th>1:320</th>
              
            </tr>
          </thead>
          <tbody>
            <tr>
                <td>S.TYPHI "O" (TO)</td>
                <td>{wadal?.STYPHIO}</td>
                <td>{wadal?.STYPHIO2}</td>
                <td>{wadal?.STYPHIO3}</td>
                <td>{wadal?.STYPHIO4}</td>
                <td>{wadal?.STYPHIO5}</td>
            </tr>
            <tr>
                <td>S.TYPHI "H" (TH)</td>
                <td>{wadal?.STYPHIH}</td>
                <td>{wadal?.STYPHIH2}</td>
                <td>{wadal?.STYPHIH3}</td>
                <td>{wadal?.STYPHIH4}</td>
                <td>{wadal?.STYPHIH5}</td>
            </tr>
            <tr>
                <td>S.PARATYPHI "A" (H)</td>
                <td>{wadal?.PARATYPHI}</td>
                <td>{wadal?.PARATYPHI2}</td>
                <td>{wadal?.PARATYPHI3}</td>
                <td>{wadal?.PARATYPHI4}</td>
                <td>{wadal?.PARATYPHI5}</td>
            </tr>
            <tr>
                <td>S.PARATYPHI "B" (H)</td>
                <td>{wadal?.PARATYPHIB}</td>
                <td>{wadal?.PARATYPHIB2}</td>
                <td>{wadal?.PARATYPHIB3}</td>
                <td>{wadal?.PARATYPHIB4}</td>
                <td>{wadal?.PARATYPHIB5}</td>
            </tr>
          </tbody>

        </table>

      </div>
    );
  }