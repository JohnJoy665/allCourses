import { useEffect, useState } from "react";
import Select, { GroupBase, InputActionMeta, Props, components } from "react-select";
import IconContainer from "../IconContainer/IconContainer";
import { data, filterList } from "../../types/types";

interface SelectItemsProps {
  options: data[]
  sendSelectedValues: (item: data[] | null) => void
  currentFilter: string
}


const SelectItems = ({ options, sendSelectedValues, currentFilter }: SelectItemsProps) => {



  // const DropdownIndicator = <
  //   Option,
  //   IsMulti extends boolean = true,
  //   Group extends GroupBase<Option> = GroupBase<Option>
  // >  (props: Props<Option, IsMulti, Group>) => {
  //   return (
  //     <DropdownIndicator {...props}>
  //       <IconContainer icon={"solar:magnifer-outline"} color="#E31683" sizeWidth={"14"} sizeHeight={"14"} styleMod={"nonePad"} />
  //     </DropdownIndicator>
  //   );
  // };


  const DropdownIndicator = (props: any) => {
    return (
      <components.DropdownIndicator {...props}>
        <IconContainer icon={"solar:magnifer-outline"} color="#E31683" sizeWidth={"14"} sizeHeight={"14"} styleMod={"nonePad"} />
      </components.DropdownIndicator>
    );
  };

  const CrossIcon = (props: any) => {
    return (
      <div onClick={() => resetValues()}>
        <components.DropdownIndicator {...props} >
          <IconContainer icon={"clarity:close-line"} color="#E31683" sizeWidth={"25"} sizeHeight={"25"} styleMod={"nonePad"} />
        </components.DropdownIndicator>
      </div>
    );
  };

  const customStyles = {
    placeholder: (provided: any) => ({
      ...provided,
      fontFamily: "'PT Sans'",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "13px",
      lineHeight: "20px",
      color: "#C0C0C0"
    }),
    container: (provided: any) => ({
      ...provided,
    }),
    control: (provided: any, state: any) => ({
      ...provided,
      borderColor: state.isFocused ? "#B5B5B5" : "#B5B5B5",
      boxShadow: state.isFocused ? "#B5B5B5" : "#B5B5B5",
      "&:hover": {
        borderColor: "#d9d9d9"
      },
      fontFamily: "'PT Sans'",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "13px",
      lineHeight: "20px",
      color: "#3a3a3a",
      paddingLeft: "15px",
      paddingRight: "15px",
      borderRadius: "40px",
      backgroundColor: "#fff",
      height: "40px",
      cursor: "text",
      alignContent: "center",
      alignItems: "center"
    }),
    indicatorsContainer: (provided: any) => ({ // все индикаторы
      ...provided,
      padding: "0",
      cursor: "pointer"
      // display: "none"
    }),
    indicatorSeparator: (provided: any) => ({
      ...provided,
      display: "none"
    }),
    valueContainer: (provided: any) => ({
      ...provided,
      paddingLeft: "0",
      marginLeft: "0",
    }),
    input: (provided: any) => ({
      ...provided,
      fontFamily: "'PT Sans'",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "13px",
      lineHeight: "20px",
      color: "#3a3a3a",
      marginLeft: "0",
      boxShadow: "none"
    }),
    menu: (provided: any) => ({
      ...provided,
      marginTop: "0",
      paddingTop: "0",
      backgroundColor: "#F9F9F9",
      borderRadius: "8px",
      boxShadow: "0px 0px 3px rgba(0, 0, 0, 0.2)"

    }),
    menuList: (provided: any) => ({
      ...provided,
      marginTop: "0",
      paddingTop: "0",
      paddingBottom: "0",
      display: "nnone"
    }),
    option: (provided: any, state: any) => ({
      ...provided,
      paddingLeft: "15px",
      padding: "12px",
      fontFamily: "'PT Sans'",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "13px",
      verticalAlign: "middle",

      "&:hover": {
        backgroundColor: "#ebebeb"
      },
      color: state.isFocused && "#424242",
      backgroundColor: state.isSelected && "#FAD3E8"
    })
  };

  const [filtredValues, setFiltredValues] = useState<data[] | null>(null);
  const [typingValue, setTypingValue] = useState("");
  const showIndicate = typingValue.length > 0 ? CrossIcon : DropdownIndicator;

  useEffect(() => {
    currentFilter && resetValues();
  }, [currentFilter]);


  useEffect(() => {
    if (typingValue.length > 0) {
      setFiltredValues(() => options.filter((option: data) => { return option.name.toLowerCase().includes(typingValue.toLowerCase()); }));
    } else {
      resetValues();
    }
  }, [typingValue]);

  useEffect(() => {
    sendSelectedValues(filtredValues);
  }, [filtredValues]);


  const handleInputChange = (e: string, { action }: InputActionMeta) => {
    action === "input-change" && setTypingValue(e);
  };

  const handleMessage = () => {
    if (typingValue) {
      return filtredValues && filtredValues.length > 0 ? null : "Курс не найден";
    }
    return null;
  };

  const resetValues = () => {
    setFiltredValues(null);
    setTypingValue("");
  };



  return (
    <Select
      styles={customStyles}
      placeholder='Введите название курса...'
      onInputChange={handleInputChange}
      inputValue={typingValue}
      isClearable={false}
      value={filtredValues}
      components={{ DropdownIndicator: showIndicate }}
      noOptionsMessage={handleMessage}
      escapeClearsValue={true}
    />
  );
};

export default SelectItems;
