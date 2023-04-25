import { useEffect, useState } from 'react';

export default function DropDown({ label, placeHolder, options, eventHandler }) {
	const [selectedOption, setSelectedOption] = useState('');

	const getDisplay = () => {
		if (!selectedOption || selectedOption.length === 0) {
			return placeHolder;
		}

		return selectedOption.label;
	};

	const handleOption = (event) => {
		setSelectedOption(event.target.value);
	}

	useEffect(() => eventHandler(selectedOption), [selectedOption]);

	return (
		<>
			<h4>{label}</h4>
			<select value={selectedOption} onChange={handleOption}>
				<option>{getDisplay()}</option>
				{options.map((option) => 
					<option key={option}>{option}</option>
				)}
			</select>
		</>
	)
}
