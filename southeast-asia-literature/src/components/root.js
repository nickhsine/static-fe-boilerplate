// import logo from '../../static/logo.png'
// import map from 'lodash.map'
import { colors } from '../constants/style-variables'
import Article from './article'
import AudioSection from '../components/audio'
import Interview from './interview'
import introData from '../data/intro'
import React from 'react'
import styled, { injectGlobal } from 'styled-components'
import Waypoint from 'react-waypoint'
import Header from './header'
import Banner from './banner'
import headerData from '../data/header'
import AuthorIntro from './author-intro'
import Credits from './credits'
import creditsData from '../data/credits'
import SideBar from './side-bar'
import anchors from '../data/anchors'

import thailandData from '../data/thailand'
import myanmarData from '../data/myanmar'
import malaysiaData from '../data/malaysia'
import vietnamData from '../data/vietnam'
import philippineData from '../data/philippine'
import Footer from '@twreporter/react-components/lib/footer'


// const _ = {
//   map,
// }

// eslint-disable-next-line no-unused-expressions
injectGlobal`
  html, body {
    margin: 0;
    padding: 0;
  }
  body {
    background-color: ${colors.background};
    font-family: "Noto Sans", "source-han-sans-traditional", sans-serif;
    color: ${colors.textBlack};
  }
  * {
    box-sizing: border-box;
  }
  button {
    outline: none;
    border: none;
    padding: 0;
  }
  a, a:link, a:visited {
    text-decoration: none;
  }
`

const ArticleContainer = styled.div`
  position: relative;
  margin: 0 auto;
`

export default class Root extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      playing: null,
      toShowSideBar: false,
    }
  }

  _setPlaying = (idToPlay, cb) => {
    if (this.state.id !== idToPlay) {
      this.setState({
        playing: idToPlay,
      }, cb)
    }
  }

  render() {
    return (
      <React.Fragment>
        <Banner />
        <Header {...headerData} />
        <Waypoint
          onEnter={() => this.setState({ toShowSideBar: true })}
          onLeave={() => this.setState({ toShowSideBar: false })}
          scrollableAncestor="window"
          topOffset="-100%"
          bottomOffset="100%"
        >
          <ArticleContainer>
            <SideBar
              anchors={anchors}
              show={this.state.toShowSideBar}
              setPlaying={this._setPlaying}
            >
              <Article content={introData} />
              <React.Fragment key="section-01">
                <AuthorIntro {...thailandData.author} />
                <AudioSection content={thailandData.audio} playing={this.state.playing} setPlaying={this._setPlaying} />
                <Interview content={thailandData.interview} />
              </React.Fragment>
              <React.Fragment key="section-02">
                <AuthorIntro {...myanmarData.author} />
                <AudioSection content={myanmarData.audio} playing={this.state.playing} setPlaying={this._setPlaying} />
                <Interview content={myanmarData.interview} />
              </React.Fragment>
              <React.Fragment key="section-03">
                <AuthorIntro {...vietnamData.author} />
                <AudioSection content={vietnamData.audio} playing={this.state.playing} setPlaying={this._setPlaying} />
                <Interview content={vietnamData.interview} />
              </React.Fragment>
              <React.Fragment key="section-04">
                <AuthorIntro {...malaysiaData.author} />
                <AudioSection content={malaysiaData.audio} playing={this.state.playing} setPlaying={this._setPlaying} />
                <Interview content={malaysiaData.interview} />
              </React.Fragment>
              <React.Fragment key="section-05">
                <AuthorIntro {...philippineData.author} />
                <AudioSection content={philippineData.audio} playing={this.state.playing} setPlaying={this._setPlaying} />
                <Interview content={philippineData.interview} />
              </React.Fragment>
            </SideBar>
            <Credits credits={creditsData} />
          </ArticleContainer>
        </Waypoint>
        <Footer />
      </React.Fragment>
    )
  }
}