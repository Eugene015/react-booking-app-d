import React, { useContext, useEffect, useState } from "react";
import roomsService from "../services/rooms.service";

const RoomsContext = React.createContext();

export const useRooms = () => {
  return useContext(RoomsContext);
};

const RoomsProvider = ({ children }) => {
  const [rooms, setRooms] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    getRooms();
  }, []);
  useEffect(() => {
    if (error !== null) {
      setError(null);
    }
  }, [error]);

  async function getRooms() {
    try {
      const { content } = await roomsService.get();
      setRooms(content);
      setLoading(false);
    } catch (error) {
      errorCatcher(error);
    }
  }
  function errorCatcher(error) {
    const { message } = error.response.data;
    setError(message);
    setLoading(false);
  }

  return (
    <RoomsContext.Provider value={{ rooms }}>
      {!isLoading ? children : "Loading..."}
    </RoomsContext.Provider>
  );
};

export default RoomsProvider;
