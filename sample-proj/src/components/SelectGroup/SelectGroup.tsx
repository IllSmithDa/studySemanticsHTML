import "./SelectGroup.scss";
export default function SelectGroup(props : {
  allOptions: string[]
}) {
  const {
    allOptions
  } = props;
  return (
    <select className="select-options">
      {
        allOptions.map((option) => (
          <option className="reg-link">{option}</option>
        ))
      }
    </select>
  )
}