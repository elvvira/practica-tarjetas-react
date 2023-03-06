import Button from '../button/Button';
import Icon from '../icon/Icon';
import { StyledCard } from './styles';

const Card = ({ image, color, colorAfter, title }) => {
	return (
		<StyledCard colorBG={color} colorAfter={colorAfter}>
			<Icon icon={image} />
			<h1>{title}</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
				aperiam officiis adipisicing elit. Sapiente aperiam officiis
			</p>
			<Button colorBG={color} />
		</StyledCard>
	);
};
export default Card;
