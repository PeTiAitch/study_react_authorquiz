import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import Stopwatch from './examples/StopwatchMVI';

import './bootstrap.min.css';
import './AuthorQuiz.css';

const Hero = () => (
    <header className="row">
        <div className="jumbotron col-10 offset-1">
            <h1>Author Quiz</h1>
            <p>Select the book written by the author shown.</p>
        </div>
    </header>
);

const Footer = () => (
    <footer id="footer" className="row">
        <div className="col-12">
            <p className="text-muted credit">
                All images are from <a href="http://commons.wikimedia.org/wiki/Main_Page">Wikemedia Commons</a> and are in the public domain
            </p>
        </div>
    </footer>
);

const Turn = ({ author, books, highlight, onAnswerSelected }) => {

    const highlightToBackgroundColor = (highlight) => {
        const mapping = {
            none: '',
            correct: 'green',
            wrong: 'red'
        }

        return mapping[highlight];
    }

    return (
        <div className="row turn" style={{ backgroundColor: highlightToBackgroundColor(highlight) }}>
            <div className="col-4 offset-1">
                <img src={author.imageUrl} className="authorimage" alt="Author" />
            </div>
            <div className="col-6">
                {books.map((title) => <Book title={title} key={title} onClick={onAnswerSelected} />)}
            </div>
        </div>
    );
}

Turn.propTypes = {
    author: PropTypes.shape({
        name: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
        imageSource: PropTypes.string.isRequired,
        books: PropTypes.arrayOf(PropTypes.string).isRequired
    }),
    books: PropTypes.arrayOf(PropTypes.string).isRequired,
    onAnswerSelected: PropTypes.func.isRequired,
    highlight: PropTypes.string.isRequired
};


const Book = ({ title = '', onClick = v => v }) => (
    <div className="answer" onClick={() => { onClick(title); }}>
        <h4>{title}</h4>
    </div>
);

const Continue = ({ show, onContinue }) => {
    return (
        <div className="row continue">
            { show
                ? <div className="col-11">
                    <button className="btn btn-primary btn-lg float-right" onClick={onContinue}>Continue</button>
                </div>
                : null}
        </div>
    );
}

function AuthorQuiz({ turnData, highlight, onAnswerSelected, onContinue }) {
    console.log(highlight)
    return (
        <div className="container-fluid">
            {/* <Stopwatch />    */}
            <Hero />
            <Turn {...turnData} highlight={highlight} onAnswerSelected={onAnswerSelected} />
            <Continue
                show={highlight === 'correct'}
                onContinue={onContinue}
            />
            <p><Link to="/add">Add an author</Link></p>
            <Footer />
        </div>
    );
}

const mapStateToProps = (state) => ({
    turnData: state.turnData,
    highlight: state.highlight
});

const mapDispatchToProps = dispatch => ({
    onAnswerSelected: answer => {
        dispatch({type: 'ANSWER_SELECTED', answer})
    },
    onContinue: () => {
        dispatch({ type: 'CONTINUE' });
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(AuthorQuiz);
