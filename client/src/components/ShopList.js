import React,{useEffect} from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import {getItems, deleteItem} from '../redux/actions/creatorsActions';
import {connect} from 'react-redux';


function ShopList (props) { 

    useEffect (() => {
        props.getItems();
    },[]);


    function onDeleteClick(id) {
        props.deleteItem(id);
    }

    const {items} = props.list;
    return(
        <Container>
            <ListGroup>
                {items.map(item => (
                    <ListGroupItem key={item._id}>
                        {item.name}
                   <Button color="danger" style={{float:"right"}} onClick={() => onDeleteClick(item._id)}>
                        x
                    </Button>
                    </ListGroupItem>
                ))}
               
            </ListGroup>
        </Container>

    )


}

const mapStateToProps = (state) =>({
    list: state.list
})

export default connect(
    mapStateToProps,
    {getItems, deleteItem}
    )(ShopList);






   /* useEffect (() => {
        props.getItems();
    },[]);

    function onDeleteClick(id) {
        deleteItem(id);
    }

    const {items} = props.list;
    return(
        <Container>
            <ListGroup>
                {items.map(item => (
                    <ListGroupItem key={item.id}>
                    <Button
                    className="remove-btn"
                    color="danger"
                    size="sm"
                    onClick={() => onDeleteClick(item.id)}
                    >
                    x
                    </Button>

                    {item.name}
                    
                    </ListGroupItem>
                ))}
               
            </ListGroup>
        </Container>

    )*/
    /*componentDidMount() {
        this.props.getItems();
    }

    onDeleteClick(id) {
        this.props.deleteItem(id);
    }

    render() {
        const {items} = this.props.list;
        return (
            <Container>
                <ListGroup className="shopping-list">
                    {items.map(item => (
                        <ListGroupItem key={item.id}>
                            <Button
                            className="remove-btn"
                            color="danger"
                            size="sm"
                            onClick={this.onDeleteClick.bind(this,item.id)}
                            >
                            x
                            </Button>

                            {item.name}

                        </ListGroupItem>
                    ))}
                </ListGroup>
            </Container>

    )*/