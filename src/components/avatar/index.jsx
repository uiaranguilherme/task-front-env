import React, { useEffect, useState } from "react";
import { AvatarArea } from "./styles";
import Typography from "../typograpfy";
import { colors } from "../../mock/colors";

const generateColor = () => {
  return colors[Math.floor(Math.random() * colors.length)];
};

const Avatar = ({ name, size, color }) => {
  const [nameSigla, setNameSigla] = useState("");
  let sizePx;
  let component;

  useEffect(() => {
    if (name !== undefined && typeof name === "string") {
      let arrayName = name.split(" ");

      if (arrayName.length > 1) {
        let nameFill = "";
        arrayName = arrayName.slice(0, 2);
        arrayName.forEach((name) => (nameFill += name.slice(0, 1)));
        setNameSigla(nameFill);
      } else {
        let name = arrayName[0];
        setNameSigla(name.slice(0, 2));
      }
    }
  }, []);

  switch (size) {
    case "small":
      sizePx = "30px";
      component = "p";
      break;
    case "large":
      sizePx = "48px";
      component = "h4";
      break;
    default:
      sizePx = "30px";
      component = "p";
  }

  return (
    <AvatarArea color={color ? color : generateColor()} sizePx={sizePx}>
      <Typography style={{ color: "white" }} component={component}>
        {nameSigla}
      </Typography>
    </AvatarArea>
  );
};

export default Avatar;
