import React from 'react';
import './home.css';
import Header from '../../components/layout/header/header';
import bucket from '../../assets/images/bucket.jpg';
import Footer from '../../components/layout/footer/footer';
import { useNavigate } from 'react-router-dom';
import TokenClient from '../../constants/TokenClient';
const Home = () => {
  const navigate = useNavigate();
  const authToken = TokenClient.getUserToken();
  const handleNavigation = (path)=>{
    navigate(path);
    return; 
  }
  return (
    <React.Fragment>
      <Header />
      <div className="home-container">
        {/* Hero Section */}
        <section
          className="hero-section"
          style={{ backgroundImage: `url(${bucket})` }}
        >
          <div className="hero-content">
            <h1 className="hero-title">Welcome to FileBucket</h1>
            <p className="hero-subtitle">
              Store, organize, and access your files securely in one place.
            </p>
            <button className="hero-btn" onClick={()=>{authToken ? handleNavigation('/dashboard') : handleNavigation('/auth')}}>Get Started</button>
          </div>
        </section>

        {/* Features Section */}
        <section className="features-section">
          <h2>Why Choose FileBucket?</h2>
          <div className="features">
            <div className="feature-item">
              <i className="feature-icon fas fa-cloud-upload-alt"></i>
              <h3>Easy Uploads</h3>
              <p>Quickly upload files and organize them into custom buckets.</p>
            </div>
            <div className="feature-item">
              <i className="feature-icon fas fa-lock"></i>
              <h3>Secure Storage</h3>
              <p>Your files are protected with top-notch encryption and access controls.</p>
            </div>
            <div className="feature-item">
              <i className="feature-icon fas fa-share-alt"></i>
              <h3>Simple Sharing</h3>
              <p>Share files effortlessly with friends, family, or colleagues.</p>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="categories-section">
          <h2>Explore Categories</h2>
          <div className="categories">
            <div className="category-item">
              <h4>Documents</h4>
              <p>Store and manage your important files.</p>
            </div>
            <div className="category-item">
              <h4>Images</h4>
              <p>Organize and secure your photos.</p>
            </div>
            <div className="category-item">
              <h4>Videos</h4>
              <p>Keep your videos easily accessible.</p>
            </div>
            <div className="category-item">
              <h4>Others</h4>
              <p>Save files that don't fit into standard categories.</p>
            </div>
          </div>
          <button className="view-all-btn">View All Categories</button>
        </section>

        {/* Call to Action */}
        <section className="cta-section">
          <h2>Ready to Start?</h2>
          <p>Create your first bucket and start uploading files today!</p>
          <button className="cta-btn" onClick={()=>{authToken ? handleNavigation('/dashboard/folders') : handleNavigation('/auth')}}>Create Bucket</button>
        </section>
      </div>
      <Footer/>
    </React.Fragment>
  );
};

export default Home;
