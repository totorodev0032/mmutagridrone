import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ProjectWrapper = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  justify-content: center;
  align-items: center;
`;

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 60vh;

  @media (max-width: 496px) {
    height: auto;
  }
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
  justify-content: space-around;

  @media (max-width: 496px) {
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;

const ProjectBox = styled.div`
  display: flex;
  width: 340px;
  height: 300px;
  background-color: #f8f8f8;
  justify-content: center;
  align-items: center;

  @media (max-width: 496px) {
    margin-bottom: 15px;
  }
`;

const ProjectBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 90%;
  width: 80%;

  .heading {
    font-size: 20px;
    font-weight: 600;
  }

  .description {
    margin-top: 0;
  }

  .links {
    color: orange;
  }
`;

const ProjectList = () => {
  return (
    <>
      <ProjectWrapper>
        <ProjectContainer>
          <Header>Project List</Header>
          <ContentArea>
            <ProjectBox>
              <ProjectBoxContainer>
                <p className="heading">
                  Plant Species Identification Using Leaf Image
                </p>
                <p className="description">
                  Model is able to detect apple, blueberry, and tomato plants
                  using leaf data successfully.
                </p>
                <Link className="links" to="/plant-species-project">
                  <p>View More &rarr;</p>
                </Link>
              </ProjectBoxContainer>
            </ProjectBox>

            <ProjectBox>
              <ProjectBoxContainer>
                <p className="heading">
                  Weed identification using drone and AI technology
                </p>
                <p className="description">
                  Identification of unwanted crop or weed in the field through
                  drone and artificial intelligence technique.
                </p>
                <Link className="links" to="/weed-identification-project">
                  <p>View More &rarr;</p>
                </Link>{' '}
              </ProjectBoxContainer>
            </ProjectBox>

            <ProjectBox>
              <ProjectBoxContainer>
                <p className="heading">
                  Health measurement in plant using IOT and ML
                </p>
                <p className="description">
                  Plant health measurement using leaf images.
                </p>
                <Link className="links" to="#">
                  <p>View More &rarr;</p>
                </Link>{' '}
              </ProjectBoxContainer>
            </ProjectBox>
          </ContentArea>
        </ProjectContainer>
      </ProjectWrapper>
    </>
  );
};

export default ProjectList;
