function Book() {
  return (
    <div className="card">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMKj83FrUFU_vZlDO9Ncx0Opbw649p9EU4Pg&s" width="250" height="250" alt="Physics Book Image" />
      <h4>Title: Physics</h4>
      <h3>Price: ₹400/-</h3>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Book />);