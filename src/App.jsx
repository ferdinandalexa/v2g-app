import { Switch, Route } from 'wouter';

import Header from './Components/Header';
import Body from './Components/Body';
import Preview from './Components/Preview';
import NotFoundGIF from './Components/NotFoundGIF';
import Footer from './Components/Footer';

import Transcode from './Containers/Transcode';

function App () {
  return (
    <div className='h-full max-w-screen-md mx-auto'>
      <Header />
      <main className='flex flex-col gap-4 my-4'>
        <Transcode>
          <Switch>
            <Route path='/' component={Body} />
            <Route path='/preview/:id' component={Preview} />
            <Route component={NotFoundGIF} />
          </Switch>
        </Transcode>
      </main>
      <Footer />
    </div>
  );
}

export default App;
