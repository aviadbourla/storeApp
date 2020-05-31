import React from 'react';
import './home.css'
import { connect } from 'react-redux';
import * as actions from '../Redux/index';
import { useHistory } from "react-router-dom";

function Home(props) {

    let history = useHistory();

    return (
        <div className="flex-container">
            <div className="imageAndFreshStyle">
                <div className="butonAndh1">
                    <h1 className="freshStyleh1"> fresh style </h1>
                    <button button onClick={() => history.push("/products")} className="btn">shop now</button>
                </div>
            </div>

            <div className="flex-container-images">
                <div className="fourimageinarow">
                    <img alt="" src="https://content.asos-media.com/-/media/homepages/mw/2020/04-gbl/13/pgeimagedisplay4.jpg" />
                    <div className="pimage">
                        <p className="boldp"> smart tops</p>
                        <p>Dress from the waist up</p>
                    </div>
                </div>
                <div className="fourimageinarow">
                    <img alt="" src="https://content.asos-media.com/-/media/homepages/mw/2020/04-gbl/13/pgeimagedisplay3.jpg" />
                    <div className="pimage">
                        <p className="boldp"> smart tops</p>
                        <p>Dress from the waist up</p>
                    </div>
                </div>
                <div className="fourimageinarow">
                    <img alt="" src="https://content.asos-media.com/-/media/homepages/mw/2020/04-gbl/13/pgeimagedisplay2.jpg" />
                    <div className="pimage">
                        <p className="boldp"> smart tops</p>
                        <p>Dress from the waist up</p>
                    </div>
                </div>
                <div className="fourimageinarow">
                    <img alt="" src="https://content.asos-media.com/-/media/homepages/mw/2020/04-gbl/13/pgeimagedisplay1.jpg" />
                    <div className="pimage">
                        <p className="boldp"> smart tops</p>
                        <p>Dress from the waist up</p>
                    </div>
                </div>
            </div >

            <div className="flex-container-images">
                <div className="twoimageinarow">
                    <img alt="" src="https://content.asos-media.com/-/media/homepages/mw/2020/04-gbl/13/topman_gbl_moment_870x1110.jpg" />
                    <div className="pimage">
                        <p className="boldp"> Topman</p>
                        <p>Dress from the waist up</p>
                        <button onClick={() => history.push("/products")}>shop acivewear</button>
                    </div>
                </div>

                <div className="twoimageinarow">
                    <img alt="" src="https://content.asos-media.com/-/media/homepages/mw/2020/04-gbl/13/activewear_gbl_moment_870x1110.jpg" />
                    <div className="pimage">
                        <p className="boldp"> Activewear</p>
                        <p>at-home gyms</p>
                        <button onClick={() => history.push("/products")}>shop acivewear</button>
                    </div>
                </div>
            </div>

            <div>
                <div className="boldptwoimages">
                    <p> trending brtands </p>
                </div>
                <div className="trending-brands-container">
                    <img alt="" src="https://content.asos-media.com/-/media/homepages/unisex/brands/256x256/dr-martens-hp-logos-256x256.jpg" />
                    <img alt="" src="https://content.asos-media.com/-/media/homepages/unisex/brands/256x256/ellesse-hp-logos-256x256.jpg" />
                    <img alt="" src="https://content.asos-media.com/-/media/homepages/unisex/brands/256x256/carhartt-hp-logos-256x256.jpg" />
                    <img alt="" src="https://content.asos-media.com/-/media/homepages/unisex/brands/256x256/nike-hp-logos-256x256.jpg" />
                    <img alt="" src="https://content.asos-media.com/-/media/homepages/unisex/brands/256x256/north-face.png" />
                    <img alt="" src="https://content.asos-media.com/-/media/homepages/unisex/brands/256x256/tommy-hilfiger-hp-logos-256x256.jpg" />
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        islogIn: state.connected
    };
};

const mapDispatchToProps = dispatch => {
    return {
        login: () => dispatch(actions.login()),
        logout: () => dispatch(actions.logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
