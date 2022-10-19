
import Card from '../card/card.component';
import './card-list.style.css';
import { Monster } from '../../App';

type CardListProps = {
    monsters: Monster[];
}

const CardList = ({ monsters }: CardListProps) => {
    return (
        <div className='card-list'>
            {monsters.map((monster) => {
                return <Card monster={monster} />
            })}
        </div>
    )
}


export default CardList;