import IHBA1c2 from "./ IHBA1c2";
import IBio from "./IBio";
import ICBC from "./ICBC";
import ICULTURE from "./ICULTURE";
import IDRUG from "./IDRUG";
import IElectrolyte from "./IElectrolyte";
import IFluid from "./IFluid";
import IGTT from "./IGTT";
import IHAEMATOLOGY from "./IHAEMATOLOGY";
import IHBA1c1 from "./IHBA1c1";
import IIRON from "./IIRON";
import ILFT from "./ILFT";
import ILIPID from "./ILIPID";
import IPBF from "./IPBF";
import IPREG from "./IPREG";
import ISEROLOGY from "./ISEROLOGY";
import ISpecial from "./ISpecial";
import IStool from "./IStool";
import IThyroid from "./IThyroid";
import IURINE from "./IURINE";
import IWADAL from "./IWADAL";

export default interface IEnterForm {
    id:number
    name: string;
    DATE: string;
    ReciveData: string;
    time: string;
    Receivtime:string
    prefix: string;
    LabNO: string;
    Gender: string;
    Age: string;
    Address: string;
    materials:string;
    Reference:string;
    M_no: string;
    HAEMATOLOGY?: IHAEMATOLOGY;
    BIO?: IBio;
    CULTURE?: ICULTURE;
    IRON?: IIRON;
    URINE?: IURINE;
    Wadal?: IWADAL;
    PREG?: IPREG;
    HBA1c1?: IHBA1c1;
    GTT?:IGTT;
    LIPID?:ILIPID;

    HBA1c2?: IHBA1c2;

    PBF?: IPBF;
    SPECIAL?: ISpecial;
    THYROID?: IThyroid;
    SEROLOGY?: ISEROLOGY;
    FLUID?: IFluid;
    DRUGABUSE?: IDRUG;
    LFT?: ILFT;
    SEMEN?: ISEROLOGY;
    ELECTROLYTES?: IElectrolyte;
    CBC?: ICBC;
    STOOL?: IStool;

}

export interface RenalFunctionTest {
    Print: boolean,
    Comments: boolean,
    RFT: string;
    urea: string;
    Creatinine: string;
    BUN: string;
    S_Uric_Acid: string;
    Serum_Protein: string;
    Albumin: string;
    Globulin: string;
    AG_Ratio: string;
    eGFR: string;
}



  
  
  
  
  





