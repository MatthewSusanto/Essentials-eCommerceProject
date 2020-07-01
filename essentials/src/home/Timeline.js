import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import timeline1 from './images/timeline1.PNG'
import timeline2 from './images/timeline2.PNG'
import timeline3 from './images/timeline3.PNG'
import { Spring, Transition } from 'react-spring/renderprops'
import { useSpring, animated } from 'react-spring'







class Timeline extends Component {

    state = {
        radio: 1,

    }

    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     // Typical usage (don't forget to compare props):
    //     if (this.state.radio !== prevState.radio) {
    //         this.render()
    //     }
    // }


    textRadio = () => {

        if (this.state.radio == 1) {

            return (<p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque, eaque? Culpa omnis voluptatum eligendi quas nisi mollitia corporis! Earum tenetur animi autem aspernatur aut sequi tempora nihil dolorem itaque molestiae?
            </p>)
        }

        else if (this.state.radio == 2) {

            return (<p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, necessitatibus explicabo tenetur fugiat animi rem.
            </p>)
        }

        else if (this.state.radio == 3) {

            return (<p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium dolorem quae quasi consequatur soluta cumque excepturi numquam vero quidem!
            </p>)
        }


    }

    imgRadio = () => {

        if (this.state.radio == 1) {

            return [<img src={timeline1} className='timelineImgAnimate' />,
            <img src={timeline2} className='timelineImgHidden' />,
            <img src={timeline3} className='timelineImgHidden' />]

        }

        else if (this.state.radio == 2) {

            return [<img src={timeline1} className='timelineImgHidden' />,
            <img src={timeline2} className='timelineImgAnimate' />,
            <img src={timeline3} className='timelineImgHidden' />]
        }

        else if (this.state.radio == 3) {

            return [<img src={timeline1} className='timelineImgHidden' />,
            <img src={timeline2} className='timelineImgHidden' />,
            <img src={timeline3} className='timelineImgAnimate' />]
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


            <Spring
                from={{ opacity: 0 }}
                to={{ opacity: 1 }}>
                {props => <div style={props}>
                    <hr />




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
                            <Col><div className={(this.state.radio == 2) ? (this.cssActive()) : 'radio1'} onClick={() => this.radioActive(2)}>2019</div></Col>
                            <Col> <div className={(this.state.radio == 3) ? (this.cssActive()) : 'radio1'} onClick={() => this.radioActive(3)}>2020</div></Col>



                        </Row>
                    </Container>







                </div>}
            </Spring>


        )
    }
}

export default Timeline

