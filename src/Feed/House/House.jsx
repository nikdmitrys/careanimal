import React from 'react'
import styled from '@emotion/styled'
import Title from '../../components/Title'
import { Wrapper, Container as DefaultContainer } from '../../components/wrapper'
import { color_border_grey, color_grey, color_light_grey_background, color_main_green, color_main_orange } from '../../components/colors'
import image from '../../components/img/alpaka.png'
import FilterForm from '../FilterComponent'

let Section = styled(DefaultContainer)`
    margin-top: 83px;
    font-family: 'Open Sans', sans-serif;

    &>h2{
        text-transform: uppercase;
        color: ${color_main_orange};
        font-weight: bold;
        font-size: 30px;
    }

`

let GridContainer = styled.div`
    display: grid;
    align-content: center;
    justify-content: flex-start;
    align-items: center;
    justify-items: center;
    grid-template-columns: repeat(auto-fill, 21em);
    grid-gap: 3em;
    font-size: 15px;

    margin-top: 75px;

    @media all and (max-width: 767px){
        justify-content: center;
    }
`

let GridItem = styled.div`

    background: ${color_light_grey_background};
    border: 3px solid ${color_border_grey};
    border-radius: 10px;
    padding: 11px 23px 55px;

    &>div{
        background: url(${(props)=>props.img});
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        height: 260px;
        width: 260px;
    }

    &>h3{
        color: ${color_main_green};
        text-transform: uppercase;
        font-weight: bold;
        font-size: 22px;
        margin: 1em 0;
    }

    &>p{
        color: ${color_grey};
        font-size: 17px;
    }
`



let House = ( props ) => {

    const {announcements} = props

    let Method = () =>{
        return true;
    }

    return ( <Wrapper>
		<Title title="Объявления"/>
        <FilterForm onSubmit={Method} Stray={false} />
        <Section>
            <h2>Найдено {announcements.length} объявления</h2>
            <GridContainer>
                {announcements.map((ad) => {
                    return(<GridItem img={image}>
                    <div />
                    <h3>Пропал кот</h3>
                    <p>Адрес: Красноярск, улица Академика Вавилова</p>
                    </GridItem>)
                })}

            </GridContainer>
        </Section>
	</Wrapper> )
}

export default House
