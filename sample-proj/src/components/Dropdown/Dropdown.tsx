import "./Dropdown.scss"
export default function Dropdown(props: {
  selectName: string,
  options: string []
}) {
  const {
    selectName,
    options
  } = props;

  return (
    <section className="dropdown">
      <button className="dropdown-btn">{selectName}</button>
      <div className="dropdown-list">
        {
          options?.map((option: string) => (
            <a href={`/${option}`}>{option}</a>
          ))
        }
      </div>
    </section>
  )
}