import React from 'react';
import styled from 'styled-components';
import Plant1 from '../../images/sensorpage.png';

const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  justify-content: center;
  align-items: center;

  .heading {
    font-size: 25px;
    font-weight: 600;
  }

  @media (max-width: 496px) {
    .heading {
      text-align: center;
      padding: 20px;
    }
  }
`;

const ProjectContainer = styled.div`
  display: flex;
  width: 60%;
  height: 70%;
  align-items: center;
  ${'' /* background-color: black; */}
  justify-content: space-around;
  margin-top: 10%;
  ${'' /* margin-bottom: 10%; */}

  img {
    width: 45%;
  }

  @media (max-width: 496px) {
    width: 80%;
    margin-top: 20%;
    img {
      width: 40%;
    }
  }
`;

const GroupContainer = styled.div`
  display: flex;
  width: 70%;
  flex-wrap: wrap;
  height: auto;
  flex-direction: row;
  margin-bottom: 10%;

  ul {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-between;

    li {
      width: 50%;
    }
  }

  @media (max-width: 496px) {
    width: 90%;
    ul {
      flex-direction: column;
      justify-content: center;
      width: 100%;
      align-items: center;

      li {
        width: 80%;
      }
    }
  }
`;
const Health = () => {
  return (
    <>
      <ProjectWrapper>
        <ProjectContainer>
          <img src={Plant1} alt="plant1" />
          <img src={Plant1} alt="plant1" />
        </ProjectContainer>
        <p className="heading">Health measurement in plant using IOT and ML</p>
        <ul>
          <li>Plant health measurement using leaf images.</li>
          <li>Outcome is showing healthiness of plant in percentage.</li>
          <li>
            The output is divided into 4 labels in increasing order of
            healthiness, i.e. 25% ,50%,75% and 100% respectively.
          </li>
        </ul>
        <p className="heading">Group Members</p>
        <GroupContainer>
          <ul>
            <li>Suraj 2017041107</li>
            <li>Shantanu Gupta 2017041091</li>
            <li>Shreyashi sonkar 2018042027</li>
            <li>Saurabh Gupta 2017041089</li>
            <li> Shailesh kumar prashad 2018031096 </li>
            <li>Vishal Jaiswal 201841070 </li>
            <li>Suryanshi Saxena 2018041043 </li>
            <li> Sakir Khan 2019071058 </li>
            <li>Shivangi Mall 2019071065 </li>
            <li>Tanmay Singh 2019041145 </li>
          </ul>
        </GroupContainer>
      </ProjectWrapper>
    </>
  );
};

export default Health;
