import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import IEnterForm from '../Interface/All-interface';
import IHAEMATOLOGY from '../Interface/IHAEMATOLOGY';
import IBio from '../Interface/IBio';
import ICULTURE from '../Interface/ICULTURE';
import IIRON from '../Interface/IIRON';
import IURINE from '../Interface/IURINE';
import IHBA1c2 from '../Interface/ IHBA1c2';
import ICBC from '../Interface/ICBC';
import IDRUG from '../Interface/IDRUG';
import IElectrolyte from '../Interface/IElectrolyte';
import IFluid from '../Interface/IFluid';
import IHBA1c1 from '../Interface/IHBA1c1';
import ILFT from '../Interface/ILFT';
import IPBF from '../Interface/IPBF';
import IPREG from '../Interface/IPREG';
import ISEROLOGY from '../Interface/ISEROLOGY';
import ISpecial from '../Interface/ISpecial';
import IStool from '../Interface/IStool';
import IThyroid from '../Interface/IThyroid';
import IWADAL from '../Interface/IWADAL';
import { RootState } from './store';
import IBIO from '../Interface/IBio';
import { IKFT } from '../Interface/IKFT';


const initialData: IEnterForm[] = [{
    name: 'sample 3',
    DATE: '',
    ReciveData: '',
    time: '',
    prefix: '',
    LabNO: '',
    Gender: '',
    Age: '',
    Address: '',
    M_no: '',
    materials: '',
    Reference: '',
    HAEMATOLOGY: {} as IHAEMATOLOGY, // Initialize with empty object or default values
    BIO: {} as IBIO, // Initialize with empty object or default values
    CULTURE: {} as ICULTURE, // Initialize with empty object or default values
    IRON: {} as IIRON, // Initialize with empty object or default values
    URINE: {} as IURINE, // Initialize with empty object or default values
    Wadal: {} as IWADAL, // Initialize with empty object or default values
    PREG: {} as IPREG, // Initialize with empty object or default values
    HBA1c1: {} as IHBA1c1, // Initialize with empty object or default values
    HBA1c2: {} as IHBA1c2, // Initialize with empty object or default values
    PBF: {} as IPBF, // Initialize with empty object or default values
    SPECIAL: {} as ISpecial, // Initialize with empty object or default values
    THYROID: {} as IThyroid, // Initialize with empty object or default values
    SEROLOGY: {} as ISEROLOGY, // Initialize with empty object or default values
    FLUID: {} as IFluid, // Initialize with empty object or default values
    DRUGABUSE: {} as IDRUG, // Initialize with empty object or default values
    LFT: {} as ILFT, // Initialize with empty object or default values
    KRFT:{} as IKFT,
    SEMEN: {} as ISEROLOGY, // Initialize with empty object or default values
    ELECTROLYTES: {} as IElectrolyte, // Initialize with empty object or default values
    CBC: {} as ICBC, // Initialize with empty object or default values
    STOOL: {} as IStool, // Initialize with empty object or default values
    id: 11,
    Receivtime: ''
}];

