import React from 'react';
import styled from '@emotion/styled';
import title_icon from './img/zhivotnye_v_serdtse.png';
import colors from './colors.json';
import { Container as DefaultContainer } from './wrapper';

const { color_main_orange, color_white } = colors;

const TitleIcon = styled.img`
	height: 214px;
	width: auto;
	position: absolute;
	z-index: 10;
	top: -2em;
	left: -1em;
`;

const TitleContainer = styled.div`
	background: ${color_main_orange};
	color: ${color_white};
	text-align: center;
	text-transform: uppercase;
	font-weight: bold;
	padding-top: 36px;
	padding-bottom: 30px;
	margin-top: 80px;
	font-size: 45px;

	h1 {
		font-size: 45px;
	}
`;

const Container = styled(DefaultContainer)`
	position: relative;
`;

const Title = ({ title }) => {
	return (
		<TitleContainer>
			<Container>
				<TitleIcon src={title_icon} />
				<h1>{title}</h1>
			</Container>
		</TitleContainer>
	);
};

export default Title;
