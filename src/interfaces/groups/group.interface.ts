export interface GroupsInterface {
  id: number;
  name: string;
  gradeId: number;
}

export type SaveGroupInterface = Omit<GroupsInterface, "id">;
