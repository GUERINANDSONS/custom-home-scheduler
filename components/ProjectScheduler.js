
'use client';
import { useState } from 'react';
import { format, addDays } from 'date-fns';

export default function ProjectScheduler() {
  const [tasks, setTasks] = useState([
    { id: 1, phase: 'Site Prep', duration: 2, startDate: new Date(), cost: 5000, assignedTo: 'Crew A', email: 'crewA@example.com', status: 'Not Sent' },
    { id: 2, phase: 'Foundation', duration: 3, startDate: null, cost: 8000, assignedTo: 'Concrete Co.', email: 'concrete@example.com', status: 'Not Sent' }
  ]);

  const recalculate = () => {
    const updated = [...tasks];
    for (let i = 0; i < updated.length; i++) {
      const prevEnd = i === 0 ? updated[i].startDate : updated[i - 1].endDate;
      updated[i].startDate = prevEnd;
      updated[i].endDate = addDays(prevEnd, updated[i].duration);
    }
    setTasks(updated);
  };

  return (
    <div>
      <h1>Project Schedule</h1>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {task.phase}: {task.startDate ? format(task.startDate, 'PPP') : 'TBD'} – {task.endDate ? format(task.endDate, 'PPP') : 'TBD'}
          </li>
        ))}
      </ul>
      <button onClick={recalculate}>Recalculate</button>
    </div>
  );
}
