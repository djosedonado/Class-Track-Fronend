import { create } from "zustand";
import {
  SearchAllRoles,
  CreateRoleService,
} from "../../services/roles/role.service";
import { Role, CreateRole } from "../../interfaces/permissions/role";

interface RoleState {
  roles: Role[];
  getRoles: () => Promise<any>;
  createRole: (role: CreateRole) => Promise<any>;
}

const useRoleStore = create<RoleState>((set) => ({
  roles: [],
  getRoles: async () => {
    const response = await SearchAllRoles();
    set((state) => ({ roles: response.data }));
  },
  createRole: async (role: CreateRole) => {
    try {
      const newRole = await CreateRoleService(role);
      return newRole;
    } catch (error) {
      return error;
    }
  },
}));

export const useRoles = useRoleStore;
