import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
        <Wrapper>
            <InfosHeaderTop>
                <p>Horaires : 08h00 - 18h00 | du lundi au samedi</p>
            </InfosHeaderTop>
            <Brand>
                <img src={"/images/logoHeader.png"} alt="logoHeader" />
            </Brand>
            <Nav>
                <a href='Accueil'>Accueil</a>
                <a href='Nos services'>Nos services</a>
                <a href='A propos'>A propos</a>
                <a href='Contact'>Contact</a>
            </Nav>
            <Search>
                <img src={"/images/search1.png"} alt="search" />
            </Search>
            <LogIn>
                <div>
                    <button>Se connecter</button>
                </div>
            </LogIn>
            <SingUp>
                <div>
                    <button2>S'inscrire</button2>
                </div>
            </SingUp>
        </Wrapper>
  );
}

const Wrapper = styled.div`
    weight: 1440px;
    height: 140.7px;
    margin-left: 0;
    margin-top: 0;
    background-color: #fff;
    box-shadow: 0px 9px 12px rgba(0, 0, 0, 0.12);
    @media screen and (max-width: 600px) {
        Nav {
            float: none;
            width: 100%;
           
        }
    }`;

const InfosHeaderTop = styled.div`
    height: 25px;
    weight: 472px;
    font-family: 'Epilogue', sans-serif;
    font-style: normal;
    font-weight: 400;
    text-align: center;
    font-size: 24px;
    line-height: 25px;
    color: #A3AABA;`;

const Brand = styled.div`
    width: 211px;    
    height: 72px;
    margin-left: 290px;
    margin-top: 36px;
    cursor: pointer;`;


const Nav = styled.nav`
    display: flex;
    list-style: none;
    gap: 2rem;
    height: 18.47px;
    margin-left: 664px;
    margin-top: -30px;
    font-family: 'Epilogue', sans-serif;
    font-style: normal;
    
    a{
        text-decoration: none;
        font-weight: 400;
        font-size: 20px;
        line-height: 20px;
        color: #292D31;
    }
    
    a:hover{
        color: #F2A401;
    }`;

const Search = styled.div`
    width: 16px;
    height: 16px;
    margin-left: 1149px;
    margin-top: -15px;
    cursor: pointer;`;

const LogIn = styled.div`
    width: 181px;
    height: 18.47px;
    margin-left: 1385px;
    
    div{
        box-sizing: border-box;
        margin-top: -50px;
    }
    
    button{
        width: 181px;
        height: 42.21px
        baground: #fff;
        border: 2px solid #F2A401;
        border-radius: 46px;
        padding: 12px 20px;
        background-color: #fff;
        color: #292D31;
        font-family: 'Epilogue', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 20px;
        cursor: pointer;
        margin-left: -46%;
        margin-top: 7%; 
    }`;
const SingUp = styled.div`
    width: 129px;
    height: 42.21px;
    margin-left: 1525px;

    div{
        box-sizing: border-box;
        margin-top: 9px;
    }
    
    button2{
        width: 129px;
        height: 42.21px;
        background: #fff;
        border: 2px solid #F2A401;
        border-radius: 46px;
        padding: 12px 20px;
        cursor: pointer;
        font-family: 'Epilogue';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 20px;
        background-color: #fff;
        color: #292D31;
        
    }`;

export default Header;
