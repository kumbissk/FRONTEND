import React from 'react';
import styled from 'styled-components';

const Login = () => {
  return (
      <Wrapper>
         <HeaderForm>
            <h4>Creez votre compte</h4>
         </HeaderForm>
         <ContentForm>
          <form>
            <div className="form-group1">
              <label HtmlFor="exampleInputCompte">Type de compte</label>
              <input type="radio" id="client" name="drone" value="client"/>
              <label HtmlFor="client" className='client'>Client</label>
              <input type="radio" id="livreur" name="drone" value="livreur"/>
              <label HtmlFor="livreur" className='livreur'>Livreur</label>
            </div>
            <div className="form-group2">
              <label HtmlFor="exampleInputName">Nom et prenom</label>
              <select className="form-select" aria-label="Default select example">
                <option value="monsier">Mr</option>
                <option value="madame">Mme</option>
              </select>
              <div className='Input'>
                <input type="text" className="form-control" id="exampleInputFirstame" aria-describedby="emailHelp" placeholder="Prenom"/>
              </div>
              <div className='para'>
                <input type="text" className="form-control" id="exampleInputLastname" aria-describedby="emailHelp" placeholder="Nom"/>
              </div>
            </div>
            <div className="form-group3">
              <div className='adress'>
                <label HtmlFor="exampleInputEmail1">Adresse Email</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="nom@domaine.com"/>
              </div>
              <div className='motpass'>
                <label HtmlFor="exampleInputPassword1">Mot de passe</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Mot de passe"/>
              </div>
            </div>
            <div className="form-group4">
              <label HtmlFor="exampleInputPhone">Numero de telephone</label>
              <input type="text" className="form-control" id="exampleInputPhone" aria-describedby="emailHelp" placeholder="+33 6 XX XX XX XX"/>
            </div>
            <div className="form-group5">
              <div className='Adress'>
                <label HtmlFor="exampleInputAddress">Adresse</label>
                <input type="text" className="form-control" id="exampleInputAddress" aria-describedby="emailHelp" placeholder="Adresse de rue"/>
              </div>
              <div className='Ville'>
                <label HtmlFor="exampleInputVille">Ville</label>
                <input type="text" className="form-control" id="exampleInputVille" aria-describedby="emailHelp" placeholder="Ville"/>
              </div>
            </div>
            <div className="form-group6">
              <label HtmlFor="exampleInputPays">Pays</label>
              <div className='SelectPays'>
                <select class="form-select" aria-label="Default select example" name='pays' id='pays-select'>
                  <option selected>--Choisissez le pays--</option>
                  <option value="Senegal">Senegal</option>
                  <option value="Mali">Mali</option>
                  <option value="Benin">Benin</option>
                </select>
              </div>
              <div className='title'>
                <label HtmlFor="exampleInputPays">Region</label>
              </div>
              <div className='SelectRegion'>
                <select class="form-select" aria-label="Default select example" name='region' id='region-select'>
                  <option selected>--Selectionne la region--</option>
                  <option value="Dakar">Dakar</option>
                  <option value="Mali">Mali</option>
                  <option value="Benin">Benin</option>
                </select>
              </div>
              <div className='CodePostal'>
                <label HtmlFor="exampleInputCodePostal">Code postal</label>
                <input type="text" className="form-control" id="exampleInputCodePostal" aria-describedby="emailHelp" placeholder="Code postal"/>
              </div>
            </div>
            <div className="form-group7">
              <input type="checkbox" id="use" name="use"/>
              <label for="use">J’accepte les termes et conditions d’utilisation</label>
            </div>
          </form>
         </ContentForm>
         <FooterForm>
            <div className='One'>
              <button type="submit">Creer un compte</button>
            </div>
            <div className='buttonTwo'>
              <button type="submit">Effacer</button>
            </div>
         </FooterForm>
      </Wrapper>
    
  );
}

const Wrapper = styled.div`
  width: 1049px;
  height: 1096px;
  margin-left:372px;
  margin-top:110px;`;

const HeaderForm = styled.div`
  width: 1049px;
  height: 109px;
  background: #F2A401;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  
  h4 {
    width: 314px;
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
  
form div.form-group1 label{
  width: 159px;
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

form div.form-group2 label {
  width: 153px;
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

div select.form-select{
  width: 232px;
  height: 48px;
  background: #FFFFFF;
  border: 0.5px solid rgba(0, 0, 0, 0.5);
  margin-left: 70px;
  margin-top: 40px;
}

form div.form-group2 input[type="text"]{
  width: 320px;
  height: 48px;
  margin-left: 70px;
  margin-top: 40px;
  background: #FFFFFF;
  border: 0.5px solid rgba(0, 0, 0, 0.5);
}

form div.form-group2 div{
  margin-left: 240px;
  margin-top: -87px;
}

form div.form-group2 div.para{
  margin-left: 570px;
}

form div.form-group3 label{
  width: 153px;
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

form div.form-group3 input[type="email"]{
  width: 320px;
  height: 48px;
  margin-left: 70px;
  margin-top: 20px;
  background: #FFFFFF;
  border: 0.5px solid rgba(0, 0, 0, 0.5);
}

form div.form-group3 input[type="password"]{
  width: 320px;
  height: 48px;
  margin-left: 70px;
  margin-top: 20px;
  background: #FFFFFF;
  border: 0.5px solid rgba(0, 0, 0, 0.5);
}

form div.form-group3 div.motpass{
  margin-left: 330px;
  margin-top: -130px;
}

form div.form-group4 label{
  width: 215pxpx;
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

form div.form-group4 input[type="text"]{
  width: 320px;
  height: 48px;
  margin-left: 70px;
  margin-top: 20px;
  background: #FFFFFF;
  border: 0.5px solid rgba(0, 0, 0, 0.5);
}

form div.form-group5 label{
  width: 215pxpx;
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

form div.form-group5 input[type="text"]{
  width: 320px;
  height: 48px;
  margin-left: 70px;
  margin-top: 20px;
  background: #FFFFFF;
  border: 0.5px solid rgba(0, 0, 0, 0.5);
}

form div.form-group5 div.Ville{
  margin-left: 330px;
  margin-top: -131px;
}

form div.form-group6 label{
  width: 215pxpx;
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

form div.form-group6 div.CodePostal input[type="text"]{
  width: 230px;
  height: 50px;
  margin-left: 70px;
  margin-top: 20px;
  background: #FFFFFF;
  border: 0.5px solid rgba(0, 0, 0, 0.5);
}

form div.form-group6 div.title{
  margin-left:246px;
  margin-top: -151px;
}

div.SelectRegion select{
  margin-left: 315px;
}

form div.form-group6 div.CodePostal{
  margin-left: 489px;
  margin-top: -132px;
}

form div.form-group7{
  margin-top: -20px;
}

form div.form-group7 label{
  width: 215pxpx;
  height: 21px;
  margin-left: 18px;
  // margin-top: -25px;
  font-family: 'Epilogue';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  color: #292D31;
}

form div.form-group7 input[type="checkbox"]{
  width: 34px;
  height: 25px;
  margin-left: 70px;
  margin-top: 40px;
  background: #EFF1F5;
  border: 1px solid #FFFFFF;
  // box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 3px;
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

  div.buttonTwo {
    margin-left: 328px;
    margin-top: -55px;
  }

  div.buttonTwo button[type="submit"]{
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

`;

export default Login;
