import React from 'react'
import styled from '@emotion/styled'
import Mella from '../components/fonts/MellaNissa.ttf'
import description_img from '../components/img/zhivotnye_v_serdtse.png'
import dog from '../components/img/pesik.png'
import cat from '../components/img/kotenok.png'
import map from '../components/img/map.png'
import motivation from '../components/img/motivation.png'
import subscribe from '../components/img/dva_pesika.png'
import { color_main_green, color_main_orange, color_placeholder, color_white,  } from '../components/colors'
import { Container, Wrapper } from '../components/wrapper'
import { Button } from '../components/buttons'

const DescriptionWrapper = styled.div`
	background: ${color_main_orange};
	padding-top: 31px;
	padding-bottom: 34px;
	color: ${color_white};
	h2{
		font-weight: bold;
		font-size: 21px;
	}
	text-transform: uppercase;
`

const TitleWrap = styled.div`
	display: grid;
	grid-template-columns: 1fr 2fr;
`

const Title = styled.h1`
	@font-face {
		font-family: 'Mella Nissa';
		src: url(${Mella});
		font-weight: normal;
		font-style: normal;
	}
	font-family: 'Mella Nissa';
	color: ${color_main_green};
	font-size: 78px;
	font-weight: normal;
	line-height: .64em;
	margin-left: -.2em;
`
const DescriptionContainer = styled(Container)`
	margin: 0 auto;
	display: grid;
	grid-template-columns: 1fr 2fr;
	position: relative;


`

const TitleIcon = styled.img`

	height: 214px;
	width: auto;
	position: absolute;
	top: -5em;
	z-index: 10;
`

const Description = styled.div`
	margin-top: 32px;
	color: ${color_main_orange};
	font-size: 15px;
	font-weight: bold;
`

const Slogan = styled.h2`
	margin-top: 28px;
	color: ${color_main_green};
	text-transform: uppercase;
`
const Ads = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-column-gap: 58px;
	margin-top: 45px;
`
const Ad = styled.div`
	background: ${(props)=>props.color};
	padding-top: 45px;
	padding-right: 39px;
	padding-left: 8px;
	padding-bottom: 37px;
	border-radius: 10px;
	display: grid;
	align-items: center;
	grid-gap: 2.5px;
	grid-template-columns: 1fr 2fr;
	a{
		color: ${(props)=>props.color};
	}
`

const AdImg = styled.div`
	background: url(${(props)=>props.img});
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
	height: 203px;
	width: 203px;
`

const AdInfo = styled.div`
	color:white;
	h3{
		text-transform: uppercase;
		font-size: 30px;
		font-weight: bold;
	}
	p{
		margin-top: 23px;
		font-size: 18px;
	}
`

const AdButton = styled(Button)`
	text-transform: uppercase;
	display: inline-block;
	font-size: 15px;
	background: ${color_white};
	padding: 16px 34px 18px 33px;
	margin-top: 50px;
`

const FoundWrapper = styled.div`
	margin-top: 73px;
	h2{
		font-size: 42px;
		font-weight: bold;
		color: ${color_main_green};
		text-align: center;
	}
`

const Found = styled.div`
	margin-top: 50px;
	input{
		padding-left: 48px;
		padding-right: 48px;
		padding-top: 11px;
		padding-bottom: 11px;
		border: 2px solid ${color_main_orange};
		border-radius: 10px;
		outline: none;

		&:nth-last-child(1){
			margin-left: 29px;
		}
	}
`
const Map = styled.div`
	margin-top: 42px;
	margin-bottom: 100px;
`

const Subscribe = styled.div`
	background: ${color_main_green};
	padding-top: 48px;
	padding-bottom: 75px;
	color:white;
	position: relative;
	h2{
		font-size: 42px;
		font-weight: bold;
		text-transform: uppercase;
	}
	input{
		padding-top: 29px;
		padding-left: 34px;
		padding-bottom: 32px;
		padding-right: 34px;
		border-radius: 10px;
		outline: none;
		border: none;
		width: 25em;
		font-size: 20px;
		&::placeholder{
			color: ${color_placeholder};
		}
	}
