import React from "react";

function Footer() {
  return (
    <>
      <div className="flex gap-10 mb-1">
        <div className="gap-4">
          <h3>Jio Cinema</h3>
          <ul>
            <li>For You</li>
            <li>Sports</li>
            <li>Movies</li>
            <li>TV Shows</li>
          </ul>
        </div>

        <div>
          <h3>Support</h3>
          <ul>
            <li>Help Center</li>
            <li>Terms Of Use</li>
            <li>Privacy Policy</li>
            <li>Content Complaints</li>
          </ul>
        </div>
        <div>
          <a href=""></a>
          <a href=""></a>
          <a href=""></a>
          <a href=""></a>
        </div>
      </div>
      <div className="w-8 bg-white border border-white">
        Copyright © 2025 Star India Private Limited. All rights reserved.
        <img src="./Jio." alt="Hii" />
      </div>
    </>
  );
}

export default Footer;
