import React, { useState } from 'react';
import { useApp } from '../../../context/AppContext.tsx';
import { VideoProject } from '../../../types/index.ts';
import {
  Video,
  Play,
  Pause,
  MessageSquare,
  CheckCircle2,
  Clock,
  Film,
  Sparkles,
  Download,
  Share2
} from 'lucide-react';

export const VideoProductionTab: React.FC = () => {
  const { videoProjects, addVideoComment, updateVideoStage } = useApp();
  const [selectedProjectId, setSelectedProjectId] = useState<string>(videoProjects[0]?.id || '');
  const [commentText, setCommentText] = useState('');
  const [commentTimecode, setCommentTimecode] = useState('00:32');
  const [isPlaying, setIsPlaying] = useState(false);

  const activeProject = videoProjects.find((p) => p.id === selectedProjectId) || videoProjects[0];

  const handlePostComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentText.trim() || !activeProject) return;
    addVideoComment(activeProject.id, commentText.trim(), commentTimecode);
    setCommentText('');
  };

  const stages: VideoProject['stage'][] = [
    'Scripting',
    'Rough Cut',
    'Color Grade',
    'Client Review',
    'Final Delivered'
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-neutral-200 dark:border-neutral-800">
        <div>
          <h2 className="text-xl font-bold text-neutral-900 dark:text-white flex items-center gap-2">
            <Video className="w-5 h-5 text-amber-500" />
            <span>Commercial Video Production & Motion Review Room</span>
          </h2>
          <p className="text-xs text-neutral-500 mt-0.5">
            Full-service post-production pipeline: 4K commercials, social reels, motion graphics, and frame-accurate client feedback.
          </p>
        </div>

        {/* Project Switcher */}
        <div className="flex items-center gap-2 self-start sm:self-auto text-xs">
          <span className="text-neutral-500 font-medium">Active Reel:</span>
          <select
            value={selectedProjectId}
            onChange={(e) => setSelectedProjectId(e.target.value)}
            className="px-3 py-1.5 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white font-medium"
          >
            {videoProjects.map((p) => (
              <option key={p.id} value={p.id}>
                {p.title} ({p.stage})
              </option>
            ))}
          </select>
        </div>
      </div>

      {activeProject && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main Video Player & Scrubbing Stage (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-950 p-4 overflow-hidden relative shadow-lg">
              {/* Simulated 16:9 Video Canvas */}
              <div className="relative aspect-video rounded-xl overflow-hidden bg-neutral-900 flex items-center justify-center border border-neutral-800 group">
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-950/70 via-neutral-900 to-neutral-950 flex flex-col items-center justify-center p-6 text-center">
                  <Film className="w-12 h-12 text-indigo-400/40 mb-3" />
                  <div className="text-base font-bold text-white tracking-wide">{activeProject.title}</div>
                  <div className="text-xs text-neutral-400 mt-1 font-mono">
                    {activeProject.resolution} &middot; {activeProject.duration} &middot; {activeProject.category}
                  </div>
                </div>

                {/* Central Play/Pause button */}
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="relative z-10 w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 backdrop-blur-md text-white flex items-center justify-center transition-transform hover:scale-105"
                >
                  {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-1" />}
                </button>

                {/* Timecode overlay */}
                <div className="absolute bottom-3 left-3 bg-black/70 px-2 py-1 rounded text-[11px] font-mono text-white">
                  00:32 / {activeProject.duration}
                </div>
                <div className="absolute top-3 right-3 bg-black/70 px-2 py-1 rounded text-[10px] font-mono text-amber-400">
                  {activeProject.stage}
                </div>
              </div>

              {/* Scrubber Timeline */}
              <div className="mt-3 px-1">
                <div className="w-full bg-neutral-800 h-2 rounded-full cursor-pointer relative">
                  <div className="bg-indigo-500 h-2 rounded-full w-2/5" />
                  {/* Revision comment dots on scrubber */}
                  {activeProject.comments.map((c, i) => (
                    <div
                      key={c.id}
                      title={`${c.timecode} - ${c.text}`}
                      className="absolute top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-amber-400 border border-black cursor-pointer"
                      style={{ left: `${25 + i * 35}%` }}
                    />
                  ))}
                </div>
              </div>

              {/* Player control bar */}
              <div className="mt-3 flex items-center justify-between text-xs text-neutral-400">
                <div className="flex items-center gap-3">
                  <button onClick={() => setIsPlaying(!isPlaying)} className="hover:text-white">
                    {isPlaying ? 'Pause' : 'Play Preview'}
                  </button>
                  <button onClick={() => setCommentTimecode('00:32')} className="hover:text-white font-mono">
                    Stamp Timecode (00:32)
                  </button>
                </div>
                <div className="flex items-center gap-3">
                  <button className="hover:text-white flex items-center gap-1">
                    <Download className="w-3.5 h-3.5" />
                    <span>Download Proxy</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Workflow Pipeline Progression Selector */}
            <div className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
              <div className="text-xs font-bold text-neutral-900 dark:text-white mb-2">
                Production Stage Progression
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                {stages.map((stg, idx) => {
                  const isCurrent = activeProject.stage === stg;
                  return (
                    <button
                      key={stg}
                      onClick={() => updateVideoStage(activeProject.id, stg)}
                      className={`p-2 text-[11px] font-semibold rounded-lg border text-center transition-all ${
                        isCurrent
                          ? 'bg-amber-500/10 border-amber-500 text-amber-700 dark:text-amber-300'
                          : 'bg-neutral-50 dark:bg-neutral-950 border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:border-neutral-300'
                      }`}
                    >
                      <div className="font-mono text-[9px] text-neutral-400">0{idx + 1}</div>
                      <div>{stg}</div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Timecode Revisions & Feedback Stream (5 cols) */}
          <div className="lg:col-span-5 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-5 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-neutral-100 dark:border-neutral-800">
                <div>
                  <h3 className="text-sm font-bold text-neutral-900 dark:text-white">Frame-Accurate Feedback</h3>
                  <p className="text-[11px] text-neutral-500">Attach revision notes linked to video timestamps</p>
                </div>
                <span className="font-mono text-xs text-neutral-400">
                  {activeProject.comments.length} Notes
                </span>
              </div>

              {/* Comments List */}
              <div className="mt-3 space-y-2.5 max-h-72 overflow-y-auto pr-1">
                {activeProject.comments.length === 0 ? (
                  <div className="text-xs text-neutral-400 py-8 text-center italic">
                    No revision comments attached yet.
                  </div>
                ) : (
                  activeProject.comments.map((comment) => (
                    <div
                      key={comment.id}
                      className="p-3 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 text-xs"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-neutral-900 dark:text-white">{comment.author}</span>
                          <span className="px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400 font-mono text-[10px]">
                            {comment.timecode}
                          </span>
                        </div>
                        <span className="text-[10px] text-neutral-400">{comment.createdAt}</span>
                      </div>
                      <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed text-[11px]">
                        {comment.text}
                      </p>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Post new timecoded note form */}
            <form onSubmit={handlePostComment} className="mt-4 pt-3 border-t border-neutral-100 dark:border-neutral-800 space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={commentTimecode}
                  onChange={(e) => setCommentTimecode(e.target.value)}
                  placeholder="00:00"
                  className="w-20 px-2 py-1.5 text-xs font-mono rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white text-center"
                />
                <input
                  type="text"
                  required
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  placeholder="Add editorial feedback or frame request..."
                  className="flex-1 px-3 py-1.5 text-xs rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2 px-3 text-xs font-semibold rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white transition-colors flex items-center justify-center gap-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Attach Review Note</span>
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
