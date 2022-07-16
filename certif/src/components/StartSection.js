import React from 'react';
import styled from 'styled-components';

const StartSection = () => {
  return (
    <Wrapper>
      <ContentSection> 
        <img src='/images/Start_Picture.png' alt='StartPicture'/>
        <h6>Alors qu’attendez-vous<br/>pour commencer votre <br/>expérience d’expédition  ?</h6>
        <div>
          <p>Commencer maintenant</p>
          <p><i class="fa-solid fa-arrow-right"></i></p>
        </div>
      </ContentSection>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 1440px;
  height: 745px;
  // margin-left: 220px;
  // margin-top: 4788px;
  // background: #FFFFFF;
`;

const ContentSection = styled.div`
  width: 1316px;
  height: 541px;
  margin-left: 62px;
  baground-image: linear-gradient(90deg, #FFFFFF 10.18%, rgba(22, 70, 194, 0) 100%, #1646C2 100%);
  // margin-top: 4853px;
  
  

  img {
    width: 566px;
    height: 583px;
    margin-left: 182px;
    // margin-top: 481px;
  }

  h6 {
    width: 694px;
    height: 153px;
    margin-left: 796px;
    margin-top: -483px;
    font-family: 'Epilogue';
    font-style: normal;
    font-weight: 700;
    font-size: 50px;
    line-height: 51px;
    color: #292D31;
  }

  div {
    width: 481px;
    height: 100px;
    margin-left: 797px;
    margin-top: 98px;
    border: 6px solid #F2A401;
    border-radius: 50px;
  }

  p{
    // width: 335px;
    // height: 29px;
    // mardin-left: 900px;

    widht: 335px;
    height: 29px;
    // margin-left: 900px;
    font-family: 'Epilogue';
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 29px;
    color: #292D31;
    margin-top: 28px;
    padding-left: 25px;
    cursor: pointer;
    
    
  }

  img {
    // margin-left: 72.92%;
    // padding-right: 25px;
  }
`;


export default StartSection;
