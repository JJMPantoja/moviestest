import { Box } from "@mui/material";
import React from "react";

export const Footer = () => {
  return (
    <>
      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <p>&copy; 2023 DEMO Streaming. All Rights Reserved.</p>
          </div>
          <div className="flex space-x-4">
            <a href="/" className="hover:text-gray-400">
              Home
            </a>
            <a href="/terms-and-conditions" className="hover:text-gray-400">
              Terms and Conditions
            </a>
            <a href="/privacy-policy" className="hover:text-gray-400">
              Privacy Policy
            </a>
            <a href="/collection-statement" className="hover:text-gray-400">
              Collection Statement
            </a>
            <a href="/help" className="hover:text-gray-400">
              Help
            </a>
            <a href="/manage-account" className="hover:text-gray-400">
              Manage Account
            </a>
          </div>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};
