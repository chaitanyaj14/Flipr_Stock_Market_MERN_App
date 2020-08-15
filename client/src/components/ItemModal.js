import React, { Component } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
import { connect } from 'react-redux';
import { addItem } from '../actions/itemActions';

class ItemModal extends Component {
    state = {
        modal: false,
        name: ''
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    };

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();

        const newItem = {
            name: this.state.name
        }

        this.props.addItem(newItem);

        this.toggle();
    };

    render() {
        return (
            <div>
                <Button color="dark"
                    style={{ marginBottom: '2rem' }}
                    onClick={this.toggle}>Add Stock</Button>

                <Modal isOpen={this.state.modal}
                    toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>
                        Add to stock list
                        <ModalBody>
                            <Form onSubmit={this.onSubmit}>
                                <FormGroup>
                                    <Label for="item">
                                        Stock
                                    <Input type="text"
                                            name="name"
                                            id="item"
                                            placeholder="Add stock list"
                                            onChange={this.onChange}>
                                        </Input>
                                    </Label>
                                    <Button color="dark"
                                        style={{ marginTop: '2rem' }}
                                        block>
                                        Add Stock
                                    </Button>
                                </FormGroup>
                            </Form>
                        </ModalBody>
                    </ModalHeader>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    item: state.item
});

export default connect(mapStateToProps, { addItem })(ItemModal);