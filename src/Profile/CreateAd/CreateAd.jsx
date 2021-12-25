import React, {useState} from 'react'
import styled from '@emotion/styled'
import { Container as DefaultContainer, Wrapper } from '../../components/wrapper'
import { Btn } from '../../components/buttons'
import { color_border_grey, color_grey, color_light_grey_background, color_main_green, color_main_orange, color_white } from '../../components/colors'
import pesik from '../../components/img/pesik.png'
import kotenok from '../../components/img/kotenok.png'
import alpaka from '../../components/img/alpaka.png'
import map from '../../components/img/map.png'
import photo from '../../components/img/photo_icon.png'
import { Field, reduxForm } from 'redux-form'
import {file_upload, Input, RadioInput} from '../../components/forms/form_controls'
import { file_required, radio_required, required } from '../../components/forms/validators'
import Title from '../../components/Title'

const FormContainer = styled(DefaultContainer)`
    background: ${color_light_grey_background};
    border: 3px solid ${color_border_grey};
    border-radius: 10px;
    margin-top: 162px;
    padding-top: 95px;
    padding-bottom: 40px;
    margin-bottom: 100px;
`

const MyForm = styled.form`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 85px;
`

const FormItem = styled.div`
    
    h2{
        font-size: 40px;
        font-weight: bold; 
        text-transform: uppercase;
        color: ${color_main_green};
        margin-bottom: 62px;
        text-align: center;
    }
`
const RadioButtonsContainer = styled.div`
    display: grid;
    grid-template-areas: "d c" "o o";
    grid-column-gap: 50px;
    grid-row-gap: 25px;
    justify-content: center;
    align-items: center;
    
`
const RadioButtonContainer = styled.label`
    background: ${(props) => props.color};
    position: relative;

    padding-top: 70px;
    padding-bottom: 49px;
    padding-left: 48px;
    padding-right: 60px;

    border-radius: 10px;

    & label{
        display: block;
        text-transform: uppercase;
        font-size: 35px;
        font-weight: bold;
        color: ${color_white};
        &::after{
            content: '';
            position: absolute;
            right: 40px;
            bottom:  40px;
            border: 2px solid ${color_white};
            border-radius: 100%;
            height: 54px;
            width: 54px;
        }
        &::before{
            content: '';
            position: absolute;
            right: 51.5px;
            bottom:  51.5px;
            border-radius: 100%;
            height: 35px;
            width: 35px;
        }
        
        &>input{
            display: block;
            margin-top: 20px;
            padding-top: 15px;
            padding-left: 23px;
            padding-right: 23px;
            padding-bottom: 15px;
            background: inherit;
            border: 2px solid ${color_white};
            border-radius: 5px;
            font-size: 17px;
            color: ${color_white};

            &::placeholder{
                color: ${color_white};
            }
        }
    }
    &>input{
        position: absolute;
        opacity: 0;
        visibility: hidden;
        left: 0;
        top: 0;

        &:checked+label::before{
            background: ${color_white};
        }
    }
`

const RadioDog = styled(RadioButtonContainer)`
    grid-area: d;
`

const RadioCat = styled(RadioButtonContainer)`
    grid-area: c;
`

const RadioOther = styled(RadioButtonContainer)`
    grid-area: o;
    display: grid;
    grid-template-columns    : 1fr 2fr;
    align-items: center;
    padding-left: 50px;
    padding-top: 18px;
    padding-bottom: 19px;
    
    &>div>label{
        &::after{
            bottom: 3px;
            top: 67px;
        }
        &::before{
            bottom: 17px;
        }
    }

    &>img{
        margin: 0;
        height: 163px;
    }
`

const RadioButtonImg = styled.img`
    height: 211px;
    margin-bottom: 55px;
`

const FormMap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    & img{
        height: 430px;
        margin-top: 42px;
    }

    input{
        font-size: 18px;
        padding-top: 12px;
        padding-left: 27px;
        padding-right: 27px;
        padding-bottom: 9px;
        border: 2px solid ${color_main_orange};
        border-radius: 10px;
        min-width: 402px;
    }
`

const TypeContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: center;
    align-content: center;
    align-items: center;
    justify-items: center;
    max-width: 668px;
    margin: 0 auto;
    position: relative;

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
`

const PhotoContainer = styled.div`
    display: flex;
`

const PhotoLabel = styled.label`
    position: relative;
    margin: 0 auto;
    color: ${color_grey};
    font-size: 25px;
    border: 3px solid ${color_border_grey};
    border-radius: 10px;
    padding: 27px 221px 26px 153px;
    
    &::before{
        content: '';
        position: absolute;
        background: url(${photo});
        height: 60px;
        width: 74px;
        z-index: 1;
        top: 15px;
        left: 44px;
        
    }

    input{
        position: absolute;
        opacity: 0;
        left: 0;
        top: 0;
    }
`

const ContactsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    max-width: 660px;
    margin: 0 auto;
    grid-column-gap: 13px;
    grid-row-gap: 17px;

    &>input{
        border-radius: 10px 100% 25px 100px;
        padding: 23px 32px;
        outline: none;
        font-size: 21px;
        
        
    }

    &>input:nth-child(3){
        grid-column: 1/-1;
    }
`

const ButtonContainer = styled.div`
    display: grid;
    justify-items: center;
    grid-template-columns: repeat(3, 1fr);

    &>button{
        grid-column: 2;
        text-transform: uppercase;
        font-size: 30px;
        padding: 20px 72px 16px 72px;
    }
`

let CreateForm = reduxForm({form: 'ResumeInfo'})((props)=>{
    
    const [other_input_required, set_other_input_required] = useState([])
    

    return(
        <MyForm onSubmit={props.handleSubmit} action="">
            <FormItem>
                <h2>Выберите животное</h2>
                <RadioButtonsContainer>
                    <RadioDog htmlFor='dog' color={color_main_green}>
                        <RadioButtonImg src={pesik} />
                        <Field component={RadioInput} onChange={()=>{set_other_input_required([])}} type={'radio'} id={'dog'} name='animal' value='dog' />
                        <label htmlFor="dog">собака</label>
                    </RadioDog>
                    <RadioCat htmlFor='cat' color={color_main_orange}>
                        <RadioButtonImg src={kotenok} />
                        <Field component={RadioInput} onChange={()=>{set_other_input_required([])}} type='radio' id='cat' name='animal' value='cat' />
                        <label htmlFor="cat">кошка</label>
                    </RadioCat>
                    <RadioOther htmlFor='other' color={color_main_orange}>
                        <RadioButtonImg src={alpaka} />
                        <Field component={RadioInput} onChange={()=>{set_other_input_required([required])}} type='radio' id='other' name='animal' value='other' validate={[radio_required]} />
                        <label htmlFor="other">другие
                            <Field component={Input} name={'other_animal'} validate={other_input_required} placeholder='Введите животное' />
                        </label>
                    </RadioOther>
                </RadioButtonsContainer>
            </FormItem>
            <FormItem>
                <h2>Введите адрес</h2>
                <FormMap>
                    <Field component={Input} validate={[required]} name={'address'} placeholder='Введите адрес пропажи:' />
                    <img src={map} alt="map" />
                </FormMap>
            </FormItem>
            <FormItem>
                <h2>выберите тип объявления</h2>
                <TypeContainer>
                    <Field component={RadioInput} type='radio' id='lost' name='type' value='lost' />
                    <label htmlFor="lost">Потерян</label>
                    <Field component={RadioInput} type='radio' id='discovered' name='type' value='discovered' />
                    <label htmlFor="discovered">Найден</label>
                    <Field component={RadioInput} type='radio' id='stray' name='type' value='stray' validate={[radio_required]} />
                    <label htmlFor="homeless">Бездомный</label>
                </TypeContainer>
            </FormItem>
            <FormItem>
                <h2>добавить фотографию</h2>
                <PhotoContainer>
                    <PhotoLabel htmlFor="photo">Добавить фотографию
                    <Field validate={[file_required]} component={file_upload} type={'file'} accept={'image/png, image/gif, image/jpeg'} id={'photo'} name={'photo'} />
                    </PhotoLabel>
                </PhotoContainer>
            </FormItem>
            <FormItem>
                <h2>контактные данные</h2>
                <ContactsContainer>
                    <Field component={Input} validate={[required]} name={'name'} placeholder='Имя *' />
                    <Field component={Input} name={'tel'} placeholder='Телефон *' />
                    <Field component={Input} validate={[required]} name={'email'} placeholder='Email *' />
                </ContactsContainer>
            </FormItem>
            <ButtonContainer>
                <Btn>Создать</Btn>
            </ButtonContainer>
        </MyForm>
    )

})

let CreateAd = ( props ) => {

    let CreateAdSubmit = (formData) =>{
        let Data = new FormData();
        Data.append( 'animal', formData.animal )
        Data.append( 'address', formData.address )
        Data.append( 'type', formData.type )
        Data.append( 'name', formData.name )
        Data.append( 'email', formData.email )
        Data.append( 'tel', formData.tel )
        Data.append( 'author', props.userID )
        Data.append( 'photo', formData.photo[ 0 ] )
        console.log( formData )
    }

    return ( <Wrapper>
        <Title title='Создать объявление' />
        <FormContainer>
            <CreateForm onSubmit={CreateAdSubmit} />
        </FormContainer> 
	</Wrapper> )
}



export default CreateAd
