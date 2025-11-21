import { FiSearch } from 'react-icons/fi';

function SearchBar({value, onChange, showLabel}) {
	return (
		<div className="text-field">
			<FiSearch/>
			<div
				style={{
					width: showLabel ? "200px" : "0px",
					transition: "width 0.2s ease-in-out",
					overflow: "hidden",
				}}
			>
				<input onChange={onChange} value={value} type="text" placeholder="Search" className="text-field input" />
			</div>
		</div>
	);
}

export default SearchBar;