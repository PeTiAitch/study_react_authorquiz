import React from 'react';
import TestExample from './examples';

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

const Turn = ({author = {}, books = []}) => {
    return (
        <div className="row turn" style={{ backgroundColor: "white" }}>
            <div className="col-4 offset-1">
                <img src={author.imageUrl} className="authorimage" alt="Author" />
            </div>
            <div className="col-6">
                {books.map((title) => <Book title={title} key={title} />)}
            </div>
        </div>
    );
}

const Book = ({title}) => (
    <div className="answer">
        <h4>{title}</h4>
    </div>
);

const Continue = () => (
    null
);

function AuthorQuiz({turnData}) {
    return (
        <div className="container-fluid">
            <TestExample />   
            <Hero />
            <Turn {...turnData} />
            <Continue />
            <Footer />       
        </div>
    );
}

export default AuthorQuiz;
