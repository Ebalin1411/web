import IcoMoon, { IconProps } from "react-icomoon";
import iconSet from "../iconSelection.json";


const Icon = (props: IconProps) => <IcoMoon iconSet={iconSet} {...props} />;

export default Icon;