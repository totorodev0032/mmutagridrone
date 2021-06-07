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
const ProjectHero = () => {
  return (
    <>
      <ProjectWrapper>
        <ProjectContainer>
          <img src={Plant1} alt="plant1" />
          <img src={Plant1} alt="plant1" />
        </ProjectContainer>
        <p className="heading">Plant Species Identification Using Leaf Image</p>
        <ul>
          <li>
            Model is able to detect apple, blueberry, and tomato plants using
            leaf data successfully.
          </li>
          <li>
            Apple is detected as label 0, blueberry as 1, and tomato as 2.
          </li>
          <li>Accuracy of the model achieved is 99.00%</li>
        </ul>
        <p className="heading">Group Members</p>
        <GroupContainer>
          <ul>
            <li>Anupriya Nishad 2017041027</li>
            <li>Prajjwal Singh 2017041074)</li>
            <li>Pradeep Kumar Chaudhary 2017041071</li>
            <li>Mandvi 2017041064</li>
            <li> Sandeep Shah 2018021096 </li>
            <li>Mohit Pandey 2018021071 </li>
            <li>Ekansh Saxena 2019071028 </li>
            <li> Abhinandan Mishra 2019071002 </li>
            <li> Shantanu Tiwari 2019041115 </li>
            <li> Shubham K. Chaurasiya 2018041076 </li>
          </ul>
        </GroupContainer>
      </ProjectWrapper>
    </>
  );
};

export default ProjectHero;
