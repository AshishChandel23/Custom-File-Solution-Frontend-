import './folder.css';
import React, { useEffect, useState } from 'react';
import { BsEye } from 'react-icons/bs';
import { SlHandbag } from 'react-icons/sl';
import { FiHeart } from 'react-icons/fi';
import { AiTwotoneDelete } from 'react-icons/ai';

const Folder = ({ folders, changeFolder, changDeleteFolderId, deleteFolder }) => {

  return (
    <React.Fragment>
      <div className="container">
        <div className="row folderRow">
          {folders.map((folder, index) => (
            <div key={folder._id} className="folder">
             <div className="cardFolder">
                <div className="overCardFolder">
                    <div className="d-flex justify-content-center aligns-item-center gap-3">
                        <div className='overImageIcon' onClick={() => changeFolder(folder._id)}>
                            <span>
                                <BsEye className='icon'/>
                            </span>
                        </div>
                        <div className='overImageIcon' data-bs-toggle="modal" data-bs-target="#exampleModal3" onClick={() => changDeleteFolderId(folder._id)}>
                            <span>
                            <AiTwotoneDelete className='icon'/>
                            </span>
                        </div>
                    </div>  
                </div>
             </div>
             <div className="folderTitle">
                 <span>{folder.name}</span>
             </div>
            </div>
          ))}
          </div>
          <div className="modal fade" id="exampleModal3" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content modalForDelete">
                <div className="modal-body mt-3">
                  <div className="inputBody">
                  <h5 className="" id="exampleModalLabel">Are you sure you want to delete ?</h5>
                  <div className='folderBtns'>
                      <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">Cancel</button>
                      <button type="button" className="btn btn-outline-danger" data-bs-dismiss="modal" onClick={()=>(deleteFolder())}>Delete</button>
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

export default Folder;
