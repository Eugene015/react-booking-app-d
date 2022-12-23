import { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import {
  getIsLoggedIn,
  getUsersLoadingStatus,
  loadUsersList,
} from "../../store/users";
import { getRoomsLoadingStatus, loadRoomsList } from "../../store/rooms";
import {
  getReservationsLoadingStatus,
  loadReservationList,
} from "../../store/reservation";

const AppLoader = ({ children }) => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getIsLoggedIn());
  const usersStatusLoading = useSelector(getUsersLoadingStatus());

  const reservationLoadingStatus = useSelector(getReservationsLoadingStatus());
  const roomsLoadingStatus = useSelector(getRoomsLoadingStatus());

  useEffect(() => {
    dispatch(loadRoomsList());
    if (isLoggedIn) {
      dispatch(loadUsersList());
      dispatch(loadReservationList());
    }
  }, [isLoggedIn]);

  if (usersStatusLoading && roomsLoadingStatus && reservationLoadingStatus)
    return "loading";
  return children;
};

AppLoader.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
export default AppLoader;
