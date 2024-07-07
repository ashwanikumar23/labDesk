import { useSelector } from "react-redux";
import { valueOfCBC } from "../../../shared/Store/dataSlice";



export function CompleteBloodCount(id: any) {
    const CBCData = useSelector(valueOfCBC(id.id));
    console.warn(id, "print", CBCData);
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
                    {CBCData?.HB ?
                        <>
                            <tr>
                                <td>Hemoglobin (Hb)</td>
                                <td className="low">{CBCData?.HB}</td>
                                <td>Low 13.0 - 17.0</td>
                                <td>g/dL</td>
                            </tr>
                        </>
                        :
                        <></>}

                    <tr>
                        <td colSpan={4}><strong>RBC COUNT</strong></td>
                    </tr>
                    {
                        CBCData?.TotalRBCCount ?
                            <>
                                <tr>
                                    <td>Total RBC count</td>
                                    <td>{CBCData?.TotalRBCCount}</td>
                                    <td>4.5 - 5.5</td>
                                    <td>mill/cumm</td>
                                </tr>
                            </>
                            :
                            <></>

                    }
                    <tr>
                        <td colSpan={4}><strong>BLOOD INDICES</strong></td>
                    </tr>
                    {
                        CBCData?.PCV ?
                            <>
                                <tr>
                                    <td>Packed Cell Volume (PCV)</td>
                                    <td className="high">{CBCData?.PCV}</td>
                                    <td>High 40 - 50</td>
                                    <td>%</td>
                                </tr>
                            </>
                            :
                            <></>
                    }

                    {
                        CBCData?.MCV ?
                            <>
                                <tr>
                                    <td>Mean Corpuscular Volume (MCV)</td>
                                    <td>{CBCData?.MCV}</td>
                                    <td>83 - 101</td>
                                    <td>fL</td>
                                </tr>
                            </>
                            :
                            <></>

                    }

                    {
                        CBCData?.MCH ?
                            <>
                                <tr>
                                    <td>MCH <small>Calculated</small></td>
                                    <td>{CBCData?.MCH}</td>
                                    <td>27 - 32</td>
                                    <td>pg</td>
                                </tr>

                            </>
                            :
                            <></>

                    }

                    {
                        CBCData?.MCHC ?
                            <>
                                <tr>
                                    <td>MCHC <small>Calculated</small></td>
                                    <td>{CBCData?.MCHC}</td>
                                    <td>32.5 - 34.5</td>
                                    <td>g/dL</td>
                                </tr>
                            </>
                            :
                            <></>

                    }


                    {
                        CBCData?.RDW_CV ?
                            <>
                                <tr>
                                    <td>RDW</td>
                                    <td>{CBCData?.RDW_CV}</td>
                                    <td>11.6 - 14.0</td>
                                    <td>%</td>
                                </tr>

                            </>
                            :
                            <></>

                    }



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
                        <td>{CBCData?.Lymphocytes}</td>
                        <td>20 - 40</td>
                        <td>%</td>
                    </tr>
                    <tr>
                        <td>Eosinophils</td>
                        <td>{CBCData?.Eosinophils}</td>
                        <td>00 - 06</td>
                        <td>%</td>
                    </tr>
                    <tr>
                        <td>Monocytes</td>
                        <td>{CBCData?.Monocytes}</td>
                        <td>00 - 10</td>
                        <td>%</td>
                    </tr>
                    <tr>
                        <td>Basophils</td>
                        <td>{CBCData?.Basophils}</td>
                        <td>00 - 02</td>
                        <td>%</td>
                    </tr>
                    <tr>
                        <td colSpan={4}><strong>PLATELET COUNT</strong></td>
                    </tr>
                    <tr>
                        <td>Platelet Count</td>
                        <td className="borderline">{CBCData?.Platelets}</td>
                        <td>Borderline 150000 - 410000</td>
                        <td>cumm</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}