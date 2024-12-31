import './file.css';
import React, { useEffect, useState } from 'react';
import { BsEye } from 'react-icons/bs';
import { SlHandbag } from 'react-icons/sl';
import { FiHeart } from 'react-icons/fi';
import { AiTwotoneDelete } from 'react-icons/ai';
import config from '../../../config/config';

const File = ({ files, changeFileId,  changDeleteFileId, deleteFile }) => {
  const [image, setImage] = useState('');

  return (
    <React.Fragment>
      <div className="container">
        <div className="row fileRow">
          {files.map((file, index) => (
            <div key={file._id} className="file">
             <div className="cardFile">
              <div className='cardImage'>
                <img src={`${config.BASE_URL}${file.path}/${file.name}`} alt="" className='fileImageIcon'/>
              </div>
                <div className="overCardFile">
                    <div className="d-flex justify-content-center aligns-item-center gap-3">
                        <div className='overImageIcon' data-bs-toggle="modal" data-bs-target="#viewModal" onClick={() =>{ setImage(`${config.BASE_URL}${file.path}/${file.name}`);changDeleteFileId(file._id);}}>
                            <span>
                                <BsEye className='icon' />
                            </span>
                        </div>
                        <div className='overImageIcon' data-bs-toggle="modal" data-bs-target="#deleteModal" onClick={() => changDeleteFileId(file._id)}>
                            <span>
                            <AiTwotoneDelete className='icon'/>
                            </span>
                        </div>
                    </div>  
                </div>
             </div>
             <div className="fileTitle">
                 <span>{file.mimeType}</span>
             </div>
          </div>
          ))}
          </div>
          <div className="modal fade" id="viewModal" tabIndex="-1" aria-labelledby="viewModalLabel" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content modalForDelete">
                  <div className="modal-body mt-3">
                    <div className="inputBody">
                      <h5 className="" id="deleteModalLabel">View</h5>
                      <div className="viewImageFile">
                        <img src={image} alt="" className='fileImage'/>
                      </div>
                      <div className='folderBtns'>
                          <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">Close</button>
                          {/* <button type="button" className="btn btn-outline-danger" data-bs-toggle="modal" data-bs-target="#deleteModal">Delete</button> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
          <div className="modal fade" id="deleteModal" tabIndex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content modalForDelete">
                <div className="modal-body mt-3">
                  <div className="inputBody">
                    <h5 className="" id="deleteModalLabel">Are you sure you want to delete ?</h5>
                    <div className='folderBtns'>
                        <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">Cancel</button>
                        <button type="button" className="btn btn-outline-danger" data-bs-dismiss="modal" onClick={()=>(deleteFile())}>Delete</button>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default File;
