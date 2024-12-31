import React, { useEffect, useState } from 'react';
import BarGraph from '../../../common/chart/bargraph';
import './user.css';
import apiRequest from '../../../../constants/ApiCall';
import ApiClient from '../../../../constants/ApiClient';
import Loader from '../../../common/Loader/loader';
import PieChart from '../../../common/chart/piechart';
import DoughnutChart from '../../../common/chart/doughnut';

const User = () => {
  const [folderData, setFolderData] = useState([]);
  const [filesData, setFilesData] = useState([]);
  const [folderList, setFolderList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [folderId, setFolderId] = useState(null);


  async function fetchFolderStats() {
    try {
      setLoading(true);
      const response = await apiRequest({
        url: `/api/v1/user/folder/getFolderStats?folderId=${folderId}`,
        method: 'GET',
        headers: ApiClient.getBasicHeaders(),
      });
      setFolderData(response.data);
    } catch (error) {
      console.log("Fetch Folders Stats Error ::>>", error);
    } finally {
      setLoading(false);
    }
  }

  async function fetchFolderList() {
    try {
      setLoading(true);
      const response = await apiRequest({
        url: `/api/v1/user/folder/allFolderList`,
        method: 'GET',
        headers: ApiClient.getBasicHeaders(),
      });
      const list = response.data.filter((folder)=>folder.childFolder.length!==0);
      setFolderList(list);
    } catch (error) {
      console.log("Fetch Folders List Error ::>>", error);
    } finally {
      setLoading(false);
    }
  }
  async function fetchFileStats() {
    try {
      setLoading(true);
      const response = await apiRequest({
        url: `/api/v1/user/file/getFileTypeUsage`,
        method: 'GET',
        headers: ApiClient.getBasicHeaders(),
      });
      setFilesData(response.data);
    } catch (error) {
      console.log("Fetch file stats Error ::>>", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchFolderStats();
  }, [folderId]);

  useEffect(() => {
    fetchFolderList();
    fetchFileStats();
  }, []);

  const handleFolderChange = (e) => {
    setFolderId(e.target.value);
  };
  if(loading){
    return <Loader/>
  }
  else return (
    <React.Fragment>
      <h2 className='bg-success text-light px-5 py-2 rounded rounded-2'>Welcome to FileBucket!</h2>
      <div className='mt-2'>
        <div className="dropdown">
            <label htmlFor="folderSelect">Select a Folder:</label>
            <select
            id="folderSelect"
            onChange={handleFolderChange}
            value={folderId || ''}
            >
            <option value="null">Select Folder</option>
            {folderList.map((folder) => (
                <option key={folder._id} value={folder._id}>
                {folder.name}
                </option>
            ))}
            </select>
        </div>
        <div className='d-flex justify-content-center aligns-item-center flex-row w-100'>
            <div className='w-50'>
                {folderData && folderData.length > 0 && (
                    <div className="bargraph mt-3">
                    <h5 className='d-flex justify-content-center aligns-item-center'>Bucket Memory Usage</h5>
                    <BarGraph folderData={folderData} />
                    </div>
                )}
            </div>
            <div className='w-50'>
                {folderData && folderData.length > 0 && (
                    <div className="bargraph mt-3">
                    <h5 className='d-flex justify-content-center aligns-item-center'>Bucket Count Usage</h5>
                    <BarGraph folderData={folderData} typeFor={'Count'} />
                    </div>
                )}
            </div>
        </div>
      </div>
      <div className='d-flex justify-content-center aligns-item-center flex-row w-100 mt-5'>
            <div className='w-50'>
                <div className="pie-chart-container mt-3">
                    <h5 className='d-flex justify-content-center aligns-item-center'>File Type Memory Usage</h5>
                    <PieChart fileTypeData={filesData}/>
                </div>
            </div>
            <div className='w-50'>
                <div className="pie-chart-container mt-3">
                    <h5 className='d-flex justify-content-center aligns-item-center'>File Type Count</h5>
                    <DoughnutChart fileTypeData={filesData}/>
                </div>
            </div>
        </div>
    </React.Fragment>
  );
};

export default User;
