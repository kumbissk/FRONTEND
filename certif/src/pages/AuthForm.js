import React from 'react';
import styled from 'styled-components';

const AuthForm = () => {
  return (
    <Wrapper>
      <HeaderForm>
        <h4>Connecter vous a votre compte</h4>
      </HeaderForm>
      <ContentForm>
        <form>
          <div className="form-group">
            <div className='firstColumn'>
              <label for="exampleInputEmail1" class="form-label">Adresse e-mail</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Entrez-votre email" />
              <label for="exampleInputPassword1" class="form-label">Mot de passe</label>
              <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Entrez-votre mot de pass" />
            </div>
            <div className='secondColumn'>
              <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
              <label class="form-check-label" for="exampleCheck1">Se souvenir de moi</label>
            </div>
            <div className='thirdColumn'>
              <p className='para1'>Mot de passe oublié?<span className='forget'>Cliquez ici</span> </p>
            </div>
          </div>
        </form>
      </ContentForm>
      <FooterForm>
        <div className='One'>
          <button type="submit">S’identifier</button>
        </div>
        <div className='Two'>
          <button type="submit">Nouvel utilisateurs?inscrivez-vous ici</button>
        </div>
      </FooterForm>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 1049px;
  height: 796px;
  margin-left:372px;
  margin-top:110px;`;

const HeaderForm = styled.div`
  width: 1049px;
  height: 109px;
  background: #F2A401;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  
  h4 {
    width: 503px;
    height: 33px;
    margin-left: 70px;
    padding-top: 40px;
    font-family: 'Epilogue';
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 33px;
    color: #FFFFFF;
  }`;

const ContentForm = styled.div`
  div.form-group div.firstColumn label {
    width: 149px;
    height: 21px;
    margin-left: 70px;
    margin-top: 40px;
    font-family: 'Epilogue';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
    color: #292D31;
  }

  div.form-group div.firstColumn input {
    width: 422px;
    height: 58px;
    margin-left: 70px;
    margin-top: 10px;
    border: 0.1px solid rgba(0, 0, 0, 0.5);
    border-radius: 5px;
  }

  form div.form-group div.secondColumn label {
    width: 149px;
    height: 16px;
    margin-left: 25px;
    margin-top: 75px;
    font-family: 'Epilogue';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 16px;
    color: #292D31;
  }

  form div.form-group div.secondColumn input[type="checkbox"] {
    margin-left: 70px;
    margin-top: 75px;
  }

  form div.form-group div.thirdColumn p {
    margin-left: 70px;
    margin-top: 30px;
    font-family: 'Epilogue';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 16px;
    color: #292D31;
  }

  form div.form-group div.thirdColumn p span.forget {
    color: #F2A401;
    margin-left: 5px;
    cursor: pointer;
  }
`;

const FooterForm = styled.div`
    width: 1049px;
    height: 109px;
    margin-top: 30px;
    background: #F2A401;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    div.One {
      margin-left: 68px;
      padding-top: 25px;
    }

    div.One button[type="submit"]{
      font-family: 'Epilogue';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 16px;
      color: #292D31;
      background: #FFFFFF;
      border: 2px solid #FFFFFF;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 5px;
      width: 233px;
      height: 56px;
      cursor: pointer;
    }

    div.Two {
      margin-left: 328px;
      margin-top: -55px;
    }

    div.Two button[type="submit"]{
      font-family: 'Epilogue';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 16px;
      color: #292D31;
      background: #FFFFFF;
      border: 2px solid #FFFFFF;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 5px;
      width: 333px;
      height: 56px;
      cursor: pointer;
    }`;

export default AuthForm;
