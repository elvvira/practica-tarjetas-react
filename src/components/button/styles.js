import styled from 'styled-components';

const StyledButton = styled.button`
	border-radius: 2rem;
	border: transparent;
	width: 70%;
	height: 40px;
	color: ${({ colorBG }) => colorBG};
	position: relative;
	bottom: -70px;
	&:hover {
		border: 1px solid white;
		background-color: transparent;
		color: white;
	}
	@media screen and (min-width: 768px) {
		bottom: 0px;
		width: 80%;
	}
`;
export { StyledButton };
