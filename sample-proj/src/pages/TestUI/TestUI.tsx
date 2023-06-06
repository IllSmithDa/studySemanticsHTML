import NavLink from "../../components/NavLink/NavLink";
export default function TestUi () {

  return (
    <main 
      className="flex-display"
    >
      <nav
        className="flex-horizontal"
      >
        <NavLink label="Desktops" link="#" />
        <NavLink label="Laptops" link="#" />
        <NavLink label="Phones" link="#" />
        <NavLink label="Hardware" link="#" />
        <NavLink label="Software" link="#" />
        <NavLink label="Other" link="#" />
      </nav>
    </main>
  )
}