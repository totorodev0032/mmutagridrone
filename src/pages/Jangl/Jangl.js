import React from 'react';
import styled from 'styled-components';
import SensorImage from '../../images/sensorpage.png';
import * as WiIcons from 'react-icons/wi';
import * as FaIcons from 'react-icons/fa';
import * as TiIcons from 'react-icons/ti';

const SensorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url(${SensorImage});
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .title {
    font-size: 30px;
    color: white;
    font-weight: 600;
  }
`;

const SensorBoxWrapper = styled.div`
  display: flex;
  width: 500px;
  height: 300px;
  background-color: rgba(0, 0, 0, 0.5);
  align-items: center;
  justify-content: space-around;
`;

const SensorContentBox = styled.div`
  display: flex;
  height: auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    color: white;
    margin-top: 2px;
  }
`;

const Jangl = () => {
  return (
    <>
      <SensorWrapper>
        <p className="title">Jangl Ram Lakhan Gorakhpur</p>
        <SensorBoxWrapper>
          <SensorContentBox>
            <WiIcons.WiHumidity style={{ color: 'white', fontSize: '40px' }} />
            <p>20 </p>
            <p>Humidity</p>
          </SensorContentBox>

          <SensorContentBox>
            <FaIcons.FaTemperatureHigh
              style={{ color: 'white', fontSize: '40px' }}
            />
            <p>20 </p>
            <p>Environment Temp</p>
          </SensorContentBox>

          <SensorContentBox>
            <TiIcons.TiWeatherWindyCloudy
              style={{ color: 'white', fontSize: '40px' }}
            />
            <p>20 </p>
            <p>Soil Temp</p>
          </SensorContentBox>
        </SensorBoxWrapper>
      </SensorWrapper>
    </>
  );
};

export default Jangl;
