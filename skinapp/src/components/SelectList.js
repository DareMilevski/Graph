const SelectList = ({ data, setItems }) => {
	return (
		<div className="select-menu">
			{data && data.map((el, i) => (
				<div
					className="menu-items"
					key={el.name + el.key}
					onClick={() => {
						setItems(el.sub_categories);
					}}>
					{el.name}
					<div>{el.id}</div>
				</div>
			))}
		</div>
	);
};

export default SelectList;