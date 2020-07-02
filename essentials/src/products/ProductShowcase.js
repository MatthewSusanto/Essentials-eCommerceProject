import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './css/ProductShowcase.css'
import { withRouter } from 'react-router-dom'
import { Transition } from 'react-spring/renderprops'






class ProductShowcase extends Component {

    state = {
        onHover: false
    }


    handleImgClick = () => {
        let id = this.props.id
        let type = this.props.type
        this.props.history.push('/collections/' + type + '/' + id)
    }

    activeColor = (colour) => {
        if (this.state.activeColor === colour) {
            return (`colourBox colourBox${colour} activecolor`)
        } else if (colour === "white") { return "colourBox colourBoxwhite" }
        else if (colour === "black") { return "colourBox colourBoxblack" }
        else if (colour === "red") { return "colourBox colourBoxred" }
        else if (colour === "navy") { return "colourBox colourBoxnavy" }
        else if (colour === "olive") { return "colourBox colourBoxolive" }
        else if (colour === "tan") { return "colourBox colourBoxtan" }
        else if (colour === "grey") { return "colourBox colourBoxgrey" }
        else if (colour === "khaki") { return "colourBox colourBoxkhaki" }
    }


    colourList = () => {
        let list = this.props.colour
        let colourList = Object.keys(list)

        let colourListMap = colourList.map((e) =>
            <Col className="d-flex align-items-center justify-content-center" lg>
                <div className={this.activeColor(e)} >  </div>
            </Col>
        )

        return (
            <Row className="d-flex align-items-center justify-content-center">
                {colourListMap}
            </Row>
        )
    }




    //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------




    render() {

        return (





            <div >
                <Container className="show-case">
                    <Row >

                        <Col
                            onMouseEnter={() => this.setState({ onHover: true })}
                            onMouseLeave={() => this.setState({ onHover: false })}
                            className='columntest'
                            onClick={this.handleImgClick} >

                            {this.props.discount ? <div className="testy"> {this.props.discount}% Off  </div> : null}

                            <Transition
                                items={this.state.onHover}
                                from={{ opacity: 0 }}
                                enter={{ opacity: 1 }}
                                leave={{ opacity: 0 }}>
                                {toggle =>
                                    toggle
                                        ? props => <div style={props}><Container fluid className="testy1">{this.colourList()}</Container></div>
                                        : props => <div style={props}></div>
                                }

                            </Transition>

                            <a><img src={this.state.onHover ? this.props.secondaryImg : this.props.primaryImg} alt="images" className="tees" /></a>
                        </Col>

                    </Row>

                    <Row className="showcase-details">

                        <Col>
                            <p className="h3"> {this.props.name} </p>

                            <Transition
                                items={this.state.onHover}
                                from={{ opacity: 0 }}
                                enter={{ opacity: 1 }}
                                leave={{ opacity: 0 }}>
                                {toggle =>
                                    toggle
                                        ? props => <div style={props}><p className="h5 text-primary"> ${this.props.price} </p></div>
                                        : props => null
                                }

                            </Transition>
                        </Col>

                    </Row>
                </Container>
            </div>
        )
    }
}

export default withRouter(ProductShowcase)

