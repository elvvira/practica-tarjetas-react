import Card from '../card/Card';
import { StyledContainer } from './styles';

const CardContainer = () => {
	return (
		<StyledContainer>
			<Card
				image='sedan-car.svg'
				color='orange'
				colorAfter='#c26101'
				title='SEDAN'
			/>
			<Card
				image='suv-car.svg'
				color='blue'
				colorAfter='#012088'
				title='SUVs'
			/>
			<Card
				image='luxury-car.svg'
				color='green'
				colorAfter='#044e00'
				title='LUXURY'
			/>
		</StyledContainer>
	);
};
export default CardContainer;
