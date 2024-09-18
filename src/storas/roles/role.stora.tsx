import { create } from "zustand";
import { SearchAllRoles } from "../../services/roles/role.service";
import { Role } from "../../interfaces/permissions/role";

interface RoleState {
  roles: Role[];
  getRoles: () => Promise<any>;
}

const useRoleStore = create<RoleState>((set) => ({
  roles: [],
  getRoles: async () => {
    const response = await SearchAllRoles();
    set((state) => ({ roles: response.data }));
  },
}));

export const useRoles = useRoleStore;
