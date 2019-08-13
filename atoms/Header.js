import React from 'react';
import Link from 'next/link';

const Header = () => (
  <div>
    <div className="header">
      <Link href="/">
        <a href="#default" className="logo">
          {"TODO'S"}
        </a>
      </Link>
      <div className="header-right">
        <Link href="/about">
          <a href="#about">About</a>
        </Link>
      </div>
    </div>

    <style jsx>
      {`
        .header {
          overflow: hidden;
          background-color: #f1f1f1;
          padding: 20px 10px;
        }

        .header a {
          float: left;
          color: black;
          text-align: center;
          padding: 12px;
          text-decoration: none;
          font-size: 18px;
          line-height: 25px;
          border-radius: 4px;
        }

        .header a.logo {
          font-size: 25px;
          font-weight: bold;
        }

        .header-right {
          float: right;
        }
      `}
    </style>
  </div>
);

export default Header;
