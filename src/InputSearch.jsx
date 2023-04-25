export default function InputSearch({ eventHandler, label, placeholder }) {
	return (
		<>
			<h4>{label}</h4>
			<input type="text" placeholder={placeholder} onChange={eventHandler} />
		</>
	)
}
