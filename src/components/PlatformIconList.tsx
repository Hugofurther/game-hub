import {
  FaAndroid,
  FaApple,
  FaLinux,
  FaPlaystation,
  FaWindows,
  FaXbox,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";

import { Platform } from "../hooks/useGames";
import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";

const iconMap: { [key: string]: IconType } = {
  android: FaAndroid,
  ios: MdPhoneIphone,
  linux: FaLinux,
  mac: FaApple,
  nintendo: SiNintendo,
  pc: FaWindows,
  playstation: FaPlaystation,
  xbox: FaXbox,
  web: BsGlobe,
};

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  return (
    <HStack marginY={1}>
      {platforms.map((p) => (
        <Icon as={iconMap[p.slug]} color="gray.500" />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
