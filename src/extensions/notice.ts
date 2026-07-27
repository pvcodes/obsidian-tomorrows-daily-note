import { Notice } from "obsidian";

export function triggerDailyNotesDependencyNotice() {
  new Notice('Please enable the "daily notes" plugin to use the "advanced daily note planner" plugin.');
}