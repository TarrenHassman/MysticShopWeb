function Input() {
  return (
    <div className="undented" style={{
      height:"50px",
      lineHeight:"50px",
      width:"200px",
      display: "flex",
    alignItems: "center",
    }}>
      <div className="dented" style={{
        color:"green",
      height:"40px",
      width:"190px",
      margin:"auto"
    }}></div>
    </div>
  );
}

export default Input;