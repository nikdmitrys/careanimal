import React from 'react'
import styled from '@emotion/styled'
import logo from '../img/logo.png'
import {NavLink} from 'react-router-dom'

const Wrapper = styled.div`
	border-bottom: 8px solid #f9895d;
	margin-bottom: 50px;
`

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	max-width: 1105px;
	text-transform: uppercase;
	font-size: 14px;
	padding-top: 10px;
	margin: 0 auto;
	a:nth-last-child(1){
		margin-left: 1em;
	}
`

const Link = styled(NavLink)`

	font-weight: bold;

	color: #457e54;
	${(props)=> props.orange && `
		color: #f9895d;
	`}
`

const LeftSide = styled.div`
	display: grid;
	grid-template-columns: 1fr 2fr;
	align-items: center;
	justify-items: center;
`
const RightSide = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	align-items: center;

`

const Logo = styled(NavLink)`
	background: url(${logo});
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
	height: 77px;
	width: 119px;
`
const Nav = styled.nav`
`

let Header = ( props ) => {
    return ( <Wrapper>
		<Container>
			<LeftSide>
				<Logo to='/' />
				<Nav>
					<Link to='/'>найденные</Link>
					<Link to='/'>бездомные</Link>
				</Nav>
			</LeftSide>
			<RightSide>
				<Link orange to='/profile/createAd'>Создать объявление</Link>
				<Link to='/'>выход</Link>
			</RightSide>
		</Container>
	</Wrapper> )
}

export default Header
