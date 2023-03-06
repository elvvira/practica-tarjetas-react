import styled from 'styled-components';

const StyledContainer = styled.div`
	width: 80%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin-right: auto;
	margin-left: auto;
	@media screen and (min-width: 768px) {
		flex-direction: row;
	}
`;
export { StyledContainer };
