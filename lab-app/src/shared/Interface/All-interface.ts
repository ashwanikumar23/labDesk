
export default interface IEnterForm {
    name: string;
    DATE: string;
    ReciveData: string;
    time: string;
    prefix: string;
    LabNO: string;
    Gender: string;
    Age: string;
    Address: string;
    M_no: string;
    HAEMATOLOGY: IHAEMATOLOGY;
    BIO: IBio;
    CULTURE: ICULTURE;
    IRON: IIRON;
    URINE: IURINE;
    Wadal: IWADAL;
    PREG: IPREG;
    HBA1c1: IHBA1c1;

    HBA1c2: IHBA1c2;

    PBF: IPBF;
    SPECIAL: ISpecial;
    THYROID: IThyroid;
    SEROLOGY: ISEROLOGY;
    FLUID: IFluid;
    DRUGABUSE: IDRUG;
    LFT: ILFT;
    SEMEN: ISEROLOGY;
    ELECTROLYTES: IElectrolyte;
    CBC: ICBC;
    STOOL: IStool;

}

export interface IHAEMATOLOGY {
    Print: boolean,
    Comments: boolean,
    HB: string,
    TLC: string,
    Polymorphs: string,
    Lymphocytes: string,
    Monocytes: string,
    Eosinophils: string,
    Basophils: string,
    Description: string,
    AbnormalCell: string,
    ESR: string,
    BGrouping: string,
    RhTyping: string,
    MaterialParasite: string,
    PTIControl: string,
    Test: string,
    Index: string,
    INR: string,
    APTT: string,
    BleedingTime: string,
    ClottingTime: string,
    PTTK: string,
    TotalRBCCount: string,
    Platelets_L: string,
    Platelets_T: string,
    PCV: string,
    Reticulocyte: string,
    MCV: string,
    MCH: string,
    MCHC: string,
    AEosinophilCount: string,
    LECell: string,
    CoombsTest_D: string,
    CoombsTest_I: string,
}

export interface IBio {
    Print: boolean,
    Comments: boolean,
    BSugarFasting: string,
    B_SugarPP: string,
    B_SugarRandom: string,
    Urea: string,
    Creatinine: string,
    BUN: string,
    SUricAcid: string,
    SerumProtein: string,
    Albumin: string,
    Globulin: string,
    AGratio: string,
    TotalBilirubin: string,
    ConjBilirubin: string,
    UnConjBilirubin: string,
    SGOT_AST: string,
    SGPT_AST: string,
    AlkPhosphatase: string,
    SCholestrol: string,
    SHDLCholestrol: string,
    STriglycerides: string,
    SldlChelestrol: string,
    S_VLDLCholeastrol: string,
    Serum_Total_Lipids: string,
    TotalHDLCholestrol: string,
    SAcidPhosphastase: string,
    ProstaticFraction: string,
    SerumAmylase: string,
    GGT: string,
    CK: string,
    CPK_MB: string,
    CPK_NAC: string,
    LDH: string,
    G6PD: string,
    SSodium: string,
    Potassium: string,
    Chloride: string,
    S_CalCium: string,
    S_Phosphorus: string,
    S_Copper: string,
    S_Bicarbonate: string,
    Lipase: string,
    GCT: string
}

export interface ISEROLOGY {
    Print: boolean,
    Comments: boolean,
    ASOTITRE: string,
    ASO_Quantitative: string,
    CReactionProtien: string,
    CRP_Quantitative: string,
    RA_Factor: string,
    RAF_Quantitative: string,
    Mantoux: string,
    Dia: string,
    with: string,
    PPDAfter: string,
    BETAHCG: string,
    PREGNANCYCARDTEST: string,
    QUALITATIVE: string,
    QUANTITATIVE: string,
    WIDALREACTION: string,
    STO: string,
    STH: string,
    PAH: string,
    PBH: string,
    HBSAG: string,
    HIV_I: string,
    HIV_II: string,
    SPUTUMFORAFB: string,
    GRAMSTAIB: string,
    Slidertestfortoxoplasmagondit: string,
    stainForAFB: string,
    HepatitisC_Virus_HCV: string,
    HepatitisC_Virus_HCV_II: string,
    Dengue_Rapid_Screen_Test_lgG: string,
    Dengue_Rapid_Screen_Test_lgM: string,
    Denguensag: string,
    Typhidot_lgM: string,
    Typhidot_lgG: string,
    Typhidot: string,
    MalariaAntigen: string,
    weilFelix: string,
    ChikunGunya: string
}


