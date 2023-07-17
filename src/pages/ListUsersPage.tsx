import React, { useEffect, useState } from "react";
import Users from "../components/listUsers/Users";

interface IUser {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

interface ListUsersPageProps {}

const ListUsersPage: React.FC<ListUsersPageProps> = () => {
  const url: string = "http://reqres.in/api/users";
  const [users, setUsers] = useState<IUser[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (response.ok) {
          const data = await response.json();
          setUsers(data.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen">
      {users ? (
        <div className="container mx-auto bg-gray-500 md:w-auto">
          {users.map((user: IUser) => (
            <Users key={user.id} info={user} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-gray-800" />
          <p className="pt-4 font-thin text-xl">Data Loading</p>
        </div>
      )}
    </div>
  );
};

export default ListUsersPage;
