import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ProductShowcase from '../products/ProductShowcase'
import Pagination from '../pagination/PaginationComp'
import { connect } from 'react-redux'





class Collections extends Component {

    state = {
        items: [],
        islLoaded: false,
        productType: null,
        searchInput: null
    }

    componentDidUpdate(prevProps, prevState) {

        if (this.props.theSearchInput !== prevProps.theSearchInput) {
            this.setState({
                searchInput: this.props.theSearchInput,

            })
        }

    }



    componentDidMount() {
        fetch('http://my-json-server.typicode.com/MatthewSusanto/dbJson8/collection')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    islLoaded: true,
                    items: json
                })
            })

        let productType = this.props.match.params.product_type;
        this.setState({
            productType: productType,
            searchInput: this.props.theSearchInput
        })
    }

    showItems = () => {

        const items = this.state.items
        let item = []
        let counter = item.length

        switch (this.state.productType) {
            case ("sale"):
                for (let i = 0; i < items.length; i++) {
                    if (items[i].discount !== 0) {
                        item.push(items[i])
                    }
                }

                return (
                    item.map(item => (
                        <Col key={item.id} lg={4} className="showcasePadding">
                            <ProductShowcase colour={item.colour} type={item.type} discount={item.discount} name={item.name} price={item.price} primaryImg={item.primary_img} secondaryImg={item.secondary_img} id={item.id} />
                        </Col>))
                )


            case ("bestsellers"):
                for (let i = 0; i < items.length; i++) {
                    item.push(items[i])
                }

                while (counter > 0) {

                    let index = Math.floor(Math.random() * counter);
                    counter--;
                    let temp = item[counter];
                    item[counter] = item[index];
                    item[index] = temp;
                }

                return (
                    item.slice(0, 5).map(item => (
                        <Col key={item.id} lg={4} className="showcasePadding">
                            <ProductShowcase colour={item.colour} type={item.type} discount={item.discount} name={item.name} price={item.price} primaryImg={item.primary_img} secondaryImg={item.secondary_img} id={item.id} />
                        </Col>))
                )

            case (null):
                return (
                    this.state.items.map(item => (
                        <Col key={item.id} lg={4} className="showcasePadding">
                            <ProductShowcase colour={item.colour} type={item.type} discount={item.discount} name={item.name} price={item.price} primaryImg={item.primary_img} secondaryImg={item.secondary_img} id={item.id} />
                        </Col>)))

            case ('search'):

                let searchInput = this.state.searchInput

                for (let i = 0; i < items.length; i++) {
                    if (items[i].id.includes(searchInput)) {
                        item.push(items[i])
                    }

                }

                return (
                    item.map(item => (
                        <Col key={item.id} lg={4} className="showcasePadding">
                            <ProductShowcase colour={item.colour} type={item.type} discount={item.discount} name={item.name} price={item.price} primaryImg={item.primary_img} secondaryImg={item.secondary_img} id={item.id} />
                        </Col>
                    )))

            default: for (let i = 0; i < items.length; i++) {
                if (items[i].type === this.state.productType) {
                    item.push(items[i])
                }


            }

                return (
                    item.map(item => (
                        <Col key={item.id} lg={4} className="showcasePadding">
                            <ProductShowcase colour={item.colour} type={item.type} discount={item.discount} name={item.name} price={item.price} primaryImg={item.primary_img} secondaryImg={item.secondary_img} id={item.id} />
                        </Col>
                    )))
        }

        // if (this.state.productType == "sale") {
        //     for (let i = 0; i < items.length; i++) {
        //         if (items[i].discount !== 0) {
        //             item.push(items[i])
        //         }
        //     }

        //     return (
        //         item.map(item => (
        //             <Col key={item.id} lg={4} className="showcasePadding">
        //                 <ProductShowcase colour={item.colour} type={item.type} discount={item.discount} name={item.name} price={item.price} primaryImg={item.primary_img} secondaryImg={item.secondary_img} id={item.id} />
        //             </Col>))
        //     )

        // }
        // else if (this.state.productType == "bestsellers") {

        //     for (let i = 0; i < items.length; i++) {
        //         item.push(items[i])
        //     }

        //     while (counter > 0) {

        //         let index = Math.floor(Math.random() * counter);
        //         counter--;
        //         let temp = item[counter];
        //         item[counter] = item[index];
        //         item[index] = temp;
        //     }

        //     return (
        //         item.slice(0, 5).map(item => (
        //             <Col key={item.id} lg={4} className="showcasePadding">
        //                 <ProductShowcase colour={item.colour} type={item.type} discount={item.discount} name={item.name} price={item.price} primaryImg={item.primary_img} secondaryImg={item.secondary_img} id={item.id} />
        //             </Col>))
        //     )
        // }

        // else if (this.state.productType == null) {
        //     return (
        //         this.state.items.map(item => (
        //             <Col key={item.id} lg={4} className="showcasePadding">
        //                 <ProductShowcase colour={item.colour} type={item.type} discount={item.discount} name={item.name} price={item.price} primaryImg={item.primary_img} secondaryImg={item.secondary_img} id={item.id} />
        //             </Col>)))
        // }


        // else if ((this.state.productType == 'search') && (this.state.searchInput !== null)) {

        //     let searchInput = this.state.searchInput


        //     for (let i = 0; i < items.length; i++) {
        //         if (items[i].id.includes(searchInput)) {
        //             item.push(items[i])
        //         }

        //     }

        //     return (
        //         item.map(item => (
        //             <Col key={item.id} lg={4} className="showcasePadding">
        //                 <ProductShowcase colour={item.colour} type={item.type} discount={item.discount} name={item.name} price={item.price} primaryImg={item.primary_img} secondaryImg={item.secondary_img} id={item.id} />
        //             </Col>
        //         )))
        // }

        // else {

        //     for (let i = 0; i < items.length; i++) {
        //         if (items[i].type == this.state.productType) {
        //             item.push(items[i])
        //         }


        //     }

        //     return (
        //         item.map(item => (
        //             <Col key={item.id} lg={4} className="showcasePadding">
        //                 <ProductShowcase colour={item.colour} type={item.type} discount={item.discount} name={item.name} price={item.price} primaryImg={item.primary_img} secondaryImg={item.secondary_img} id={item.id} />
        //             </Col>
        //         )))
        // }

    }


    //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


    render() {

        if (this.state.islLoaded === false) {
            return <div> </div>
        }

        else {

            return (
                <div >

                    <Container fluid className="product-home-row mt-5" >

                        <Row>
                            <Col lg={12}>
                                <h2 className="display-3 h1">{(this.state.productType !== (null || "search")) ? (this.state.productType.toUpperCase()) : 'COLLECTIONS'}</h2>
                            </Col>
                        </Row>

                        <Row >
                            {this.showItems()}
                        </Row>

                        <Container>
                            <Row >

                                <Col className="d-flex justify-content-center">
                                    <Pagination />
                                </Col>

                            </Row>
                        </Container>

                    </Container>

                </div>
            )
        }
    }
}

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



const mapStateToProps = (state) => {
    return {
        theSearchInput: state.cart.search
    }
}

export default connect(mapStateToProps)(Collections)

