/* eslint-disable @typescript-eslint/no-explicit-any */
import { queryOptions } from "@tanstack/react-query";

export default function fetchUsersOptions() {

  return queryOptions({
    queryKey: ['users'],
    queryFn: fetchUsers,
  })
}

/** 
 * This function is used to fetch users from the API.
  @returns {Promise<any[]>} - A promise that resolves to the response data in JSON format.
*/
