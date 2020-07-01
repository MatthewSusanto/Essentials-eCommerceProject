import React, { Component } from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap'
import ProductShowcase from '../products/ProductShowcase'
import Pagination from '../pagination/PaginationComp'
import './css/help.css'





class CareInstructions extends Component {

    state = {

    }





    render() {


        return (
            <div className="help-div">



                <Container >
                    <Row>
                        <h5>Cleaning</h5>
                        <h5>When your clothes need a wash, don’t simply stick them in the washer as you might do usually; follow these guidelines. Use a gentle cleaning cycle, and opt for an eco-friendly detergent; not only is that better for the environment, it is more gentle for the bamboo fabric too and keeps everything as fresh and clean as possible. If you have any excessive stains, pre-soak the clothing in cold water before you put them in the washing machine( cold water only). Wash shirts separate from other clothes. As with usual washing routines, separate light and dark colors and wash them separately.</h5>
                    </Row>

                    <Row>
                        <h5>Do Not Bleach</h5>
                        <h5>As with all bamboo material  do not use bleach at any time. The chemicals involved with the bleach can damage the fibers and completely ruin your clothing. As an alternative, use baking soda to brighten. Keep your clothes away from chemical agents that will fade them too. Some examples are: chlorine bleach, hydrogen peroxide, some toothpastes and teeth whiteners.</h5>
                    </Row>

                    <Row>
                        <h5>Drying and Ironing</h5>
                        <h5>When the time comes to dry your bamboo clothing, the best option is a washing line if one is available (and the weather is fine!). If you decide to use a tumble dryer instead, ensure that the setting you use is mild and don’t do it for any longer than you need to or the fibrers could be damaged. When they are dry and ready to iron, head for the lowest heat setting to avoid any damage and use light steam.</h5>
                    </Row>

                    <Row>
                        <h5>Storage</h5>
                        <h5>When the time comes to store your clothing, store them as you would your other clothes. However, be aware that heat can damage bamboo fibers, so pay attention to any heat sources that could cause the fibers to be damaged. Such examples could be a wardrobe near a heat vent or radiator, or even near a water heater. If your wardrobe or drawers comes into contact with any regular heat, consider moving them to a cooler part of the room, or store your bamboo clothes elsewhere.</h5>
                    </Row>



                </Container>







            </div>
        )
    }
}

export default CareInstructions

