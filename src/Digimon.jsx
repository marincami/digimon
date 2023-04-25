export default function Digimon({ name, img, level }) {
	return(
		<article>
			<header>{name}</header>
			<img src={img} />
			<footer>{level}</footer>
		</article>
	)
}
