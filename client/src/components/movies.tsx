import { styled } from 'solid-styled-components';

const MovieContainer = styled('div')`
	display: flex;
	flex-wrap: wrap;
	background-color: ${(props) => props.theme.colors.pbg};
`;

function Movies() {
	return (
		<MovieContainer>
			<Movie />
			<Movie />
			<Movie />
			<Movie />
			<Movie />
			<Movie />
			<Movie />
			<Movie />
			<Movie />
			<Movie />
			<Movie />
			<Movie />
			<Movie />
			<Movie />
			<Movie />
			<Movie />
			<Movie />
			<Movie />
			<Movie />
			<Movie />
			<Movie />
			<Movie />
			<Movie />
			<Movie />
			<Movie />
			<Movie />
			<Movie />
			<Movie />
			<Movie />
			<Movie />
			<Movie />
			<Movie />
			<Movie />
			<Movie />
		</MovieContainer>
	);
}

const MovieWrapper = styled('div')`
	display: flex;
	flex-direction: column;
	margin: 5px;
	padding: 5px;
	border-radius: ${(props) => props.theme.basic.pbr}px;
	background-color: ${(props) => props.theme.colors.pab};
`;
function Movie() {
	return (
		<MovieWrapper>
			<div>nice movie image</div>
			<h1>Movie Name</h1>
			<h2>description</h2>
			<div class="cast">
				cast and shite
				<ul>
					<li>cast1</li>
					<li>cast2</li>
					<li>cast3</li>
				</ul>
			</div>
		</MovieWrapper>
	);
}

export default Movies;
