import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import timeline1 from './images/timeline1.PNG'
import timeline2 from './images/timeline2.jpeg'
import timeline3 from './images/timeline3.png'





class Timeline extends Component {

    state = {
        radio: 1,

    }

    textRadio = () => {

        if (this.state.radio == 1) {

            return (<p>
                After being frustrated with the what's on the market, we set out to create the perfect basic tee.
            </p>)
        }

        else if (this.state.radio == 2) {

            return (<p>
                After releasing the basic tee and seeing the amazing response, we decided to take our talents to a lot of the other essentials everyone needs. We created the perfect V-Necks, Long Sleeve tees, Hoodies, Track Pants, Underwear and Socks.
            </p>)
        }

        else if (this.state.radio == 3) {

            return (<p>
                After solidifying the base essentials, we started working towards developing items that offer the look of formal wear but the versatility and the comfort of an Essentials. The Essentials Cargo showcases our effort to push the boundaries and bridge the gap between comfort and formal wear.
            </p>)
        }


    }

    imgRadio = () => {

        if (this.state.radio == 1) {

            return (<img src={timeline1} className="timelineImg" />)
        }

        else if (this.state.radio == 2) {

            return (<img src={timeline2} className="timelineImg" />)
        }

        else if (this.state.radio == 3) {

            return (<img src={timeline3} className="timelineImg" />)
        }


    }




    radioActive = (number) => {
        if (number == 1) {

            this.setState({ radio: 1 })
        }

        else if (number == 2) {

            this.setState({ radio: 2 })
        }

        else if (number == 3) {

            this.setState({ radio: 3 })
        }
    }

    cssActive = () => {
        if (this.state.radio == 1) {
            return ('radioActive')
        }

        else if (this.state.radio == 2) {
            return ('radioActive')
        }

        else if (this.state.radio == 3) {
            return ('radioActive')
        }
    }



    render() {





        return (
            <div >




                <Container className="timeline">
                    <Row className="rowHeight" >
                        <Col sm={8} >


                            {this.imgRadio(this.state.radio)}


                        </Col>

                        <Col sm={4} >

                            {this.textRadio(this.state.radio)}

                        </Col>
                    </Row>


                    <Row >


                        <Col><div className={(this.state.radio == 1) ? (this.cssActive()) : 'radio1'} onClick={() => this.radioActive(1)}>2018</div></Col>
                        <Col><div className={(this.state.radio == 2) ? (this.cssActive()) : 'radio2'} onClick={() => this.radioActive(2)}>2019</div></Col>
                        <Col> <div className={(this.state.radio == 3) ? (this.cssActive()) : 'radio3'} onClick={() => this.radioActive(3)}>2020</div></Col>



                    </Row>
                </Container>







            </div>
        )
    }
}

export default Timeline

