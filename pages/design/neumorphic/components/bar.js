import '../dented.module.css';
import '../nested.module.css';
import '../undented.module.css';

//TODO: Parameters for width/height
//TODO: Animate
function Bar() {
  return (
    <div className="dented" style={{
      height:"50px",
      lineHeight:"50px",
      width:"200px",
      display: "flex",
    alignItems: "center",
    }}>
      <div className="nested" style={{
        color:"green",
      height:"30px",
      width:"90px",
      marginLeft:"10px"
    }}></div>
    </div>
  );
}

export default Bar;