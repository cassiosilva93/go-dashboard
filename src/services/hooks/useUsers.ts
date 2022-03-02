import { useQuery } from "react-query";
import { DateHelper } from "../../utils/DataHelper"
import { api } from "../api";

type User = {
  id: string;
  name: string;
  email: string;
  created_at: string;
}

type UserResponse = {
  total: number;
  users: User[];
}

export async function getUsers(page: number): Promise<UserResponse> {
  const { data, headers } = await api.get('/users', {
    params: {
      page,
    }
  })
  
  const total = Number(headers['x-total-count'])

  const users = data.users.map(user => {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      created_at: DateHelper.formatPTBR(user.created_at),
    }
  })

  return {
    total,
    users
  }
}

export function useUsers(page: number) {
  return useQuery(['users', page], () => getUsers(page), {
    staleTime: 1000 * 60 * 10 // 10 minutes
  })
}
