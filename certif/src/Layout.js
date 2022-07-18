import React from 'react';
import FooterSection from './components/FooterSection';
import Header from './components/Header';

const Layout = ({children}) => {
  return (
    <div>
      <Header />
      <main>
        {children}
      </main>
      <FooterSection />
    </div>
  );
}

export default Layout;















           




          <div className="form-group2">
          <div class="row mb-4">
            <div class="col">
              <div class="form-outline">
                <label class="form-label" for="form3Example1">Prenom et Nom</label>
                <input type="text" id="form3Example1" class="form-control" />
              </div>
            </div>
            <div class="col">
                <div class="form-outline">
                  <label class="form-label" for="form3Example2">Last name</label>
                  <input type="text" id="form3Example2" class="form-control" placeholder='Prenom' />
                </div>
              </div>

                <div class="col">
                  <div class="form-outline">
                    <input type="text" id="form3Example2" class="form-control" />
                    <label class="form-label" for="form3Example2">Last name</label>
                  </div>
                </div>
            </div>
        </div>