# vis3-next-react
Kavimo Vis3 NextJs, React Component

# Installation:
```
npm i @kavimo/vis3-next-react
```

# Use in Nextjs Home:
```
import { Vis3 } from '@kavimo/vis3-next-react';

export default function Home() {

  const handleLoad = ( media ) => {
    console.log('Vis: Media Loaded');
    console.log( media )
  }

  return (
    <>
      <Vis3 domainName="stream.domain.com" ID="xxxxxxxxxxxx" onLoad={handleLoad} />
    </>
  )
}

```