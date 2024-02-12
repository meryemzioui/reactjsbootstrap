import NavBar from "./NavBar";
import Title from "./Title";
import Card from "./Card";

function App() {
  return (
    <div className="App">
      {/* NAV BAR */}
      <NavBar></NavBar>
      {/* un titre est une description */}
      <Title></Title>
      {/* les 3 cartes */}
      <div style={{display:"flex", justifyContent:"center",gap:"40px"}}>
        <Card source="img1.jpg"></Card>
        <Card source="img2.jpg"></Card>
        <Card source="img3.webp"></Card>
      </div>
    </div>
  );
}

export default App;
