import { Icon } from "@iconify/react";
import style from "../App/App.module.scss";

interface IconContainerProps {
  icon: string;
  sizeWidth: string;
  sizeHeight: string;
  color?: string;
  styleMod?: string
}

const IconContainer = ({icon, sizeWidth, sizeHeight, color, styleMod}: IconContainerProps) => {
  return (
    <div className={`
    ${style.iconContainer} 
    ${styleMod==="nonePad" && style.iconContainer_nonePad}
    `}>
      <Icon icon={icon} color={color} width={sizeWidth} height={sizeHeight} />
    </div>
  );
};

export default IconContainer;
