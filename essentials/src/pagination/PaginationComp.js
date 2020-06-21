import React, { Component } from 'react'
import { Pagination } from 'react-bootstrap'






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
            <Pagination>{items}</Pagination>
        </div>


        )
    }
}

export default PaginationComp

