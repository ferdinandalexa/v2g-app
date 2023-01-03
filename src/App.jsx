import { Switch, Route } from 'wouter';

import Header from './Components/Header';
import FileControls from './Components/FilesControls';
import Spinner from './Components/Spinner';
import Preview from './Components/Preview';
import NotFoundGIF from './Components/NotFoundGIF';
import Footer from './Components/Footer';

import ContextProviders from './Containers/ContextProviders';
import useFFmpeg from './hooks/useFFmpeg';
import { useEffect } from 'react';

function App () {
  const { loadFFmpeg, isFFmpegLoaded } = useFFmpeg();

  useEffect(() => {
    loadFFmpeg();
  }, []);

  return (
    <div className='h-full max-w-screen-md mx-auto'>
      <Header />
      <main className='flex flex-col gap-4 my-4'>
        <ContextProviders>
          <Switch>
            <Route path='/' component={isFFmpegLoaded ? FileControls : Spinner} />
            <Route path='/preview/:id' component={Preview} />
            <Route component={NotFoundGIF} />
          </Switch>
        </ContextProviders>
      </main>
      <Footer />
    </div>
  );
}

export default App;
