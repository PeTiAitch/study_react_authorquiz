// https://codepen.io/liammclennan/pen/pVjRRN?editors=0010
import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter,
    Route,
    Link
} from 'react-router-dom';

const characters = {
    "lady-glasses": "https://s.pluralsight.com/authorkit/img/People/Gray/Geek_Female_Circle_Gray.png",
    "tie-guy": "https://s.pluralsight.com/authorkit/img/People/Gray/Male_1_Circle_Gray.png"
};

function Character({ match }) {
    const imgUrl = characters[match.params.character].replace(/Gray/g, match.params.color);
    return <div><img width="75%" src={imgUrl} alt="Character" /></div>;
}

const Dashboard = () => (
    <div className="row">
        <div className="col-6">
            <Route path="/top/left/:character/:color" component={Character} />
        </div>
        <div className="col-6">
            <Route path="/top/right/:character/:color" component={Character} />
        </div>
        <div className="col-6">
            <Route path="/bottom/left/:character/:color" component={Character} />
        </div>
        <div className="col-6">
            <Route path="/bottom/right/:character/:color" component={Character} />
        </div>
    </div>
);;

export const renderExample = () => {
    ReactDOM.render(
        <BrowserRouter>
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <aside>
                            {Object.keys(characters).map((name) =>
                                ["/top/left/", "/top/right/", "/bottom/left/", "/bottom/right/"].map((corner) =>
                                    ["Gray", "Green", "Orange", "Purple"].map((color) =>
                                        <Link className="d-block" to={`${corner}${name}/${color}`}>{`${corner}${name}/${color}`}</Link>)))}
                        </aside>
                    </div>
                    <div className="col-8">
                        <main>
                            <Route path="/" component={Dashboard} />
                            <Route path="/top" render={() => <div>Something at the top</div>} />
                            <Route path="/bottom" render={() => <div>Something at the bottom</div>} />
                        </main>
                    </div>
                </div>
            </div>
        </BrowserRouter>,
        document.getElementById('root')
    );
};
