import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { checkLoggedInStatus } from '../redux';
import Navbar from './Navbar';

const Home = ({ status, isLoggedIn }) => {
  useEffect(() => {
    isLoggedIn();
  }, [isLoggedIn]);

  const showBtns = () => {
    if (!status.loggedIn) {
      return (
        <>
          <Link to="/signup" className="navbar-brand auth-btn-c text-dark">SIGN UP HERE</Link>
          <a className="navbar-brand auth-btn-c text-dark" href="#features">EXPLORE FEATURES</a>
        </>
      );
    }

    return (
      <>
        <h3 className="text-white m-3">
          Welcome @
          {status.user.username}
        </h3>
        <a className="navbar-brand auth-btn-c text-dark" href="#features">EXPLORE FEATURES</a>
      </>
    );
  };

  return (
    <>
      <Navbar loggedIn={status.loggedIn} />
      <div id="intro" className="section-a bg-dark">
        <div className="container text-center text-white p-5">
          <h1 className="mt-5">PERFORMANCE TRACKING</h1>
          <p>
            Keep tacking of your daily activities to focus on the ones
            that improves your sales performance.
          </p>
          <div>
            {
            showBtns()
          }
          </div>
        </div>
      </div>
      <div className="section-b">
        <div className="container text-center text-white p-5 mt-5">
          <h3 className="text-secondary">With collective engagement focused on efficiency and a reduction of waste.</h3>
          <h5 className="text-secondary">TogetherWeCan create a more sustainable world.</h5>
        </div>
        <div className="row">
          <div className="col-md-6 p-5 text-center">
            <img className="coll-wallpaper" src={bgImg} alt="bg" />
          </div>
          <div className="col-md-6 d-flex flex-column p-5">
            <div>
              <h3>Lorem Ipsum</h3>
              <h6>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum mauris metus, vehicula mattis
                nulla dignissim eu. Nam tristique, tellus ornare maximus ultrices, neque urna sagittis lacus, non pretium
                libero elit in ante. Sed pellentesque hendrerit lacus, sit amet vestibulum metus pharetra semper
              </h6>
            </div>
            <div>
              <h3>Lorem Ipsum</h3>
              <h6>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum mauris metus, vehicula mattis
                nulla dignissim eu. Nam tristique, tellus ornare maximus ultrices, neque urna sagittis lacus, non pretium
                libero elit in ante. Sed pellentesque hendrerit lacus, sit amet vestibulum metus pharetra semper
              </h6>
            </div>
            <div>
              <h3>Lorem Ipsum</h3>
              <h6>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum mauris metus, vehicula mattis
                nulla dignissim eu. Nam tristique, tellus ornare maximus ultrices, neque urna sagittis lacus, non pretium
                libero elit in ante. Sed pellentesque hendrerit lacus, sit amet vestibulum metus pharetra semper
              </h6>
            </div>
            <div>
              <h3>Lorem Ipsum</h3>
              <h6>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum mauris metus, vehicula mattis
                nulla dignissim eu. Nam tristique, tellus ornare maximus ultrices, neque urna sagittis lacus, non pretium
                libero elit in ante. Sed pellentesque hendrerit lacus, sit amet vestibulum metus pharetra semper
              </h6>
            </div>
            <div>
              <h3>Lorem Ipsum</h3>
              <h6>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum mauris metus, vehicula mattis
                nulla dignissim eu. Nam tristique, tellus ornare maximus ultrices, neque urna sagittis lacus, non pretium
                libero elit in ante. Sed pellentesque hendrerit lacus, sit amet vestibulum metus pharetra semper
              </h6>
            </div>
          </div>
        </div>
      </div>
      <div id="indicators_sect" className="section-c">
        <div className="text-dark text-center p-3">
          <h1>PRIME INDICATORS</h1>
        </div>
      </div>
      <div className="section-d">
        <div className="container text-center p-5 mt-5">
          <h3 className="text-secondary">Don’t forget to let us know what suggestions you have for us.  This is now and always will be a work in progress.</h3>
          <h5 className="text-secondary">TogetherWeCan create a more sustainable world.</h5>
        </div>
        <div className="row text-secondary text-center">
          <div className="col-md-4">
            <i className="far fa-comments fa-3x" />
            <h3>Chat</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum hic molestias debitis! Iure illo fugiat, iusto dolorem soluta eum vero temporibus repellendus molestias placeat nemo, quasi nam, atque voluptatem animi?</p>
          </div>
          <div className="col-md-4">
            <i className="fab fa-connectdevelop fa-3x" />
            <h3>Network</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum hic molestias debitis! Iure illo fugiat, iusto dolorem soluta eum vero temporibus repellendus molestias placeat nemo, quasi nam, atque voluptatem animi?</p>
          </div>
          <div className="col-md-4">
            <i className="fas fa-project-diagram fa-3x" />
            <h3>Collaborate</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum hic molestias debitis! Iure illo fugiat, iusto dolorem soluta eum vero temporibus repellendus molestias placeat nemo, quasi nam, atque voluptatem animi?</p>
          </div>
        </div>
        <div className="row text-secondary text-center">
          <div className="col-md-4">
            <i className="fas fa-share-alt fa-3x" />
            <h3>Share</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum hic molestias debitis! Iure illo fugiat, iusto dolorem soluta eum vero temporibus repellendus molestias placeat nemo, quasi nam, atque voluptatem animi?</p>
          </div>
          <div className="col-md-4">
            <i className="fab fa-wpexplorer fa-3x" />
            <h3>Explore</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum hic molestias debitis! Iure illo fugiat, iusto dolorem soluta eum vero temporibus repellendus molestias placeat nemo, quasi nam, atque voluptatem animi?</p>
          </div>
          <div className="col-md-4">
            <i className="fas fa-chalkboard fa-3x" />
            <h3>Learn</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum hic molestias debitis! Iure illo fugiat, iusto dolorem soluta eum vero temporibus repellendus molestias placeat nemo, quasi nam, atque voluptatem animi?</p>
          </div>
        </div>
      </div>
      <footer className="d-flex justify-content-between text-white p-4">
        <div className="nav-left">
          <h4 className="m-2">TUC POC</h4>
        </div>
        <div className="nav-right">
          <i className="fab fa-facebook-square fa-2x m-2" />
          <i className="fab fa-twitter fa-2x m-2" />
          <i className="fab fa-instagram fa-2x m-2" />
        </div>
      </footer>
    </>
  );
};

const mapStateToProps = (state) => ({
  status: state.loggedIn.data,
});

const mapDispatchToProps = (dispatch) => ({
  isLoggedIn: () => dispatch(checkLoggedInStatus()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
