import Footer from "./components/layout/footer/footer";
import Button from "./components/reusable/button/button";

const App = () => {
  return (
    <div className="App">
      <main>
        <div className="intro__container">
          <h1>Learn to code by watching others</h1>

          <p>
            See how experienced developers solve problems in real-time. Watching
            scripted tutorials is great, but understanding how developers think
            is invaluable.
          </p>

          <Button>Try it free 7 days then $20/mo. thereafter</Button>
        </div>

        <div className="form__container">
          <form action="">
            <fieldset>
              <label htmlFor="">First Name</label>
              <input type="text" />

              <label htmlFor="">Last Name</label>
              <input type="text" />

              <label htmlFor="">Email Address</label>
              <input type="email" />

              <label htmlFor="">Password</label>
              <input type="password" />

              <Button>Claim your free trial</Button>
            </fieldset>

            <p>
              By clicking the button, you are agreeing to our
              <strong>Terms and Services</strong>{" "}
            </p>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
