import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LocationWrapper = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  justify-content: center;
  align-items: center;
`;

const LocationContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 60vh;
`;

const Header = styled.div`
  display: flex;
  width: 100%;
  height: 10vh;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-weight: 600;
  margin-top: 20px;
`;

const ContentArea = styled.div`
  display: flex;
  width: 100%;
  height: 50vh;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;

  .links {
    color: black;
    text-decoration: none;
  }

  @media (max-width: 496px) {
    margin-top: 10px;
    margin-bottom: 10px;
    height: auto;
  }
`;

const LocationBoxWrapper = styled.div`
  display: flex;
  width: 300px;
  height: 50px;
  border: 2px solid #f8f8f8;
  justify-content: center;
  align-items: center;
  background-color: #f8f8f8;
  cursor: pointer;
  margin-left: 15px;

  @media (max-width: 496px) {
    margin-top: 20px;
  }
`;

const LocationSensorData = () => {
  return (
    <>
      <LocationWrapper>
        <LocationContainer>
          <Header>Location Sensor Data</Header>
          <ContentArea>
            <Link className="links" to="/jangl-ram-lakhan">
              <LocationBoxWrapper>
                <p>Jangl Ram Lakhan Gorakhpur</p>
              </LocationBoxWrapper>
            </Link>

            <Link to="/madan-mohan-malviya" className="links">
              <LocationBoxWrapper>
                <p>Madan Mohan Malviya</p>
              </LocationBoxWrapper>
            </Link>
          </ContentArea>
        </LocationContainer>
      </LocationWrapper>
    </>
  );
};

export default LocationSensorData;
