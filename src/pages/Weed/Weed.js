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
const Weed = () => {
  return (
    <>
      <ProjectWrapper>
        <ProjectContainer>
          <img src={Plant1} alt="plant1" />
          <img src={Plant1} alt="plant1" />
        </ProjectContainer>
        <p className="heading">
          Weed identification using drone and AI technology
        </p>
        <ul>
          <li>
            Identification of unwanted crop or weed in the field through drone
            and artificial intelligence technique.
          </li>
        </ul>
        <p className="heading">Group Members</p>
        <GroupContainer>
          <ul>
            <li>Tanushri Shrivastava 2018042030</li>
            <li>Shagufa Parveen 2018042026</li>
            <li>Shubham Kumar Mishra 2018042028</li>
            <li>Devendra Kumar 2018042010</li>
            <li> Ruchi Pandey 2019042012 </li>
            <li>Sharad Kumar 2019042024 </li>
            <li>Sristi Verma 2020032008 </li>
            <li> Niharika Bharti 2019031081 </li>
            <li> Prateek Singh 2018041010 </li>
            <li> Aryama jeet Singh 2019021045 </li>
          </ul>
        </GroupContainer>
      </ProjectWrapper>
    </>
  );
};

export default Weed;
