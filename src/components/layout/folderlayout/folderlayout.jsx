import React, { useEffect, useState } from 'react';
import apiRequest from '../../../constants/ApiCall';
import ApiClient from '../../../constants/ApiClient';
import Loader from '../../common/Loader/loader';
import './folderlayout.css';
import Folder from '../../common/folder/folder';
import { TbArrowBadgeRightFilled } from 'react-icons/tb';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import File from '../../common/file/file';
import useLocalStorage from '../../../hooks/useLocalStrorage';

const FolderLayout = () => {
    const [loading, setLoading] = useState(false);
    const [folderId, setFolderId] = useState(null);
    const [path, setPath] = useState([]);
    const [foldersData, setFoldersData] = useState([]);
    const [filesData, setFilesData] = useState([]);
    const [currentFolder, setCurrentFolder] = useState({});
    const [folderName, setFolderName] = useState("");
    const [deleteFolderId, setDeleteFolderId] = useState(null);
    const [deleteFileId, setDeleteFileId] = useState(null);
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    async function fetchAllFolders() {
        try {
            setLoading(true);
            const response = await apiRequest({
                url: `/api/v1/user/folder/folders?parentFolder=${null}`,
                method: 'GET',
                headers: ApiClient.getBasicHeaders(),
            });
            if (response.data.length) {
                const rootFolderName = response.data[0]?.path?.split('/')[0] || 'Root';
                setPath([{ name: rootFolderName, folderId: null }]);
                setCurrentFolder({ name: response.data[0]?.path?.split('/')[1], folderId: null });
            }
            else {
                setPath([{ name: 'Root', folderId: null }]);
                setCurrentFolder({ name: useLocalStorage().getItem('accountId'), folderId: null });
            }
            setFoldersData(response.data);
        } catch (error) {
            console.error('Fetch folders Error ::>>', error);
            ErrorPOPUP(error.message);
        } finally {
            setLoading(false);
        }
    }

    async function fetchfolder() {
        try {
            setLoading(true);
            const response = await apiRequest({
                url: `/api/v1/user/folder/getFolder`,
                method: 'POST',
                payload: { folderId },
                headers: ApiClient.getBasicHeaders(),
            });
            if (response.data) {
                setCurrentFolder({ name: response.data.name, path:response.data.path, folderId: response.data._id });
                const makePath = [];
                for (let p of path) {   
                    if (p.folderId === response.data._id) {
                        break;
                    } else makePath.push({ name: p.name, folderId: p.folderId });
                }
                makePath.push({ name: response.data.name, folderId: response.data._id });
                setPath(makePath);
            }
            setFoldersData(response.data.childFolder);
        } catch (error) {
            console.error('Fetch folder Error ::>>', error);
            ErrorPOPUP(error.message);
        } finally {
            setLoading(false);
        }
    }

    async function createFolder() {
        try {
            setLoading(true);
            const payload = { 
                name: folderName,
                path: folderId ? `${currentFolder.path}/${currentFolder.name}` : `/${currentFolder.name}`,
                parentFolder:folderId 
            };
            const response = await apiRequest({
                url: `/api/v1/user/folder/createFolder`,
                method: 'POST',
                payload: payload,
                headers: ApiClient.getBasicHeaders(),
            });
            if(response && response.message){
                toast.success(response.message, {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
            }
            setFolderName('');
            fetchFolderhelper();
        } catch (error) {
            console.error('Fetch folder Error ::>>', error);
            ErrorPOPUP(error.message);
        } finally {
            setLoading(false);
        }
    }
    
    async function deleteFile() {
        try {
            setLoading(true);
            const response = await apiRequest({
                url: `/api/v1/user/file/deleteFile`,
                method: 'DELETE',
                payload: {fileId:deleteFileId},
                headers: ApiClient.getBasicHeaders(),
            });
            if(response && response.message){
                toast.success(response.message, {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
            }
            setDeleteFileId(null);
            fetchFolderhelper();
        } catch (error) {
            console.error('Delete file Error ::>>', error);
            ErrorPOPUP(error.message);
        } finally {
            setLoading(false);
        }
    }

    async function fetchAllFiles() {
        try {
            setLoading(true);
            const response = await apiRequest({
                url: `/api/v1/user/file/getAllFile?folderId=${folderId}`,
                method: 'GET',
                headers: ApiClient.getBasicHeaders(),
            });
            setFilesData(response.data);
        } catch (error) {
            console.error('Fetch files Error ::>>', error);
            ErrorPOPUP(error.message);
        } finally {
            setLoading(false);
        }
    }
    async function deleteFolder() {
        try {
            setLoading(true);
            const response = await apiRequest({
                url: `/api/v1/user/folder/deleteFolder`,
                method: 'DELETE',
                payload: {folderId:deleteFolderId},
                headers: ApiClient.getBasicHeaders(),
            });
            if(response && response.message){
                toast.success(response.message, {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
            }
            setDeleteFolderId(null);
            fetchFolderhelper();
        } catch (error) {
            console.error('delete folder Error ::>>', error);
            ErrorPOPUP(error.message);
        } finally {
            setLoading(false);
        }
    }
    
    async function addFile() {
        try {
            if (!file) {
                toast.error("Please select a file to upload", {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
                return;
            }
            setLoading(true);
            const formData = new FormData();
            formData.append('bfile', file);
            const payload = { 
                folderId: folderId ? folderId : currentFolder.name,
                path: folderId ? `${currentFolder.path}/${currentFolder.name}` : `/${currentFolder.name}`,
            };    
            const response = await apiRequest({
                url: `/api/v1/user/file/addFile?path=${payload.path}&folderId=${payload.folderId}`,
                method: 'POST',
                payload: formData, 
                headers: ApiClient.getMultiPartHeaders(),
            });
    
            if (response && response.message) {
                toast.success(response.message, {
                    position: "top-right",
                    autoClose: 2000,
                });
            }
            fetchAllFiles(); 
            setFile(null); 
        } catch (error) {
            console.error('File Upload Error ::>>', error);
            ErrorPOPUP(error.message);
        } finally {
            setLoading(false); 
        }
    }
    
    const fetchFolderhelper=()=>{
        if (!folderId) {
            fetchAllFolders();
        } else {
            fetchfolder();
        }
        fetchAllFiles();
    }
    const ShowPOPUP = (message) => {
        if (message) {
            toast.success(message, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        } else {
            console.warn('No message provided to ShowPOPUP');
        }
    };
    
    const ErrorPOPUP = (message) => {
        if (message) {
            toast.error(message, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        } else {
            console.warn('No message provided to ErrorPOPUP');
        }
    };    
    useEffect(() => {
        fetchFolderhelper();
    }, [folderId]);

    if (loading) {
        return (
            <React.Fragment>
                <Loader />
            </React.Fragment>
        );
    }

    return (
        <React.Fragment>
            <div className="folderOuter">
                <div className="folderLine my-3">
                    {path.map((folder, index) => (
                        <span key={index} className="folderPathMain">
                            <span className="pathIcon">
                                <TbArrowBadgeRightFilled />
                            </span>
                            <span className="pathName" onClick={() => setFolderId(folder.folderId)}>
                                {folder.name}
                            </span>
                        </span>
                    ))}
                </div>
                <div className="createContainer">
                    <div className="createbuttons">
                        <button className="btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            Create Bucket
                        </button>
                        <button className="btn btn-outline-info" data-bs-toggle="modal" data-bs-target="#exampleModal1">
                            Upload
                        </button>
                    </div>
                </div>
                <div className="container">
                    <h4 className='text-success '>
                        <span className="pathIcon ">
                            <TbArrowBadgeRightFilled />
                        </span>
                        Folders
                    </h4>
                    <Folder 
                        folders={foldersData} 
                        changeFolder={setFolderId} 
                        changDeleteFolderId={setDeleteFolderId}
                        deleteFolder={deleteFolder}
                    />
                </div>
                <div className="container">
                <h4 className='text-success '>
                        <span className="pathIcon ">
                            <TbArrowBadgeRightFilled />
                        </span>
                        Files
                    </h4>
                    <File
                        files={filesData} 
                        changDeleteFileId={setDeleteFileId}
                        deleteFile={deleteFile}
                    />
                </div>
                {/* Create Folder Modal */}
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content modalForCreate">
                      <div className="modal-body mt-3">
                        <div className="inputBody">
                        <h5 className="" id="exampleModalLabel">Create New Folder</h5>
                        <input
                                type="text"
                                value={folderName}
                                onChange={(e) => setFolderName(e.target.value)}
                                placeholder="Folder Name"
                                className="form-control inputField"
                            />
                        </div>
                        <div className='folderBtns'>
                            <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" className="btn btn-outline-success" data-bs-dismiss="modal" onClick={()=>(createFolder())}>Create</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Upload Modal */}
                <div className="modal fade" id="exampleModal1" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content modalForCreate">
                      <div className="modal-body mt-3">
                        <div className="inputBody">
                        <h5 className="" id="exampleModalLabel">Upload File</h5>
                        <input
                                type="file"
                                name="bfile"
                                onChange={handleFileChange}
                                placeholder="Upload File"
                                className="form-control inputField"
                            />
                        </div>
                        <div className='folderBtns'>
                            <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" className="btn btn-outline-success"  data-bs-dismiss="modal" onClick={()=>(addFile())}>Upload</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            <ToastContainer />
        </React.Fragment>
    );
};

export default FolderLayout;
