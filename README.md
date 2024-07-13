# Vis3 next-react
Kavimo Vis3 NextJs, React Component

# Installation:
```
npm i @kavimo/vis3-next-react
```

# Use in Nextjs Pages Home:
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

# Use in React App:
```
import { Vis3 } from '@kavimo/vis3-next-react'

const handleLoad = ( media ) => {
    console.log('Vis: Media Loaded');
    console.log( media )
}

function App() {
  return (
    <div className="App">
      <Vis3 domainName="stream.domain.com" ID="xxxxxxxxxxxx" onLoad={handleLoad} />
    </div>
  );
}

export default App;
```

# Use in Nextjs App Router Home:
```
export default async function Page({ params }) {
  return (
    <>
      <HomeComponent />
    </>
  )
}


// Home Component File:

'use client'
const HomeComponent = () => {
    
    const handleLoad = ( media ) => {
        console.log('Vis: Media Loaded');
        console.log( media )
    }

    return (
        <main>
            <Vis3 domainName="stream.domain.com" ID="xxxxxxxxxxxx" onLoad={handleLoad} />
        </main>
    );
}

export default LoginForm;
```

# Handler Mehtod:
```
/**
 * handleLoad - Function to handle the loading of media.
 * @param {Object} media - The media object containing media API and details.
 */
const handleLoad = (media) => {
    console.log('Vis: Media Loaded')
    console.log(media)

    const mediaAPI = media.api

    // Get Data Methods
    // Fetch and log various media properties

    // Get media ID
    const mediaID = mediaAPI.get.ID()
    console.log(`Media ID: ${mediaID}`)

    // Get current playback time
    const currentTime = mediaAPI.get.CurrentTime()
    console.log(`Current Time: ${currentTime}`)

    // Get media duration
    const duration = mediaAPI.get.Duration()
    console.log(`Duration: ${duration}`)

    // Get media title
    const title = mediaAPI.get.Title()
    console.log(`Title: ${title}`)

    // Actions Methods
    // Control the media playback with available actions

    // Play the media
    mediaAPI.actions.Play()

    // Pause the media
    mediaAPI.actions.Pause()

    // Seek to a specific time (e.g., 120 seconds)
    mediaAPI.actions.Seek(120)

    // Rewind the media by 5 seconds (default)
    mediaAPI.actions.Rewind()

    // Forward the media by 10 seconds
    mediaAPI.actions.Forward(10)

    // Example: Set DRM text with various options
    const drmOptions = {
        "text": [
            "info@kavimo.com",
            "00123456789",
            "more text"
        ],
        "time": "2.5",       // Seconds (optional)
        "color": "#FFFFFF",  // Text color (optional)
        "fontSize": "13px",  // Font size (% or px) (optional)
        "fontStyle": "bold", // Font style (italic, bold, normal) (optional)
        "fontName": "arial", // Font name (custom fonts can be used) (optional)
        "opacity": "0.4"     // Text opacity (optional)
    }
    mediaAPI.DRMText(drmOptions)

    // Events Methods
    // Add event listeners for media events

    // Example: Add event listeners directly
    mediaAPI.events.OnPlay(() => {
        console.log('Media is playing')
    })
    mediaAPI.events.OnEnded(() => {
        console.log('Media has ended')
    })

    // Define event handlers for reuse
    const handlePlay = () => {
        console.log('Media is playing')
    }
    const handleEnded = () => {
        console.log('Media has ended')
    }

    // Add event listeners using predefined handlers
    mediaAPI.events.OnPlay(handlePlay)
    mediaAPI.events.OnEnded(handleEnded)

    // Add event listener for pause event
    mediaAPI.events.OnPause(() => {
        console.log('Media is paused')
    })

    // Add event listener for time update events
    mediaAPI.events.OnTimeupdate((time) => {
        console.log(`Current time: ${time}`)
    })
}

```