// MicrobiologyTest.ts
export interface ICULTURE {
    Print: boolean,
    Comments: boolean,
    SPECIMEN_OPTION: string;
    monSPECIMEN_INPUT: string;
    DIRECTSMEAR: string;
    GRAN_STAIN: string;
    KOH_SMEAR: string;
    COLONY_COUNT: string;
    BACTERIAL_COUNT: string;
    NO_GROWTH: string;
    GROWTH: string;
    MEDICINE1: string;
    MEDICINESENITIVE1: string;
    MEDICINE16: string;
    MEDICINE2: string;
    MEDICINESENITIVE2: string;
    MEDICINE17: string;
    MEDICINE3: string;
    MEDICINESENITIVE3: string;
    MEDICINE18: string;
    MEDICINE4: string;
    MEDICINESENITIVE4: string;
    MEDICINE19: string;
    MEDICINE5: string;
    MEDICINESENITIVE5: string;
    MEDICINE20: string;
    MEDICINE6: string;
    MEDICINESENITIVE6: string;
    MEDICINE21: string;
    MEDICINE7: string;
    MEDICINESENITIVE7: string;
    MEDICINE22: string;
    MEDICINE8: string;
    MEDICINESENITIVE8: string;
    MEDICINE23: string;
    MEDICINE9: string;
    MEDICINESENITIVE9: string;
    MEDICINE24: string;
    MEDICINE10: string;
    MEDICINESENITIVE10: string;
    MEDICINE25: string;
    MEDICINE11: string;
    MEDICINESENITIVE11: string;
    MEDICINE26: string;
    MEDICINE12: string;
    MEDICINESENITIVE12: string;
    MEDICINE27: string;
    MEDICINE13: string;
    MEDICINESENITIVE13: string;
    MEDICINE28: string;
    MEDICINE14: string;
    MEDICINESENITIVE14: string;
    MEDICINE29: string;
    MEDICINE15: string;
    MEDICINESENITIVE15: string;
    MEDICINE30: string;
  }
  
export interface IURINE {
    Print: boolean,
    Comments: boolean,
    quality: string;
    colour: string;
    deposits: string;
    specificGravity: string;
    reaction: string;
    appearance: string;
    rbc: string;
    pusCells: string;
    epithelialCell: string;
    crystal: string;
    casts: string;
    spermatozoaSeen: string;
    hours24Protein: string;
    yeast: string;
    benceJonesProtein: string;
    albumin: string;
    microalbumin: string;
    sugar: string;
    acetone: string;
    ketone: string;
    bileSalts: string;
    urobilinogen: string;
    ph: string;
    nitrite: string;
}
export interface IIRON {
    Print: boolean,
    Comments: boolean,
    TotalIron: string;
    TIBC: string;
    TSAT: string;
}
export interface IWADAL {
    Print: boolean,
    Comments: boolean,
    STYPHIO: string;
    STYPHIO2: string;
    STYPHIO3: string;
    STYPHIO4: string;
    STYPHIO5: string;
    STYPHIO6: string;
    STYPHIH: string;
    STYPHIH2: string;
    STYPHIp: string;
    STYPHIH4: string;
    STYPHIH5: string;
    STYPHIH6: string;
    PARATYPHI: string;
    PARATYPHI2: string;
    PARATYPHI3: string;
    PARATYPHI4: string;
    PARATYPHI5: string;
    PARATYPHI6: string;
    PARATYPHIB: string;
    PARATYPHIB2: string;
    PARATYPHIB3: string;
    PARATYPHIB4: string;
    PARATYPHIB5: string;
    PARATYPHIB6: string;
}

export interface IPREG {
    Print: boolean,
    Comments: boolean,
    SampleBroughtFrom: string;
    ExpectedDate: string;
    betaHCG: string;
    CommentsAdvise: string;
}

export interface IStool {
    Print: boolean,
    Comments: boolean,
    CONSISTENCY: string;
    COLOUR: string;
    MUCUS: string;
    Reaction: string;
    CELLULAREXUDATES: string;
    OVA: string;
    CYST: string;
    UndigestedFoodParticles: string;
    RBCs: string;
    PlusCells: string;
    EpithellalCells: string;
}

export interface IFluid {
    Print: boolean,
    Comments: boolean,
    TYPEOFFLUID: string;
    GROSS_APPEARANCE: string;
    RBCs: string;
    ANY_MALIGNANT_CELLS: string;
    PROTEINS: string;
    MICRO_PROTEINS: string;
    GLOBULIN: string;
    SUGAR: string;
    CHLORIDE: string;
    TOTALWBCCOUNT: string;
    LYMPHOCYTES: string;
    NEUTROPHILS: string;
    EOSINOPHILS: string;
    OTHERDESCRIPTION: string;
    ANYsPECIALSTAIN: string;
}

export interface ILFT {
    Print: boolean,
    Comments: boolean,
    TotalBilirubin: string;
    ConjBilirubin: string;
    UnConjBilirubin: string;
    SGOT: string;
    SGPT: string;
    SAlkalinePhosphatase: string;
    SerumProtein: string;
    Albumin: string;
    Globulin: string;
    AGRatio: string;
    HbsAg: string;
}

