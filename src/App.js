import React from 'react';

import BorderBlobs from './components/BorderBlobs'
import BlobGen from './components/BlobGen'

import randomNumber from './helpers/randomNumber'


function App() {

  const colorGroup = ['#495867', '#577399', '#bdd5ea', '#f7f7ff', '#fe5f55'];
  const sizeRange = [((colorGroup.length - 1) * 100), (colorGroup.length * 100)];
  const gapRange = [((colorGroup.length - 1) * 10), (colorGroup.length * 10)]

  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        height: '100%'
      }}
    >
      <BorderBlobs
        colorGroup={colorGroup}
        maxWidth={randomNumber(sizeRange[0], sizeRange[1])}
        maxHeight={randomNumber(sizeRange[0], sizeRange[1])}
        widthGap={randomNumber(gapRange[0], gapRange[1])}
        heightGap={randomNumber(gapRange[0], gapRange[1])}
      />
      {/* <BlobGen /> */}
    </div>
  );
}

export default App;
