const Login = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-4 shadow rounded p-5 text-center">
            <h3 className=" mt-3">login</h3>
            <form action="">
              <input placeholder="enter your name" required type="text" className="form-control mt-4" name="" id="" />
              <input placeholder="enter your email" required type="email" className="form-control mt-4" name="" id="" />
              <input placeholder="enter your password" required type="password" className="form-control mt-4" name="" id="" />

              <button className="btn btn-success mt-5 w-75 fs-4">login !</button>
            </form>
          </div>
        </div>
      </div>
      <div
        className="container-fluid mt-5"
        style={{ backgroundColor: "#415a77" }}
      >
        <div className="row text-white">
          <div className="col-md-12">
            <div className="container py-5">
              <div className="row justify-content-around">
                <div className="col-md-4">
                  <h2>Code_Art</h2>
                  <p>Learn to build. Build to inspire</p>
                </div>
                <div className="col-md-4">
                  <h2>courses</h2>
                  <ul className="list-unstyled">
                    <li className="mt-4">html</li>
                    <li className="mt-2">css</li>
                    <li className="mt-2">javascript</li>
                    <li className="mt-2">php</li>
                    <li className="mt-2">laravel</li>
                    <li className="mt-2">sql</li>
                    <li className="mt-2">figma</li>
                  </ul>
                </div>
                <div className="col-md-4">
                  <h2 className="mt-3">send message</h2>
                  <div class="input-group mt-4">
                    <input class="form-control" type="text" name="" id="" />
                    <button
                      class="btn text-white "
                      style={{ backgroundColor: "#00adb5" }}
                    >
                      button
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
