import Cart from "./Cart";

export default function Navbar() {
  return (
    <div
      className="navbar navbar-light  shadow"
      style={{
        backgroundColor: "  rgb(182, 61, 61)",
        position: "fixed",
        top: "0",
        width: "100%",
        zIndex: 1,
      }}
    >
      <div className="container-fluid">
        <a href="/" className="navbar-brand ">
          <h2 className="text-white ms-5">Portugese Food</h2>
        </a>

        <div className="d-flex">
          <Cart />
        </div>
      </div>
    </div>
  );
}
