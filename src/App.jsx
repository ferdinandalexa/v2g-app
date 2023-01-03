import { Switch, Route } from 'wouter';

import Header from './Components/Header';
import Body from './Components/Body';
import Spinner from './Components/Spinner';
import Preview from './Components/Preview';
import NotFoundGIF from './Components/NotFoundGIF';
import Footer from './Components/Footer';

import Transcode from './Containers/Transcode';
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
        <Transcode>
          <Switch>
            <Route path='/' component={isFFmpegLoaded ? Body : Spinner} />
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
