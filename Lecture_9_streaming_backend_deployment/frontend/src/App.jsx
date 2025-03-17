import './App.css'

function App() {

  return (
    <>
      <h2>Streaming Video Player</h2>
      <video width="640" height="360" controls>
        <source src="http://localhost:3000/rangeStreaming" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </>
  );
}

export default App
