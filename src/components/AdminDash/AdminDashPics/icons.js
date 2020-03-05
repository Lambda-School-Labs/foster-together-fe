import React from "react";

export const People = props => (
  <svg
    width="60"
    height="60"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11 0.5C5.204 0.5 0.5 5.204 0.5 11C0.5 16.796 5.204 21.5 11 21.5C16.796 21.5 21.5 16.796 21.5 11C21.5 5.204 16.796 0.5 11 0.5ZM14.7905 7.157C15.914 7.157 16.817 8.06 16.817 9.1835C16.817 10.307 15.914 11.21 14.7905 11.21C13.667 11.21 12.764 10.307 12.764 9.1835C12.7535 8.06 13.667 7.157 14.7905 7.157ZM8.4905 5.498C9.8555 5.498 10.9685 6.611 10.9685 7.976C10.9685 9.341 9.8555 10.454 8.4905 10.454C7.1255 10.454 6.0125 9.341 6.0125 7.976C6.0125 6.6005 7.115 5.498 8.4905 5.498ZM8.4905 15.0845V19.022C5.9705 18.2345 3.9755 16.292 3.0935 13.814C4.196 12.638 6.947 12.0395 8.4905 12.0395C9.047 12.0395 9.7505 12.1235 10.4855 12.2705C8.7635 13.184 8.4905 14.3915 8.4905 15.0845ZM11 19.4C10.7165 19.4 10.4435 19.3895 10.1705 19.358V15.0845C10.1705 13.5935 13.2575 12.848 14.7905 12.848C15.914 12.848 17.8565 13.2575 18.8225 14.0555C17.594 17.174 14.5595 19.4 11 19.4Z"
      fill={props.color}
    />
  </svg>
);

export const Map = props => (
  <svg
    width="60"
    height="60"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21.9167 1.5L21.73 1.535L15.5 3.95L8.5 1.5L1.92 3.71667C1.675 3.79833 1.5 4.00833 1.5 4.27667V21.9167C1.5 22.2433 1.75667 22.5 2.08333 22.5L2.27 22.465L8.5 20.05L15.5 22.5L22.08 20.2833C22.325 20.2017 22.5 19.9917 22.5 19.7233V2.08333C22.5 1.75667 22.2433 1.5 21.9167 1.5ZM15.5 20.1667L8.5 17.705V3.83333L15.5 6.295V20.1667Z"
      fill={props.color}
    />
  </svg>
);

export const DashboardIcon = props => (
  <svg
    width="60"
    height="60"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="3" y="3" width="12" height="4.5" fill={props.color} />
    <rect x="9" y="9.75" width="12" height="4.5" fill={props.color} />
    <rect x="3" y="16.5" width="12" height="4.5" fill={props.color} />
    <rect x="16.5" y="3" width="4.5" height="4.5" fill={props.color} />
    <rect x="3" y="9.75" width="4.5" height="4.5" fill={props.color} />
    <rect x="16.5" y="16.5" width="4.5" height="4.5" fill={props.color} />
  </svg>
);

export const Circle = props => (
  <svg
    
    width="12"
    height="12"
    viewBox="0 0 10 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle center cx="5" cy="5" r="5" fill={props.color} />
  </svg>
);
