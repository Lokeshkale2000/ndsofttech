import React from "react";
import "./ProfileDetail.css";
import userData from "./userData";
import { FaEdit } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import Summary from "./Summary";

const ProfileDetail = () => {
  const { user } = userData;

  return (
    <div className="profile-detail-container">
      <div className="profile-main-container">
        <div className="profile-header">
          <img
            src={user.profilePicture}
            alt={`${user.name}'s profile`}
            className="profile-picture"
          />
          <div>
            <button className="profile-header-button"> Profile</button>
            <button className="profile-header-button"> Ativity</button>
          </div>
        </div>

        <div className="profile-container-text">
          <div className="profile-info">
            <h1 className="profile-name">{user.name}</h1>
            <h4 className="profile-role">{user.role}</h4>

            <div className="text-container-link">
              <p className="profile-membership">{user.membership}</p>
              <p style={{ marginLeft: "20px" }} className="profile-views">
                {" "}
                <FaClock style={{ marginLeft: "-10px", color: "#555" }} />
                {user.views}
              </p>
            </div>

            <div className="text-container-link" style={{ color: "#555" }}>
              {" "}
              <a
                href={`https://${user.socialLinks.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="linkedin-link"
                style={{ textDecoration: "none", color: "#555" }}
              >
                LinkedIn Profile
              </a>
              <p
                style={{ marginLeft: "20px", marginTop: "-5px" }}
                className="profile-location"
              >
                {" "}
                <FaMapMarkerAlt style={{ color: "#555" }} />
                {user.location}
              </p>
            </div>
          </div>
        </div>
        <div className="Edit-btn-container">
          <button className="Edit-btn">
            <span style={{ marginRight: "2px", marginTop: "10px" }}>
              {" "}
              <FaEdit />
            </span>
            Edit Profile
          </button>
        </div>
      </div>
      <div className="side-navbarmain-conatiner">
        <div className="side-navbar">
          <ul>
            <li>
              <a href="">Summary</a>
            </li>
            <li>
              <a href="">Answer</a>
            </li>
            <li>
              <a href="">Question</a>
            </li>
            <li>
              <a href="">Articles</a>
            </li>
            <li>
              <a href="">Badget</a>
            </li>
            <li>
              <a href="">Bookmaks</a>
            </li>
            <li>
              <a href="">Following</a>
            </li>
            <li>
              <a href="">Responses</a>
            </li>
          </ul>
        </div>
        <div>
          <Summary></Summary>
          
        </div>
      </div>
    </div>
  );
};

export default ProfileDetail;
