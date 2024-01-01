import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import * as Realm from "realm-web";
import {
  SearchIcon,
} from "@heroicons/react/outline";

const Search = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [autoComplete, setAutoComplete] = useState([]);

  useEffect(() => {
    const fetchAutoComplete = async () => {
      if (searchTerm.length) {
        // add your Realm App Id to the .env.local file
        const REALM_APP_ID = process.env.NEXT_PUBLIC_REALM_APP_ID;
        const app = new Realm.App({ id: REALM_APP_ID });
        const credentials = Realm.Credentials.anonymous();
        try {
          const user = await app.logIn(credentials);
          const searchAutoComplete = await user.functions.searchAutoComplete(
            searchTerm
          );
          setAutoComplete(searchAutoComplete); // No need for the extra arrow function
        } catch (error) {
          console.error(error);
        }
      } else {
        setAutoComplete([]);
      }
    };
  
    fetchAutoComplete();
  }, [searchTerm]);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    setSearchTerm("");
    router.push({
      pathname: `/search/${searchTerm}`,
    });
  };
  
  const handleSelect = (id) => {
    setSearchTerm("");
    router.push({
      pathname: `/products/${id}`,
    });
  };
  
  return (
    <>
    <div className="relative mt-6 max-w-lg mx-auto" style={{marginTop : '11%'}}>
      <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
        <SearchIcon className="h-5 w-5" />
      </span>
      <form onSubmit={handleSubmit}>
        <input
          className="w-full border rounded-md pl-10 pr-4 py-2 focus:border-green-500 focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Search"
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
        />
      </form>
      {autoComplete.length > 0 && (
        <ul className="absolute inset-x-0 top-full bg-green-200 border border-green-500 rounded-md z-20">
          {autoComplete.map((item) => {
            return (
              <li
                key={item._id}
                className="px-4 py-2 hover:bg-green-300 cursor-pointer"
                onClick={() => handleSelect(item._id)}
              >
                {item.name}
              </li>
            );
          })}
        </ul>
      )}
    </div>
 
    </>
  );
};

export default Search;
