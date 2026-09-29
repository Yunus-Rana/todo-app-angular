import { Component, signal } from '@angular/core';

export interface Task {
  id: number;
  title: string;
  dueTime: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  tasks = signal<Task[]>([
    { id: 1, title: 'Team Lunch (dummy task)', dueTime: '13:30', completed: false }
  ]);

  title = signal('');
  dueTime = signal('');

  addTask() {
    const titleVal = this.title().trim();
    if (!titleVal) return;

    this.tasks.update((items) => [
      ...items,
      {
        id: Date.now(),
        title: titleVal,
        dueTime: this.dueTime(),
        completed: false,
      },
    ]);

    this.title.set('');
    this.dueTime.set('');
  }

  deleteTask(id: number) {
    this.tasks.update((tasks) => tasks.filter((task) => task.id !== id));
  }

  // Toggles the completed state of the target task
  toggleTask(id: number) {
    this.tasks.update((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }
}