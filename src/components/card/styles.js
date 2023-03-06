import styled from 'styled-components';

const StyledCard = styled.div`
	background-color: ${({ colorBG }) => colorBG};
	width: 80%;
	height: 360px;
	display: flex;
	flex-direction: column;
	padding: 2rem;
	color: white;
	position: relative;
	&::before {
		position: absolute;
		content: '';
		width: 50px;
		height: 50px;
		background-color: ${({ colorAfter }) => colorAfter};
		border-radius: 10rem;
		top: 2rem;
		left: 1rem;
	}
	@media screen and (min-width: 768px) {
		width: 90%;
	}
`;
export { StyledCard };
