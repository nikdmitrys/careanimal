import React from 'react'
import styled from '@emotion/styled'
import { reduxForm, Field } from 'redux-form'
import { Container as DefaultContainer } from '../components/wrapper'
import { Btn } from '../components/buttons'
import {Input, RadioInput} from '../components/forms/form_controls'
import {radio_required} from '../components/forms/validators'
import { color_border_grey, color_grey, color_light_grey_background, color_main_green } from '../components/colors'

let FilterContainer = styled(DefaultContainer)`
    margin-top: 175px;
    background: ${color_light_grey_background};
    border: 3px solid ${color_border_grey};
    border-radius: 10px;
    padding: 30px 14px 35px 60px;
    font-family: 'Open Sans', sans-serif;

    &>div{
        text-align: left;
    }

    & h3{
        font-size: 30px;
        font-weight: bold;
        text-transform: uppercase;
        color: ${color_main_green};
    }

    & input{
        font-size: 21px;
        padding: 22px 32px 24px;
        border: 3px solid ${color_border_grey};
        border-radius: 10px;
    }

    & select{
        font-size: 21px;
        padding: 22px 32px 24px;
        border: 3px solid ${color_border_grey};
        border-radius: 10px;
        color: ${color_grey};
        outline: none;
    }
`

let FilterTop = styled.div`
   display: flex;
   margin-bottom: 33px;
   &>div:nth-child(2){
       margin-left: 14px;
   }
`

let FilterItem = styled.div`
    display: grid;
    grid-gap: 33px;
    justify-content: stretch;

    &>div{

        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-gap: 7px;

        &>label{
        position: relative;
        color: ${color_border_grey};
        border: 3px solid ${color_border_grey};
        padding: 20px 32px 20px 74px;
        border-radius: 10px;
        font-size: 25px;

        &::after,::before{
            content: '';
            position: absolute;
            border-radius: 100%;
        }

        &::before{
            top: 20px;
            left: 22px;
            border: 3px solid ${color_border_grey};
            height: 30px;
            width: 30px;
        }

        &::after{
            height: 15px;
            width: 15px;
            left: 29px;
            top: 26.5px; 
        }
    }

    &>input{
            position: absolute;
            left: 0;
            top: 0;
            opacity: 0;

            &:checked + label::after{
                background: ${color_border_grey};
                border: 3px solid ${color_border_grey};
            }
        }
    }
    
`


let FilterForm = reduxForm({form: 'Filter'})((props)=>{

    return(
        <FilterContainer onSubmit={props.handleSubmit}>
            <FilterTop>
                <FilterItem Row={props.Stray}>
                    <h3>Где ищите</h3>
                    <Field component={Input} type='text' id='address' name='address' placeholder='Введите адрес...' />
                </FilterItem>
                {!props.Stray && 
                <FilterItem>
                    <h3>тип</h3>
                    <select name="" id="">
                        <option value="">Отдам</option>
                    </select>
                </FilterItem>
                }
            </FilterTop>
            <FilterItem>
                <h3>кого вы ищите</h3>
                <div>
                    <Field component={RadioInput} type='radio' id='cat' name='animal' value='cat' />
                    <label htmlFor="cat">Кошка</label>
                    <Field component={RadioInput} type='radio' id='dog' name='animal' value='dog' />
                    <label htmlFor="dog">Собака</label>
                    <Field component={RadioInput} type='radio' id='other' name='animal' value='other' validate={[radio_required]} />
                    <label htmlFor="other">Другое</label>
                    <Btn>Найти</Btn>
                </div>
            </FilterItem> 
        </FilterContainer>
    )
})

export default FilterForm