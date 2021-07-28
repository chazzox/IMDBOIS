import { styled } from 'solid-styled-components';

const Nav = styled('div')`
	display: flex;
	background-color: ${(props) => props.theme.colors.sbg};
	justify-content: space-between;
	align-items: center;
`;

const Input = styled('input')`
	padding: 0;
	height: 25px;
	&:focus {
		outline: none;
	}
`;

const Title = styled('h1')`
	margin: 0;
	padding: 0;
`;

function Header() {
	return (
		<Nav>
			<Title>bitsy</Title>
			<Input typeof="search" />
		</Nav>
	);
}

export default Header;
