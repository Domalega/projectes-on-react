import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { fetchUsers } from "../store/reducers/ActionCreator";
import { userAPI } from "../services/userService";
import ReduxContainer from "../components/ReduxComponents/ReduxContainer";

function ReduxPage() {
  const [limit, setLimit] = useState(0);
  const dispatch = useAppDispatch();

  //toolkit redux
  const {
    users: usersToolkit,
    loading: loadingToolkit,
    error: errorToolkit,
  } = useAppSelector((state) => state.userReducer);

  useEffect(() => {
    dispatch(fetchUsers(limit));
  }, [limit]);

  //RTK query
  const {
    data: usersRTKquery,
    isLoading: loadingRTKquery,
    isError: errorRTKquery,
  } = userAPI.useFetchAllUsersQuery(limit);

  const handleLimitChange = (newLimit: number) => {
    setLimit(newLimit);
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <ReduxContainer
        users={usersToolkit}
        loading={loadingToolkit}
        error={errorToolkit}
        onLimitChange={handleLimitChange}
        limit={limit}
        type="Redux Toolkit"
      />
      <ReduxContainer
        users={usersRTKquery}
        loading={loadingRTKquery}
        error={errorRTKquery}
        onLimitChange={handleLimitChange}
        limit={limit}
        type="RTK query"
      />
    </div>
  );
}

export default ReduxPage;
