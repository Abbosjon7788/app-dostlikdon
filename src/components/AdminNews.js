import React, {Component} from 'react';
import AdminLayout from "./AdminLayout";
import {Button, Modal, ModalBody, ModalFooter} from 'reactstrap';
import {connect} from "react-redux";
import {saveFile, updateState} from "../redux/actions/adminNewsAction";
import {AvForm, AvField} from 'availity-reactstrap-validation';
import {API_PATH} from "../tools/constants";

class AdminNews extends Component {
    render() {
        const changeModal = () => {
            this.props.updateState({modalOpen: !this.props.modalOpen})
        }

        const savePhoto = (e) => {
            console.log(e.target.files[0])
            this.props.saveFile(e.target.files[0]);
        }

        const saveNews = (event, values) => {
            this.props.addNews({...values, photoId: this.props.selectedImage});
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
                        <AvForm onValidSubmit={saveNews}>
                            <ModalBody>
                                <AvField
                                    name="titleUz"
                                    type="text"
                                    label="News title (uz)"
                                    required
                                />
                                <AvField
                                    name="titleRu"
                                    type="text"
                                    label="News title (ru)"
                                    required
                                />

                                <AvField
                                    name="titleEn"
                                    type="text"
                                    label="News title (en)"
                                    required
                                />


                                <AvField
                                    name="descriptionUz"
                                    type="textarea"
                                    label="Description (uz)"
                                    required
                                />

                                <AvField
                                    name="descriptionRu"
                                    type="textarea"
                                    label="Description (ru)"
                                    required
                                />

                                <AvField
                                    name="descriptionEn"
                                    type="textarea"
                                    label="Description (en)"
                                    required
                                />

                                <AvField type="select" name="menu" label="Menu">
                                    <option value="1">Bosh</option>
                                    <option value="2">Bosh</option>
                                </AvField>

                                <label htmlFor="file">Yangilik uchun rasm</label>
                                <input type="file" id="file" onChange={savePhoto} className="form-control"/>

                                {this.props.selectedImage.length > 0 ?
                                    <div className='position-relative'>
                                        <img src={API_PATH + "file/get/" + this.props.selectedImage} alt="" className="w-100 mt-3"/>

                                        <button type='button' className='close delete-image' onClick={() => this.props.updateState({selectedImage: ""})}>&times;</button>
                                    </div> : ""
                                }

                            </ModalBody>
                            <ModalFooter>
                                <button type='submit' className='btn btn-success'>Add</button>
                                <button type='button' className='btn btn-secondary' onClick={changeModal}>Cancel</button>
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
        modalOpen: state.news.modalOpen,
        selectedImage: state.news.selectedImage,

    }
}

export default connect(mapStateToProps, {updateState, saveFile})(AdminNews);