`

const InputContainer = styled.div`
	margin-top: 25px;
	position: relative;
	display: inline-block;
	padding-right: 200px;
`

const ButtonSubscribe = styled(Button)`
	position: absolute;
	right: 0;
`

const SubscribeIcon = styled.img`
	z-index: 1;
	height: 259px;
	position: absolute;
	right: -2em;
	top: -2em;
`

const MotivationContainer = styled(Container)`
	padding-top: 75px;
	display: grid;
	grid-template-columns: 1fr 1fr;
	align-items: center;
	grid-gap: 60px;
	padding-bottom: 58px;
`

const MotivationTextContainer = styled.div`
	color: ${color_main_green};
	h1{
		font-size: 42px;
		text-transform: uppercase;
		font-weight: bold;
		margin-bottom: 50px;
	}
	p{
		font-size: 25px;
	}
`

const MotivationImg = styled.img`
	height: 300px;
`

let Main = ( props ) => {
    return ( <Wrapper>
		<Container><TitleWrap><div></div><Title>Care Pets</Title></TitleWrap></Container>
		<DescriptionWrapper>
			<DescriptionContainer>
				<TitleIcon src={description_img} />
				<div></div>
				<h2>ПРОЕКТ, КОТОРЫЙ СОЗДАН ДЛЯ ПОМОЩИ<br/>
				ДОМАШНИМ ПИТОМЦАМ И ИХ ХОЗЯЕВАМ.</h2>
			</DescriptionContainer>
		</DescriptionWrapper>
		<DescriptionContainer>
			<div></div>
			<Description>
				<p>Наша умная доска объявлений поможет найти пропавших собак и кошек.</p>
				<p>Вы также можете найти расположение ближайших Зоомагазинов<br/> и ветеринарных клиник.</p>
				<Slogan>Давайте делать мир лучше!</Slogan>
			</Description>
		</DescriptionContainer>
		<Container>
			<Ads>
				<Ad color={color_main_green}>
					<AdImg img={dog}/>
					<AdInfo>
						<h3>Мой питомец
						потерялся</h3>
						<p>Создать объявление о
							пропаже питомца,
						чтобы все увидели</p>
						<AdButton href='/profile/createAd'>создать объявление</AdButton>
					</AdInfo>
				</Ad>
				<Ad color={color_main_orange}>
					<AdImg img={cat}/>
					<AdInfo >
						<h3>нашли чужого
						питомца</h3>
						<p>Создать объявление о
							находке питомца,
						чтобы все увидели</p>
						<AdButton href='/profile/createAd'>создать объявление</AdButton>
					</AdInfo>
				</Ad>
			</Ads>
			<FoundWrapper>
				<h2>Найди питомца на карте</h2>
				<Found>
					<input placeholder='Введите адрес пропажи:' type="text"/>
					<input placeholder='Введите приметы питомца:' type="text"/>
				</Found>
				<Map>
					<img src={map} alt=""/>
				</Map>
			</FoundWrapper>
		</Container>
		<Subscribe>
			<Container>
				<h2>Подпишитесь на новости</h2>
				<p>И будьте в курсе всех событий и новостей
				о пропаже и находке питомцев</p>
				<InputContainer>
					<input placeholder='Введите ваш email' type="email"/>
					<ButtonSubscribe href='#'>Подписаться</ButtonSubscribe>
				</InputContainer>
				<SubscribeIcon src={subscribe} />
			</Container>
		</Subscribe>
		<MotivationContainer>
			<MotivationImg src={motivation}/>
			<MotivationTextContainer>
				<h1>Найди питомца<br/>для себя</h1>
				<p>Используйте поиск уличных животных!</p>
				<p>Возможно, питомец, которого вы ищете,
				находится где-то рядом!</p>
			</MotivationTextContainer>
		</MotivationContainer>
	</Wrapper> )
}

export default Main
