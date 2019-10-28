import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer>
      <p>© COPYRIGHT 2019 · Made with by jiangwenyang</p>
      <style jsx>{`
        footer {
          box-sizing: border-box;
          height: 50px;
          line-height: 50px;
          padding: 10px 0;
          background: #24292e;
          text-align: center;
          color: #666;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