export interface IILipidProfile {
    Print: boolean,
    Comments: boolean,
    S_cholestrol: string;
    S_HDL_cholestrol: string;
    S_Triglycerides: string;
    S_VLDLcholestrol: string;
    S_LDLcholestrol: string;
    SerumTotalLipids: string;
    Totalcholestrol_HDIcholestrol: string;
    LDL_HDLcholestrol: string;
}
// SemenAnalysis.ts
export interface ISemen {
    Print: boolean,
    Comments: boolean,
    SPECIMENCOLLECTEDBY: string;
    DURATIONOFSAMPLE: string;
    ABSTINENCEPERIOD: string;
    COLOR: string;
    QUALITY: string;
    LIQUIFICATIONTIME: string;
    REACTION: string;
    VISCOSITY: string;
    MOTILITY: string;
    ACTIVE: string;
    Sluggish: string;
    Dead: string;
    PlusCells: string;
    RBCs: string;
    EPITHELIAL_CELL: string;
    MORPHOLOGY: string;
    TOTALSPERMCOUNT: string;
    COMMENTS: string;
    OPINION: string;
}

// ElectrolytePanel.ts
export interface IElectrolyte {
    Print: boolean,
    Comments: boolean,
    S_Sodium: string;
    Potassium: string;
    Chloride: string;
    S_Calcium: string;
    S_Bicarbonate: string;
    S_Magnesium: string;
    S_Phosphorus: string;
}

// BloodTest.ts
export interface ICBC {
    Print: boolean,
    Comments: boolean,
    HB: string;
    TLC: string;
    Polymorphs: string;
    Lym: string;
    Lymphocytes: string;
    Gran: string;
    Monocytes: string;
    Mid: string;
    Eosinophils: string;
    LymHash: string;
    Basophils: string;
    GranHash: string;
    TotalRBCCount: string;
    PCV: string;
    MCV: string;
    MCH: string;
    MCHC: string;
    RDW_CV: string;
    RDW_SD: string;
    Platelets: string;
    MPV: string;
    PDW_SD: string;
    PDW_CV: string;
    PCT: string;
    P_LCR: string;
    P_LCC: string;
}
// RenalFunctionTest.ts
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

export interface IThyroid {
    Print: boolean,
    Comments: boolean,
    T3: string;
    T4: string;
    TSH: string;
}

// MedicalTests.ts
export interface ISpecial {
    Print: boolean,
    Comments: boolean,
    CA_125: string;
    CEA: string;
    C_ReactionProtien: string;
    CreatenineKinase: string;
    Iron: string;
    TIBC: string;
    RapidPSA: string;
    G6PD: string;
    RapidStyphi: string;
    RapidMalaria: string;
    RapidTB_IgG: string;
    RapidTB_IgM: string;
    RapidTB_IgA: string;
    Dengue_IgG: string;
    Dengue_IgM: string;
    RapidTB_IgGIgMIgA: string;
    TROP_T: string;
    TROP_I: string;
    SCRUBTYPHUS: string;
    COVIDE19RAPID: string;
    COVIDE19RT_PCR: string;
    FERRITINE: string;
    D_DIMER: string;
    CYST: string;
  }

// Lines.ts
export interface IPBF {
    Print: boolean,
    Comments: boolean,
    LINE1: string;
    LINE2: string;
    LINE3: string;
    LINE4: string;
    LINE5: string;
    LINE6: string;
    LINE7: string;
    LINE8: string;
    LINE9: string;
    LINE10: string;
    LINE11: string;
    LINE12: string;
    LINE13: string;
    LINE14: string;
    LINE15: string;
    LINE16: string;
    LINE17: string;
    LINE18: string;
    LINE19: string;
    LINE20: string;
    LINE21: string;
    LINE22: string;
    LINE23: string;
    OPTION: string;
  }

// GlucoseTest.ts
export interface GTT {
    Print: boolean,
    Comments: boolean,
    Fasting: string;
    AfterHalfHour: string;
    AfterHour: string;
    AfterOneThirtyHour: string;
    AfterTwoHour: string;
    AfterTwoThirdyHour: string;
    AfterThreeHour: string;
    U1: string;
    U2: string;
    U3: string;
    U4: string;
    U5: string;
    U6: string;
    U7: string;
  }

// SubstanceTest.ts
export interface IDRUG {
    Print: boolean,
    Comments: boolean,
    Cocaine: string;
    Benzodiazepine: string;
    Morphine: string;
    Amphetamine: string;
    Barbiturates: string;
    Merijuana: string;
    Opiates: string;
  }

// BloodSugarLevels.ts
export interface IHBA1c1 {
    Print: boolean,
    Comments: boolean,
    HBA1c1: string;
    MeanGlucoseLevel: string;
  }

  export interface IHBA1c2 {
    Print: boolean,
    Comments: boolean,
    HBA1c2: string;
    ABG: string;
  }

  export interface Idailog{
    id:number,
    disabled?:boolean
  }
  
  
  
  
  





