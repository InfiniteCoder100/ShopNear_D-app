import React, { Component } from 'react';
import {Container,Row, Col} from 'react-bootstrap';
import './Options.css'
import Item from '../Item/Item'
import teeshirtblack from '../../assets/teeshirt black.jpg'
import teeshirtwhite from '../../assets/teeshirt white.jpg'
import mug from '../../assets/mug near.jpg'

class Options extends Component {



    listItems=[
        {name:'Tee shirt black',price:30,description:'100 % coton ( 90 % coton, 10 % polyester)',picture:teeshirtblack},
        {name:'Tee shirt white',price:50,description:'100 % coton ( 90 % coton, 10 % polyester)',picture:teeshirtwhite},
        {name:'Mug ',price:80,description:'I Think this used to Belong to Icarus... oops..',picture:mug}
]



    render() {       
        return (
            <div className="optionContainer">
                <Container>
                <Row >
               
                    {this.listItems.map(x=>( 
                        <Col  key={x.name} > 
                        
                            <Item picture={x.picture} addItem={this.props.addItem} name={x.name} size={x.size} price={x.price} description={x.description} key={x.name}></Item></Col>
                            
                    ))}

                    </Row>
                </Container>
            </div>
        );
    }
}

export default Options;