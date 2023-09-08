import React, { useEffect, useState } from "react";
import UserContainer from "./UserContainer";
import { IUser } from "../../models/IUser";

interface ReduxContainerProps {
  users: IUser[] | undefined;
  loading: boolean;
  error: string | null | boolean;
  onLimitChange: (newLimit: number) => void;
  limit: number;
  type: string;
}

function ReduxContainer(props: ReduxContainerProps) {
  const { users, loading, error, onLimitChange, limit, type } = props;

  return (
    <div className="w-2/3">
      <div className="flex items-center justify-center mt-4">
        <button
          className=" bg-gray-200 border-gray-500 border-2 px-4 py-2 rounded-sm"
          onClick={() => onLimitChange(limit + 1)}
        >
          Add new data
        </button>
      </div>

      <div className=" rounded-lg shadow-lg p-4">
        <h1 className="text-xl font-bold text-center">
          Content contains by {type}
        </h1>
        {loading && <h1 className="text-4xl text-center">Loading data</h1>}
        {error && <h1 className="text-4xl text-center">Error on server</h1>}
        {
          <div className="grid grid-cols-2 gap-2 ">
            {users?.map((user) => (
              <UserContainer key={user.id} user={user} />
            ))}
          </div>
        }
      </div>
    </div>
  );
}

export default ReduxContainer;
