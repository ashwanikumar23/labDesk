import { AutoComplete } from "antd";

// const options = [
//     { value: 'Burns Bay Road' },
//     { value: 'Downing Street' },
//     { value: 'Wall Street' },
//   ];
 export interface IOptions{
    value:string
  }
interface IAutoCompleteInput{
    placeholder:string,
    Width:string,
    options:IOptions[],

}


const AutoCompleteInput = ({Width,options,placeholder}:IAutoCompleteInput) => (
    <AutoComplete
      style={{ width: Width }}
      options={options}
      placeholder={placeholder}
      filterOption={(inputValue, option) =>
        option!.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
      }
    />
  );
  
  export default AutoCompleteInput;