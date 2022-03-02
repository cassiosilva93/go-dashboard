import { useQuery } from "react-query";
import { DateHelper } from "../../utils/DataHelper"
import { api } from "../api";

type User = {
  id: string;
  name: string;
  email: string;
  created_at: string;
}

type ResponseUser = {
  total: number;
  users: User[]
}

export async function getUsers(): Promise<ResponseUser> {
  const { data } = await api.get('/users')
  const { total } = data
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

export function useUsers() {
  return useQuery('users', getUsers, {
    staleTime: 1000 * 5 // 5 seconds
  })
}