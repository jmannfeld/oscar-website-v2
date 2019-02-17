import React, { Component } from 'react'
import styled from 'styled-components';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

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
    this.interval = setInterval(() => this.slide(), 750);
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
  top: 72px;
  width: 100vw;
  height: 100vh;
  .word-list {
    position: absolute;
    top: calc(50% - 34px);
    left: 50%;
    height: 360px;
    transform: translate(-50%, -50%);
    @media (max-width: 414px) {
      height: 286px;
    }
  }
`;

const Word = styled.p`
  width: fit-content;
  border: 3px solid #5330EB;
  padding: 2px 17px 5px 5px;
  margin: 20px auto;
  background: #131313;
  transform: skew(-6deg);
  color: #19191957;
  text-shadow: rgba(83, 48, 235, 0.9) 2px 2px;
  font-family: 'Raleway', sans-serif;
  font-style: italic;
  font-size: 2em;
  line-height: 1.4em;
  transition: transform 0.3s ease-out;
  @media (max-width: 414px) {
    font-size: 1.5em;
    border: 2px solid #5330EB;
    padding: 3px 15px 5px 5px;
    text-shadow: rgba(83, 48, 235, 0.9) 1px 1px;
  }
  &.slide-enter {
    transform: translateX(300%);
  }
  &.slide-enter-active {
    transform: translateX(0) skew(-6deg);
  }
`;
