import { faAtlas, faSearch } from "@fortawesome/free-solid-svg-icons";
import "./Searchbar.scss";
import CustomIcon from "../CustomIcon/CustomIcon";
import Dropdown from "../Dropdown/Dropdown";
import SelectGroup from "../SelectGroup/SelectGroup";

export default function Searchbar(props: {
    label: string,
}) {
    const {label} = props;
    const options = ['Electronics', 'Computers', 'Tablets', 'Phones', 'Radios']
    const selectOptions = ['All', 'Electronics', 'Computers', 'Tablets', 'Phones', 'Radios'];
    return (
        <section className="flex-horizontal-center search-bar-container">
            <a className="snowflake-link custom-icon margin-x-reg" href="#"><CustomIcon iconName={faAtlas} /></a>
            <Dropdown selectName="Shop Category" options={options}/>
            <input className="search-bar" placeholder={label} />
            <SelectGroup allOptions={selectOptions} />
            <a className="custom-icon margin-x-reg search-button" href="#"><CustomIcon iconName={faSearch} /></a>
        </section>

    )
}