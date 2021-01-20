import React, {Component} from 'react';
import AdminLayout from "./AdminLayout";
import {Button, Modal, ModalBody, ModalFooter} from "reactstrap";
import {connect} from "react-redux";
import {updateState} from "../redux/actions/adminNewsAction";
import {AvForm, AvField} from 'availity-reactstrap-validation';
import {addMenu, getMenus} from "../redux/actions/adminMenuAction";

class AdminMenus extends Component {

    componentDidMount() {
        this.props.getMenus();
    }

    render() {
        const changeModal = () => {
            this.props.updateState({modalOpen: !this.props.modalOpen})
        }
        const generateUrl = (text) => text.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');

        const changeUrl = (e) => {
            this.props.updateState({generatedUrl: generateUrl(e.target.value)});
        }

        const saveMenu = (event, values) => {

            this.props.addMenu(values);
        }

        return (
            <AdminLayout>
                <div className='admin-news'>
                    <div className="d-flex justify-content-between">
                        <div><h5>Menus</h5></div>
                        <div>
                            <Button type='button' color='success' onClick={changeModal}>Qo'shish</Button>
                        </div>
                    </div>
                    <Modal isOpen={this.props.modalOpen} toggle={changeModal}>
                        <AvForm onValidSubmit={saveMenu}>
                            <ModalBody>
                                <AvField
                                    name="nameUz"
                                    type="text"
                                    onChange={changeUrl}
                                    label="Name (uz)"
                                    required
                                />
                                <AvField
                                    name="nameRu"
                                    type="text"
                                    label="Name (ru)"
                                    required
                                />
                                <AvField
                                    name="nameEn"
                                    type="text"
                                    label="Name (en)"
                                    required
                                />
                                <AvField
                                    name="submenu"
                                    value={this.props.isSubMenu}
                                    onChange={() => this.props.updateState({isSubMenu: !this.props.isSubMenu})}
                                    type="checkbox"
                                    label="This menu is submenu"
                                />

                                {this.props.isSubMenu ?
                                    <>
                                        <AvField name="parentId" type="select" label="Parent menu">
                                            <option value="1">Bosh sahifa</option>
                                            <option value="2">Struktura</option>
                                        </AvField>
                                        <AvField name="url" type="text" value={this.props.generatedUrl} label="Url"/>
                                    </>
                                    : ""
                                }


                            </ModalBody>
                            <ModalFooter>
                                <Button type="submit" color="success">Save</Button>
                                <Button type="button" onClick={changeModal}>Close</Button>
                            </ModalFooter>
                        </AvForm>
                    </Modal>
                </div>
            </AdminLayout>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        modalOpen: state.menu.modalOpen,
        isSubMenu: state.menu.isSubMenu,
        generatedUrl: state.menu.generatedUrl
    }
}
export default connect(mapStateToProps, {updateState, addMenu, getMenus})(AdminMenus);