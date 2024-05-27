// StyledButton.js
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: blue;
  color: white;
  padding: 12px 24px; // More balanced padding
  font-size: 16px; // Larger font size for better readability
  font-weight: bold; // Bold font weight for emphasis
  border: none;
  border-radius: 8px; // Increased border radius for a more modern look
  cursor: pointer;
  transition: background-color 0.3s ease, box-shadow 0.3s ease, transform 0.2s ease; // Smooth transitions for visual effects
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2); // Subtle shadow for depth

  &:hover {
    background-color: darkblue;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3); // More pronounced shadow on hover
    transform: translateY(-2px); // Slight upward movement to give a lifting effect
  }

  &:active {
    background-color: navy; // Slightly darker color on click
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2); // Reset shadow to give a pressed effect
    transform: translateY(0); // Reset transform to simulate button being pressed down
  }

  &:focus {
    outline: none; // Remove default outline but ensure accessibility
    box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.4); // Adding a focus ring for accessibility
  }
`;

export default StyledButton;
