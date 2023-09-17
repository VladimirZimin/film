import { Item, StyledLink } from "components/Navigation/Navigation.styled";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getIsLoggedIn } from "redux/auth/authSlice";
import { useGetUserIdQuery } from "redux/auth/operations";
import { selectSessionId, selectUserId } from "redux/selectors";

const UserMenu = () => {
  const dispatch = useDispatch();
  const sessionID = useSelector(selectSessionId);
  const { refetch } = useGetUserIdQuery(sessionID);

  const user = useSelector(selectUserId);

  const handleDeleteUser = () => {
    dispatch(getIsLoggedIn());
  };

  useEffect(() => {
    refetch();
  }, [refetch]);

  return (
    <>
      <Item>
        <StyledLink to={`/user/${user.id}/favorites`}>Обране</StyledLink>
      </Item>
      <Item>
        <StyledLink to={`/user/${user.id}/watchlist`}>Переглянуто</StyledLink>
      </Item>
      <Item>
        <StyledLink
          onClick={handleDeleteUser}
          style={{ borderBottom: "none", color: "#ea5f5f" }}
        >
          Вийти
        </StyledLink>
      </Item>
    </>
  );
};

export default UserMenu;
