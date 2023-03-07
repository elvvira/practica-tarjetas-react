import { cards } from '../../constants/cards';
import Card from '../card/Card';
import { StyledContainer } from './styles';

const CardContainer = () => {
	return (
		<StyledContainer>
			{cards.map(card => {
				return (
					<Card
						key={card.id}
						image={card.image}
						color={card.color}
						colorAfter={card.colorAfter}
						title={card.title}
					/>
				);
			})}
		</StyledContainer>
	);
};
export default CardContainer;
