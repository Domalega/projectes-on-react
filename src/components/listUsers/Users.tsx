import React from "react";

interface IUsers {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

interface UsersProps {
  info: IUsers;
}

const Users: React.FC<UsersProps> = ({ info }) => {
  return (
    <div className="flex items-center gap-4 p-4 rounded bg-gray-800 m-3 text-white">
      <img src={info.avatar} className="w-10 h-10 rounded-full" alt="avatar" />
      <div className="flex flex-col ">
        <p className="text-emerald-400 text-xl font-mono">
          {info.first_name} {info.last_name}
        </p>
        <p>{info.email}</p>
      </div>
      <div className="ml-auto">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="100"
          viewBox="0 0 100 100"
          className="w-10 h-10"
        >
          <rect x="48" y="0" width="4" height="100" fill="#FFF" />
          <rect x="0" y="48" width="100" height="4" fill="#FFF" />
        </svg>
      </div>
    </div>
  );
};

export default Users;
