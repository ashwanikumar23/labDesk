import IEnterForm from "./All-interface";

export default interface Idailog{
    id:number,
    disabled?:boolean,
    patientData:IEnterForm,
    saveDataEvent?:any
  }
  