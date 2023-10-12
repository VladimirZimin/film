import styled from "styled-components";
import bgFooter from "../../assets/img/footer-bg.jpg";

export const MainFooter = styled.footer`
  flex: 0 0 auto;
  margin-top: auto;
  padding-top: 160px;
  padding-bottom: 40px;
  color: #ffffff90;
  background-image: url(${bgFooter});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(4px);
`;