const dataSlice = createSlice({
    name: 'store',
    initialState: initialData,
    reducers: {
        addData(state, action: PayloadAction<IEnterForm>) {
            console.warn("IEnterForm state", action.payload);
            const index = state.findIndex(item => item.id === action.payload.id);
            if (index === -1) {
                state.push(action.payload);
            } else {
                state[index] = action.payload;
            }

            console.warn("here is store", state);
        },
        saveToLocalStorage(state) {
            localStorage.setItem('data', JSON.stringify(state));
        },
        updateHAEMATOLOGY(state, action: PayloadAction<{ id: number; data: IHAEMATOLOGY }>) {
            const index = state.findIndex(item => item.id === action.payload.id);
            if (index !== -1) {
                state[index].HAEMATOLOGY = action.payload.data;
            }
            console.warn("here is store", state);
        },
        updateBIO(state, action: PayloadAction<{ id: number; data: IBio }>) {
            console.log(action.payload.id);
            const index = state.findIndex(item => item.id === action.payload.id);
            console.log(index);
            if (index !== -1) {
                console.log(state, action.payload.data);
                state[index].BIO = action.payload.data;
            }
            console.warn("here is store", state);
        },
        // Similarly, define update actions for other interfaces
        updateCULTURE(state, action: PayloadAction<{ id: number; data: ICULTURE }>) {
            const index = state.findIndex(item => item.id === action.payload.id);
            if (index !== -1) {
                state[index].CULTURE = action.payload.data;
            }
            console.warn("here is store", state);
        },
        updateIRON(state, action: PayloadAction<{ id: number; data: IIRON }>) {
            const index = state.findIndex(item => item.id === action.payload.id);
            if (index !== -1) {
                state[index].IRON = action.payload.data;
            }
        },
        updateURINE(state, action: PayloadAction<{ id: number; data: IURINE }>) {
            const index = state.findIndex(item => item.id === action.payload.id);
            if (index !== -1) {
                state[index].URINE = action.payload.data;
            }
        },
        updateWadal(state, action: PayloadAction<{ id: number; data: IWADAL }>) {
            debugger;
            const index = state.findIndex(item => item.id === action.payload.id);
            if (index !== -1) {
                state[index].Wadal = action.payload.data;
            }
        },
        updatePREG(state, action: PayloadAction<{ id: number; data: IPREG }>) {
            const index = state.findIndex(item => item.id === action.payload.id);
            if (index !== -1) {
                state[index].PREG = action.payload.data;
            }
        },
        updateHBA1c1(state, action: PayloadAction<{ id: number; data: IHBA1c1 }>) {
            const index = state.findIndex(item => item.id === action.payload.id);
            if (index !== -1) {
                state[index].HBA1c1 = action.payload.data;
            }
        },
        updateHBA1c2(state, action: PayloadAction<{ id: number; data: IHBA1c2 }>) {
            const index = state.findIndex(item => item.id === action.payload.id);
            if (index !== -1) {
                state[index].HBA1c2 = action.payload.data;
            }
        },
        updatePBF(state, action: PayloadAction<{ id: number; data: IPBF }>) {
            const index = state.findIndex(item => item.id === action.payload.id);
            if (index !== -1) {
                state[index].PBF = action.payload.data;
            }
        },
        updateSPECIAL(state, action: PayloadAction<{ id: number; data: ISpecial }>) {
            const index = state.findIndex(item => item.id === action.payload.id);
            if (index !== -1) {
                state[index].SPECIAL = action.payload.data;
            }
        },
        updateTHYROID(state, action: PayloadAction<{ id: number; data: IThyroid }>) {
            const index = state.findIndex(item => item.id === action.payload.id);
            if (index !== -1) {
                state[index].THYROID = action.payload.data;
            }
        },
        updateSEROLOGY(state, action: PayloadAction<{ id: number; data: ISEROLOGY }>) {
            const index = state.findIndex(item => item.id === action.payload.id);
            if (index !== -1) {
                state[index].SEROLOGY = action.payload.data;
            }
        },
        updateFLUID(state, action: PayloadAction<{ id: number; data: IFluid }>) {
            const index = state.findIndex(item => item.id === action.payload.id);
            if (index !== -1) {
                state[index].FLUID = action.payload.data;
            }
        },
        updateDRUGABUSE(state, action: PayloadAction<{ id: number; data: IDRUG }>) {
            const index = state.findIndex(item => item.id === action.payload.id);
            if (index !== -1) {
                state[index].DRUGABUSE = action.payload.data;
            }
        },
        updateLFT(state, action: PayloadAction<{ id: number; data: ILFT }>) {
            const index = state.findIndex(item => item.id === action.payload.id);
            if (index !== -1) {
                state[index].LFT = action.payload.data;
            }
        },
        updateKFT(state, action: PayloadAction<{ id: number; data: IKFT }>) {
            const index = state.findIndex(item => item.id === action.payload.id);
            if (index !== -1) {
                state[index].KRFT = action.payload.data;
            }
        },
        updateSEMEN(state, action: PayloadAction<{ id: number; data: ISEROLOGY }>) {
            const index = state.findIndex(item => item.id === action.payload.id);
            if (index !== -1) {
                state[index].SEMEN = action.payload.data;
            }
        },
        updateELECTROLYTES(state, action: PayloadAction<{ id: number; data: IElectrolyte }>) {
            const index = state.findIndex(item => item.id === action.payload.id);
            if (index !== -1) {
                state[index].ELECTROLYTES = action.payload.data;
            }
        },
        updateCBC(state, action: PayloadAction<{ id: number; data: ICBC }>) {
            debugger;
            const index = state.findIndex(item => item.id === action.payload.id);
            if (index !== -1) {
                state[index].CBC = action.payload.data;
            }
        },
        updateSTOOL(state, action: PayloadAction<{ id: number; data: IStool }>) {
            const index = state.findIndex(item => item.id === action.payload.id);
            if (index !== -1) {
                state[index].STOOL = action.payload.data;
            }
        },
    },
});

export const valueOfCBC = (id: number) => (state: RootState) => state.data.find(item => item.id === id)?.CBC;
export const valueOfBIO = (id: number) => (state: RootState) => state.data.find(item => item.id === id)?.BIO;
export const valueOfWadal = (id: number) => (state: RootState) => state.data.find(item => item.id === id)?.Wadal;
export const valueOfPreg = (id: number) => (state: RootState) => state.data.find(item => item.id === id)?.PREG;
export const valueOfLFT = (id: number) => (state: RootState) => state.data.find(item => item.id === id)?.LFT;
export const valueOFKFT = (id: number) => (state: RootState) => state.data.find(item => item.id === id)?.KRFT;
export const valueOfHAEMATOLOGY = (id: number) => (state: RootState) => state.data.find(item => item.id === id)?.HAEMATOLOGY;


export const PaitentValue = (id: number) => (state: RootState) => state.data.find(item => item.id === id);
export const {
    addData,
    saveToLocalStorage,
    updateHAEMATOLOGY,
    updateBIO,
    updateCULTURE,
    updateIRON,
    updateURINE,
    updateWadal,
    updatePREG,
    updateHBA1c1,
    updateHBA1c2,
    updatePBF,
    updateSPECIAL,
    updateTHYROID,
    updateSEROLOGY,
    updateFLUID,
    updateDRUGABUSE,
    updateLFT,
    updateKFT,
    updateSEMEN,
    updateELECTROLYTES,
    updateCBC,
    updateSTOOL,
} = dataSlice.actions;
export default dataSlice.reducer;
