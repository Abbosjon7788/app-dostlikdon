import React, {Component} from 'react';
import AdminLayout from "./AdminLayout";
import {Button, Modal, ModalBody, ModalFooter} from 'reactstrap';
import {connect} from "react-redux";
import {updateState} from "../redux/actions/adminNewsAction";

class AdminNews extends Component {
    render() {
        const changeModal = () => {
            this.props.updateState({modalOpen: !this.props.modalOpen})
        }
        return (
            <AdminLayout>
                <div className='admin-news'>
                    <div className="d-flex justify-content-between">
                        <div><h5>News</h5></div>
                        <div>
                            <Button type='button' color='success' onClick={changeModal}>Qo'shish</Button>
                        </div>
                    </div>
                    <Modal isOpen={this.props.modalOpen} toggle={changeModal}>
                        <ModalBody>

                        </ModalBody>
                        <ModalFooter>

                        </ModalFooter>
                    </Modal>
                </div>
            </AdminLayout>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        modalOpen: state.news.modalOpen
    }
}

export default connect(mapStateToProps, {updateState})(AdminNews);