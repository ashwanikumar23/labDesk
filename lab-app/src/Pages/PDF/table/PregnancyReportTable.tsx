

export function PregnancyReportTable() {
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
  