import React from 'react'
import styled from 'styled-components'

const TestimonialSection = () => {
  return (
    <Wrapper>
        <h4>Ce que disent nos clients</h4>
        <ContentOne>
            <img src='/images/Temoin1.png' alt="Temoin1"/>
            <div>
                <h6>Arame Fall</h6>
                <img src='/images/EtoileNote.png' alt='EtoileNote'/>
                <p>J'ai reçu mon téléphone en un jour et<br/>j'étais vraiment satisfait de leur<br/>service lorsque je l'ai reçu. Ils sont<br/>vraiment rapides et fiables.</p>
            </div>
        </ContentOne>
        <ContentTwo></ContentTwo>
        <ContentThree></ContentThree>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    width: 1905px;
    height: 832px;
    margin-top: 849px;
    background: #292D31;
    
    h4 {
        width: 648px;
        height: 73px;
        margin-left: 596px;
        padding-top: 30px;
        font-family: 'Epilogue';
        font-style: normal;
        font-weight: 700;
        font-size: 48px;
        line-height: 49px;
        color: #FFFFFF;
    }   
`;

const ContentOne = styled.div`
    img {
        margin-left: 397px;
        width: 212px;
    }
    
    div {
        background: #FFFFFF;
        border-radius: 43px;
        width: 500px;
        height: 500px;
        margin-left: 260px;
        margin-top: -245px;
    }

    div h6 {
        font-family: 'Epilogue';
        font-style: normal;
        font-weight: 700;
        font-size: 32px;
        line-height: 33px;
        color: #292D31;
        width: 170px;
        height: 33px;
        margin-left: 178px;
        margin-top: 129px;
        padding-top: 110px;
    }
    
    div img {
        margin-left: 170px;
        margin-top: 30px;
    }
    
    div p {
        color: #292D31;
        font-family: 'Epilogue';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 25px;
        width: 440px;
        height: 100px;
        margin-left: 27px;
        padding-top: 30px;
    }
`;

const ContentTwo = styled.div``;

const ContentThree = styled.div``;


export default TestimonialSection;
