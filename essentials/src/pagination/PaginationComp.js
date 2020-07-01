import React, { Component } from 'react'
import { Pagination, Container, Row, Col } from 'react-bootstrap'
import './css/PaginationComp.css'






class PaginationComp extends Component {

    state = {
        active: 1,




    }






    render() {

        const items = [];

        for (let number = 1; number <= 9; number++) {
            items.push(
                <Pagination.Item key={number} active={number === this.state.active}>
                    {number}
                </Pagination.Item>,
            );
        }






        return (<div>

            <Pagination size="lg">{items}</Pagination>


        </div>


        )
    }
}

export default PaginationComp

