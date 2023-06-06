import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import "./CustomIcon.scss";


export default function CustomIcon(props: {
  iconName: IconProp
}) {
  const {
    iconName,
  } = props;
  return (
    <FontAwesomeIcon icon={iconName} className="custom-icon" />
  )
};
