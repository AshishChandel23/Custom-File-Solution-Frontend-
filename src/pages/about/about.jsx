import React from "react";
import "./about.css";
import Header from "../../components/layout/header/header";

const About = () => {
  return (
    <React.Fragment>
        <Header/>
      <div className="aboutCover">
        <div className="about-container">
          <div className="about-header">
            <h1>About Us</h1>
          </div>
          <div className="about-content">
            <p>
              Welcome to <strong>FileBucket</strong>, your trusted companion in
              organizing and managing your digital files effortlessly. Whether
              you are a professional managing important documents or an
              individual organizing personal files, FileBucket is here to
              streamline your digital life.
            </p>
            <p>
              At FileBucket, we understand the challenges of managing growing
              data. From critical work files to cherished memories, your data
              deserves a secure and organized home. Our platform is designed
              with one goal: making file management intuitive, secure, and
              accessible to everyone.
            </p>

            <h2>Our Mission</h2>
            <p>
              Our mission is to empower users with a seamless platform to store,
              manage, and share their files securely. We aim to revolutionize
              file management by combining cutting-edge technology with a
              user-friendly interface.
            </p>

            <h2>Why Choose FileBucket?</h2>
            <ul>
              <li>
                <strong>Secure Storage:</strong> Advanced encryption ensures
                your files are safe from unauthorized access.
              </li>
              <li>
                <strong>Organized Files:</strong> Effortless categorization and
                tagging help you find files when you need them.
              </li>
              <li>
                <strong>File Sharing:</strong> Collaborate seamlessly with your
                team or share important files with ease.
              </li>
              <li>
                <strong>Usage Insights:</strong> Visualize your storage usage
                with detailed graphs and insights.
              </li>
              <li>
                <strong>Anywhere Access:</strong> Access your files from any
                device at any time with our responsive platform.
              </li>
            </ul>

            <h2>Our Features</h2>
            <p>
              We offer a range of features designed to cater to your unique
              needs:
            </p>
            <ul>
              <li>
                <strong>Scalable Storage:</strong> From gigabytes to terabytes,
                our storage solutions grow with you.
              </li>
              <li>
                <strong>Folder Insights:</strong> Get detailed reports on memory
                usage for each folder and file type.
              </li>
              <li>
                <strong>Multi-Format Support:</strong> Upload and manage all
                file formats, including documents, images, videos, and more.
              </li>
              <li>
                <strong>Real-Time Sync:</strong> Automatic synchronization keeps
                your files updated across devices.
              </li>
            </ul>

            <h2>Our Commitment</h2>
            <p>
              At FileBucket, we are committed to delivering excellence. From
              ensuring maximum uptime to providing prompt customer support, your
              satisfaction is our priority. We constantly evolve our platform to
              meet the changing needs of our users.
            </p>

            <h2>Join Us</h2>
            <p>
              Become a part of the FileBucket community and experience the
              convenience of organized storage. Whether you’re a student, a
              business professional, or someone looking to declutter their
              digital space, FileBucket is designed with you in mind.
            </p>
            <p>
              Thank you for trusting us with your files. Together, let’s build a
              more organized digital world.
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default About;
