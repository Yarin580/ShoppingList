import React,{useState} from 'react'
import {Button} from 'reactstrap';
import {connect} from 'react-redux'
import {addItem} from '../redux/actions/creatorsActions'


function ShopForm(props) {

    const[itemName,setItemName] = useState('');

    function onChange(e) {
        setItemName(e.target.value);
    }

    function onSubmit(e) {
        e.preventDefault()

        const newItem ={
            name: itemName
        }
        props.addItem(newItem);
    }

    return (
        <div style={{textAlign: "center"}}>

            <h1>Shopping List</h1>

            <form onSubmit = {onSubmit} >
                <div>
                    <label>
                        write item name: <br/>
                        <input type="text" name="itemName" onChange = {onChange} value={itemName} />
                    </label>
                </div>
                <br />
                <Button outline color="success">Add Item</Button>
            </form>
            
        </div>
    )
}

const mapStateToProps = (state) => ({
    list: state.list
});



export default connect(
    mapStateToProps,
    {addItem}
    
    )(ShopForm);

