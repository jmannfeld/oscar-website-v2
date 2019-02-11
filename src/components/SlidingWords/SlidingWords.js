import React, { Component } from 'react'
import styled from 'styled-components';
import { CSSTransition, TransitionGroup, } from 'react-transition-group';

class SlidingWords extends Component {
  state = {
    wordsToSlide: ['PASSION', 'EXPRESSION', 'DRIVE', 'DETERMINATION'],
    slidenWords: []
  };

  slide() {
    if (this.state.wordsToSlide.length > 0) {
      this.setState({
        slidenWords: [...this.state.slidenWords, this.state.wordsToSlide.shift()]
      })
    } else {
      clearInterval(this.interval);
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => this.slide(), 1000);
  }

  render() {
    const { slidenWords } = this.state;
    return (
      <WordContainer>
        <TransitionGroup className="word-list">
          {slidenWords.map((word, index) => (
            <CSSTransition key={index} timeout={500} classNames="slide">
              <Word name={word}>{word}</Word>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </WordContainer>
    );
  }
}

export default SlidingWords;

const WordContainer = styled.div`
  position: absolute;
  top: 25%;
  z-index: 150;
  width: 100vw;
`;

const Word = styled.p`
  z-index: 650;
  width: fit-content;
  border: 3px solid #5330EB;
  padding: 5px 16px 5px 5px;
  margin: 40px auto;
  background: #131313;
  color: #191919;
  text-shadow: rgba(83, 48, 235, 0.9) 2px 2px;
  font-family: 'Raleway', sans-serif;
  font-style: italic;
  font-size: 5vmin;
  line-height: 1.5em;
  transition: transform 0.3s ease-out;
  &.slide-enter {
    transform: skew(-2deg) translateX(300%);
  }
  &.slide-enter-active {
    transform: skew(-2deg) translateX(0);
  }
`;
