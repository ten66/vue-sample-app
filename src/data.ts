export interface Section {
  id: number;
  title: string;
  taskList: Task[];
}

export interface Task {
  id: number;
  title: string;
  content: string;
}

