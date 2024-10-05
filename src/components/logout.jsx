function Logout({ logouthndl }) {
  return (
    <>
      <div className="d-flex flex-column align-items-center my-5 ">
        <h1>Get Out</h1>
        <button onClick={logouthndl} className="btn btn-danger btn-lg my-4">Siktir</button>
      </div>
    </>
  );
}

export default Logout;