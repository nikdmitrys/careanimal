import styled from '@emotion/styled'
import { color_main_orange, color_white } from './colors'

export const Button = styled.a`
    background: ${color_main_orange};
	font-size: 20px;
	font-weight: bold;
	padding: 29px 2.3em 30px;
	border-radius		: 10px;
    color: ${color_white};
    box-sizing: border-box;
	transition: transform .5s;
	
    &:hover{
		transform: scale(1.04);
	}
`

export const Btn = styled.button`
	background: ${color_main_orange};
	font-size: 20px;
	font-weight: bold;
	padding: 29px 2.3em 30px;
	border-radius		: 10px;
    color: ${color_white};
    box-sizing: border-box;
	transition: transform .5s;
	outline: none;
	border: none;

    &:hover{
		transform: scale(1.04);
	}
`