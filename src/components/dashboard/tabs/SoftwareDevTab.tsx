import React, { useState } from 'react';
import { useApp } from '../../../context/AppContext.tsx';
import { SoftwareTask, TaskStatus, TaskPriority } from '../../../types/index.ts';
import {
  Code2,
  GitBranch,
  GitPullRequest,
  Plus,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Clock,
  Terminal,
  Layers,
  X
} from 'lucide-react';

export const SoftwareDevTab: React.FC = () => {
  const { tasks, moveTask, addTask } = useApp();
  const [modalOpen, setModalOpen] = useState(false);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskCategory, setNewTaskCategory] = useState<SoftwareTask['category']>('Frontend');
  const [newTaskPriority, setNewTaskPriority] = useState<TaskPriority>('medium');
  const [newTaskHours, setNewTaskHours] = useState(8);

  const columns: { status: TaskStatus; label: string; color: string }[] = [
    { status: 'backlog', label: 'Sprint Backlog', color: 'border-neutral-300 dark:border-neutral-700' },
    { status: 'in_progress', label: 'In Development', color: 'border-amber-400 dark:border-amber-600' },
    { status: 'in_review', label: 'Code Review & QA', color: 'border-indigo-400 dark:border-indigo-600' },
    { status: 'deployed', label: 'Production Deployed', color: 'border-emerald-400 dark:border-emerald-600' }
  ];

  const handleCreateTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTaskTitle.trim()) return;
    addTask({
      title: newTaskTitle.trim(),
      category: newTaskCategory,
      priority: newTaskPriority,
      status: 'in_progress',
      assignee: {
        name: 'Dedicated Coder (RLV)',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80'
      },
      estimateHours: newTaskHours,
      commitHash: `git:${Math.random().toString(16).substring(2, 9)}`
    });
    setNewTaskTitle('');
    setModalOpen(false);
  };

  const nextStatusMap: Record<TaskStatus, TaskStatus | null> = {
    backlog: 'in_progress',
    in_progress: 'in_review',
    in_review: 'deployed',
    deployed: null
  };

  const prevStatusMap: Record<TaskStatus, TaskStatus | null> = {
    backlog: null,
    in_progress: 'backlog',
    in_review: 'in_progress',
    deployed: 'in_review'
  };

  return (
    <div className="space-y-6">
      {/* Header with quick sprint stats and Add Task action */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-neutral-200 dark:border-neutral-800">
        <div>
          <h2 className="text-xl font-bold text-neutral-900 dark:text-white flex items-center gap-2">
            <Code2 className="w-5 h-5 text-indigo-500" />
            <span>Software Development & Dedicated Coders</span>
          </h2>
          <p className="text-xs text-neutral-500 mt-0.5">
            Sprint 42 &middot; Distributed CI/CD Pipeline &middot; 4 Dedicated Senior Engineers Assigned
          </p>
        </div>

        <button
          onClick={() => setModalOpen(true)}
          className="px-3.5 py-2 text-xs font-semibold rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white flex items-center gap-1.5 transition-colors self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" />
          <span>New Engineering Task</span>
        </button>
      </div>

      {/* Sprints KPI row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="p-3.5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
          <div className="text-[11px] text-neutral-500">Sprint Health</div>
          <div className="text-xl font-bold font-mono text-emerald-600 dark:text-emerald-400 mt-1">98.4%</div>
          <div className="text-[10px] text-neutral-400 mt-0.5">Zero blocking regressions</div>
        </div>
        <div className="p-3.5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
          <div className="text-[11px] text-neutral-500">Live Pull Requests</div>
          <div className="text-xl font-bold font-mono text-neutral-900 dark:text-white mt-1">5 Open</div>
          <div className="text-[10px] text-neutral-400 mt-0.5">Automated test suites passed</div>
        </div>
        <div className="p-3.5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
          <div className="text-[11px] text-neutral-500">Average Review Cycle</div>
          <div className="text-xl font-bold font-mono text-neutral-900 dark:text-white mt-1">2.4 hrs</div>
          <div className="text-[10px] text-neutral-400 mt-0.5">Lead Architect signed off</div>
        </div>
        <div className="p-3.5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
          <div className="text-[11px] text-neutral-500">Production Deployments</div>
          <div className="text-xl font-bold font-mono text-indigo-600 dark:text-indigo-400 mt-1">14 Today</div>
          <div className="text-[10px] text-neutral-400 mt-0.5">Zero-downtime blue/green</div>
        </div>
      </div>

      {/* Interactive Kanban Board */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {columns.map((col) => {
          const colTasks = tasks.filter((t) => t.status === col.status);
          return (
            <div
              key={col.status}
              className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/70 dark:bg-neutral-900/40 p-3.5 flex flex-col"
            >
              <div className="flex items-center justify-between pb-2 mb-3 border-b border-neutral-200 dark:border-neutral-800 text-xs">
                <span className="font-bold text-neutral-900 dark:text-white">{col.label}</span>
                <span className="px-2 py-0.5 rounded-full bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 font-mono text-[10px]">
                  {colTasks.length}
                </span>
              </div>

              <div className="space-y-3 flex-1 min-h-[220px]">
                {colTasks.length === 0 ? (
                  <div className="h-full flex items-center justify-center text-xs text-neutral-400 italic">
                    No tickets in this lane
                  </div>
                ) : (
                  colTasks.map((task) => (
                    <div
                      key={task.id}
                      className="p-3 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-xs hover:border-neutral-300 dark:hover:border-neutral-700 transition-all text-xs"
                    >
                      <div className="flex items-center justify-between text-[11px] text-neutral-500 mb-1">
                        <span className="font-mono">{task.id}</span>
                        <span className="font-mono">{task.estimateHours}h</span>
                      </div>
                      <div className="font-semibold text-neutral-900 dark:text-white mb-2 leading-snug">
                        {task.title}
                      </div>

                      <div className="flex items-center justify-between text-[11px] text-neutral-500 pt-2 border-t border-neutral-100 dark:border-neutral-800/80">
                        <span>{task.category}</span>
                        {task.commitHash && (
                          <span className="font-mono text-indigo-500">{task.commitHash}</span>
                        )}
                      </div>

                      {/* Lane shift controls */}
                      <div className="mt-3 pt-2 border-t border-neutral-100 dark:border-neutral-800/80 flex items-center justify-between">
                        {prevStatusMap[task.status] ? (
                          <button
                            onClick={() => moveTask(task.id, prevStatusMap[task.status]!)}
                            className="p-1 rounded text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200"
                            title="Move to previous column"
                          >
                            <ArrowLeft className="w-3.5 h-3.5" />
                          </button>
                        ) : (
                          <div />
                        )}

                        {nextStatusMap[task.status] && (
                          <button
                            onClick={() => moveTask(task.id, nextStatusMap[task.status]!)}
                            className="inline-flex items-center gap-1 text-[11px] font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
                            title="Advance status"
                          >
                            <span>Move Next</span>
                            <ArrowRight className="w-3 h-3" />
                          </button>
                        )}
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal for adding new task */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-6 shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-neutral-200 dark:border-neutral-800">
              <h3 className="text-sm font-bold text-neutral-900 dark:text-white">Create Engineering Task</h3>
              <button onClick={() => setModalOpen(false)} className="text-neutral-400 hover:text-neutral-600">
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleCreateTask} className="mt-4 space-y-4">
              <div>
                <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1">
                  Task Title *
                </label>
                <input
                  type="text"
                  required
                  value={newTaskTitle}
                  onChange={(e) => setNewTaskTitle(e.target.value)}
                  placeholder="e.g. Implement Webhook idempotency key handler"
                  className="w-full px-3 py-2 text-xs rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1">
                    Category
                  </label>
                  <select
                    value={newTaskCategory}
                    onChange={(e) => setNewTaskCategory(e.target.value as SoftwareTask['category'])}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white"
                  >
                    <option value="Frontend">Frontend</option>
                    <option value="Backend API">Backend API</option>
                    <option value="Mobile App">Mobile App</option>
                    <option value="Cloud Infra">Cloud Infra</option>
                    <option value="DevOps">DevOps</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1">
                    Estimate (Hours)
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="80"
                    value={newTaskHours}
                    onChange={(e) => setNewTaskHours(Number(e.target.value))}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white"
                  >
                  </input>
                </div>
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="px-3 py-1.5 text-xs rounded-lg text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-indigo-600 text-white hover:bg-indigo-500"
                >
                  Create Task
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
