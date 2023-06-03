import styled from "styled-components";
import { MdSearch } from "react-icons/md";

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const Item = styled.li`
  width: 200px;
`;

export const Form = styled.form`
  position: absolute;
  top: 20px;
  right: 15px;
`;

export const Input = styled.input`
  position: relative;
  height: 25px;
  min-width: 250px;
  background-color: #353340;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  padding: 2px 31px 3px 10px;
  font-size: 14px;
  font-weight: 300;
  box-shadow: 0 0 0 2px #868ca005;

  &::placeholder {
    color: #808191;
  }
`;

export const Button = styled.button`
  position: absolute;
  right: 0;
  border: 0;
  background-color: transparent;
`;

export const Search = styled(MdSearch)`
  font-size: 21px;
  opacity: 0.6;
`;
