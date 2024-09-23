import {
  SaveGroupInterface,
  GroupsInterface,
} from "../../interfaces/groups/group.interface";
import { create } from "zustand";
import { SaveGroupService } from "../../services/groups/group.service";

interface GroupState {
  groups: GroupsInterface[];
  saveGroup: (group: SaveGroupInterface) => Promise<any>;
}

const useGroupStore = create<GroupState>(() => ({
  groups: [],
  saveGroup: async (group: SaveGroupInterface) => {
    try {
      const newGroup = await SaveGroupService(group);
      return newGroup;
    } catch (error) {
      return error;
    }
  },
}));

export const useRepositoryGroup = useGroupStore;
