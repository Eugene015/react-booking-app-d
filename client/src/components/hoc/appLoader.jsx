import { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import {
  getIsLoggedIn,
  getUsersLoadingStatus,
  loadUsersList,
} from "../../store/users";
import {
  getIsLoggedInForRooms,
  getRoomsLoadingStatus,
  loadRoomsList,
} from "../../store/rooms";

const AppLoader = ({ children }) => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getIsLoggedIn());
  const usersStatusLoading = useSelector(getUsersLoadingStatus());

  const isLoggedInForRooms = useSelector(getIsLoggedInForRooms());
  const roomsLoadingStatus = useSelector(getRoomsLoadingStatus());

  useEffect(() => {
    if (isLoggedIn && isLoggedInForRooms) {
      dispatch(loadUsersList());
      dispatch(loadRoomsList());
    }
  }, [isLoggedIn, isLoggedInForRooms]);

  if (usersStatusLoading && roomsLoadingStatus) return "loading";
  return children;
};

AppLoader.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
export default AppLoader;
