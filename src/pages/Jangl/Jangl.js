import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SensorImage from '../../images/sensorpage.png';
import * as WiIcons from 'react-icons/wi';
import * as FaIcons from 'react-icons/fa';
import * as TiIcons from 'react-icons/ti';
import { GiChemicalDrop } from 'react-icons/gi'
import { FiDroplet } from 'react-icons/fi'
import firebase from '../../firebase'

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
    text-align:center;
  }
`;

const SensorBoxWrapper = styled.div`
  display: flex;
  flex-wrap:wrap;
  border-radius: 10px;
  padding:40px;
  background-color: rgba(0, 0, 0, 0.5);
  align-items: center;
  justify-content: space-around;
`;

const SensorContentBox = styled.div`
  display: flex;
  padding:10px;
  height: auto;
  flex-direction: column;
  justify-content:space-between;
  align-items: center;

  p {
    color: white;
    margin-top: 2px;
    text-align: center;
  }
`;

const Jangl = () => {

  const [data, setData] = useState({})

  useEffect(() => {
    let mounted = true
    if (mounted) {
      const dbRef = firebase.database().ref();
      dbRef.on('value', (snapshot) => {
        const data = snapshot.val();
        setData(data)
      });
    }

    return function cleanup() {
      mounted = false
    }
  }, [])


  return (
    <>
      <SensorWrapper>
        <p className="title">Jangl Ram Lakhan Gorakhpur</p>
        <SensorBoxWrapper>
          <SensorContentBox>
            <WiIcons.WiHumidity style={{ color: 'white', fontSize: '40px' }} />
            <p>{data.env_humi}</p>
            <p>Humidity</p>
          </SensorContentBox>

          <SensorContentBox>
            <FaIcons.FaTemperatureHigh
              style={{ color: 'white', fontSize: '40px' }}
            />
            <p>{data.env_temp}</p>
            <p>Environment Temp</p>
          </SensorContentBox>

          <SensorContentBox>
            <TiIcons.TiWeatherWindyCloudy
              style={{ color: 'white', fontSize: '40px' }}
            />
            <p>{data.soil_temp}</p>
            <p>Soil Temp</p>
          </SensorContentBox>

          <SensorContentBox>
            <GiChemicalDrop
              style={{ color: 'white', fontSize: '40px' }}
            />
            <p>{data.soil_ph}</p>
            <p>Soil pH</p>
          </SensorContentBox>

          <SensorContentBox>
            <FiDroplet
              style={{ color: 'white', fontSize: '40px' }}
            />
            <p>{data.soil_mois}</p>
            <p>Soil moisture</p>
          </SensorContentBox>
        </SensorBoxWrapper>
      </SensorWrapper>
    </>
  );
};

export default Jangl;
