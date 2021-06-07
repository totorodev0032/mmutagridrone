import React from 'react';
import styled from 'styled-components';
import HeroImage from '../../images/mmut.png';
import MinistryLogo from '../../images/ministrylogo.png';
import MadanLogo from '../../images/madan.png';

const HeroWrapper = styled.div`
  display: flex;
  background-image: url(${HeroImage});
  background-size: cover;
  background-position: center;
  height: 90vh;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .heading {
    font-size: 40px;
    font-weight: 800;
    color: white;
  }

  .title {
    font-size: 20px;
    background-color: white;
    color: black;
    font-weight: 500;
    padding: 10px;
  }

  @media (max-width: 496px) {
    height: auto;
    padding-top: 5%;
    padding-bottom: 5%;

    img {
      width: 90%;
    }

    .heading {
      text-align: center;
      font-size: 25px;
    }

    .title {
      font-size: 10px;
    }
  }
`;

const HeroSection = () => {
  return (
    <>
      <HeroWrapper>
        <img src={MinistryLogo} alt="logo" />
        <p className="heading">IN COLLABORATION WITH</p>
        <img src={MadanLogo} alt="logo madan" />
        <p className="title">
          IoT and Drone based Agriculture Monitoring System with Objective of
          Skill Development of Socially Deprived Community
        </p>
      </HeroWrapper>
    </>
  );
};

export default HeroSection;
