import React, { useEffect, useRef } from 'react';

const Vis3 = (props) => {
  // Ref to store the container ID
  const containerIDRef = useRef('');

  if (!containerIDRef.current) {
    // Generate a unique ID for the container if it hasn't been generated yet
    containerIDRef.current = Math.random().toString(36).substring(2);
  }

  useEffect(() => {
    const generatedID = containerIDRef.current;

    // If a callback function is provided, set it on the window object
    if (typeof props.onLoad === 'function') {
      window[`vis_callback_${generatedID}`] = props.onLoad;
    }

    // Create a script element and set its attributes
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://${props?.domainName || ''}/${props?.ID || ''}/embed?container=${generatedID}&callback=vis_callback_${generatedID}`;

    // Append the script to the document body
    document.body.appendChild(script);

    // Cleanup function to remove the script element when the component unmounts or props change
    return () => {
      document.body.removeChild(script);
      // Remove the callback function from the window object
      if (typeof props.onLoad === 'function') {
        delete window[`vis_callback_${generatedID}`];
      }
    };
  }, [props]); // Run this effect whenever props change

  return (
    <>
      <div id={containerIDRef.current}></div>
    </>
  );
}

export { Vis3 }