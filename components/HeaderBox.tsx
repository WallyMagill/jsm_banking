// React imports
import React from 'react';

interface HeaderBoxProps {
  type?: 'title' | 'greeting';
  title: string;
  subtext: string;
  user?: string;
}

/**
 * HeaderBox component displays a page header with title and subtitle
 * @param type - Header type ('title' or 'greeting')
 * @param title - Main title text
 * @param subtext - Subtitle/description text
 * @param user - User name for greeting type headers
 */
const HeaderBox = ({ 
  type = 'title', 
  title, 
  subtext, 
  user 
}: HeaderBoxProps) => {
  return (
    <div className="header-box">
      <h1 className="header-box-title">
        {title}
        {type === 'greeting' && (
          <span className="text-bankGradient">
            &nbsp;{user}
          </span>
        )}
      </h1>
      <p className="header-box-subtext">
        {subtext}
      </p>
    </div>
  );
};

export default HeaderBox;