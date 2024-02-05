import './App.css';
import { NavBar} from './compontents/NavBar';
import { Banner } from './compontents/Banner';
import { About } from './compontents/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import Experience from './compontents/Experience';
import html2pdf from 'html2pdf.js';


function App() {

  const downloadFullPdf = () => {
    const  element = document.getElementById("root");

    const options = {
      margin: 10,
      filename: "GDS_portfolio_full.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2},
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait"},
    };

    html2pdf().from(element).set(options).save();
  }
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <About />
      <Experience />
      <button onClick={downloadFullPdf}>Download Full PDF</button>
    </div>
  );
}

export default App;
