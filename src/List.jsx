import Digimon from './Digimon';

export default function List({ items }) {
  return items.map((item) => <Digimon {...item} />);
}
