import { Switch, Route } from 'wouter';

import Header from './Components/Header';
import Body from './Components/Body';
import Preview from './Components/Preview';
import Footer from './Components/Footer';

import Transcode from './Containers/Transcode';

function App () {
  return (
    <div className='h-full max-w-screen-md mx-auto'>
      <Header />
      <Transcode>
        <Switch>
          <Route path='/' component={Body} />
          <Route path='/preview/:id' component={Preview} />
        </Switch>
      </Transcode>
      <Footer />
    </div>
  );
}

export default App;
