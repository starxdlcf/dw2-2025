import Contador from './Contador'
import './App.css'



function App() {
    return(
      <>
      <div id='main'>
        <div id='bolinha'></div>
        <div id='bolona'></div>
        <Contador/>
      </div>
      <script>
        {
          window.onload = ()=>{
            document.getElementById("main").addEventListener("mousemove", (e) => {
              document.getElementById("bolona").style.backgroundPosition = `${e.screenX/3}px ${e.screenY/3}px`
              document.getElementById("bolinha").style.backgroundPosition = `${e.screenX/5}px ${e.screenY/5}px`
            })

          }
      }
      </script>
      </>
    )
}

export default App