import React from 'react';
import styled from 'styled-components';

const FooterSection = () => {
  return (
    <Wrapper>
        <TextContent>
            <p><img src='/images/logoFooter.png' alt='logoFooter'/></p>
            <div>
                <p>Abonnez-vous à notre NewsLetters<br/>pour ne pas rater les offres exceptionnelles</p>
                <label>
                    <input type="text" placeholder='Entrez votre email' />
                </label>
                <button>Envoyer</button>
            </div>
            <section>
                <h5>flashExpress</h5>
                <h6>est disponible en application mobile<br/>Téléchargez gratuitement sur</h6>
                <article>
                    <img src='/images/appStore.png' alt='appStore'/>
                    <p>Download on the<br/>AppleStore</p>
                </article>
                <article className='two'>
                <img src='/images/googlePlay.png' alt='googlePlay'/>
                <p>GET IT ON<br/>PlayStore</p>
            </article>
            </section>
        </TextContent>
        <ContentSocial></ContentSocial>
        <Note></Note>
    </Wrapper>
  );
}

const Wrapper = styled.div`
width: 1905px;
height: 745px;
// margin-left: 0px;
// margin-top: 10px;
background: #EFF1F5;`;

const TextContent = styled.div`
    p img {
        width: 211px;
        height: 141px;
        margin-left: 252px;
        margin-top: 80px;
    }
    
    div {
        width: 501px;
        height: 108px;
        margin-left: 583px;
        margin-top: -130px;
    }
    
    div p {
        font-family: 'Epilogue';
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 18px;
        color: #292D31;
        width: 413px;
        height: 36px;
    }
    
    div input {
        width: 352px;
        height: 51.87px;
        background: #FFFFFF;
        border-radius: 14px;
        border: 1px solid #EFF1F5;
        color: #D9D9D9;
        font-family: 'Epilogue';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        text-align: center;
    }

    div button {
        width: 127px;
        height: 54px;
        margin-left: 22px;
        background: #F2A401;
        border-radius: 14px;
        border: 1px solid #F2A401;
        font-family: 'Epilogue';
        color: #FFFFFF;
        font-family: 'Epilogue';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 18px;
    }

    section {
        width: 411px;
        height: 91px;
        margin-left: 1187px;
        margin-top: -100px;
    }

    section h5 {
        font-family: 'Epilogue';
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 14px;
        color: #F2A401;
    }

    section h6 {
        // height: 14px;
        width: 360px;
        margin-left: 140px;
        margin-top: -40px;
        font-family: 'Epilogue';
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 14px;
        color: #292D31;
    }

    section article {
        margin-left: 140px;
        margin-top: 20px;
        widht: 113px;
        height: 54px;
        border: 2px solid #000000;
        border-radius: 11px;
        width: 113.52px;
        height: 54px;
    }

    section article img {
        margin-left: 7px;
    }
    
    section article p {
        font-family: 'Epilogue';
        font-style: normal;
        font-weight: 400;
        font-size: 8px;
        line-height: 8px;
        color: #000000;
        margin-left: 30px;
    }

    section article.two {
        margin-left: 280px;
        margin-top: -53px;
    }
`;

const ContentSocial = styled.div``;

const Note = styled.div``;

export default FooterSection;
