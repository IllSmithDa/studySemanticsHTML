import "./NavLink.scss";

export default function NavLink(props: {
  link: string,
  label: string,
}) {
  const {
    link,
    label,
  } = props;
  return (
    <a
      href={link}
      className="nav-link"
    >
      <p>{label}</p>
    </a>
  )
}