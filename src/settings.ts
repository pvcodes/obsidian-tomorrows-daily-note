import TomorrowsDailyNote from "./main";
import { App, PluginSettingTab, Setting } from "obsidian";

export interface TomorrowsDailyNoteSettings {
  skipWeekends: boolean;
  defaultOffset: number;
}

export const DEFAULT_SETTINGS: Partial<TomorrowsDailyNoteSettings> = {
  skipWeekends: false,
  defaultOffset: 1,
};

export class TomorrowsDailyNoteSettingTab extends PluginSettingTab {
  plugin: TomorrowsDailyNote;

  constructor(app: App, plugin: TomorrowsDailyNote) {
    super(app, plugin);
    this.plugin = plugin;
  }

  display(): void {
    let { containerEl } = this;

    containerEl.empty();

    new Setting(containerEl)
      .setName("Skip Weekends")
      .setDesc("Skip weekends when opening tomorrow's daily note")
      .addToggle((toggle) =>
        toggle
          .setValue(this.plugin.settings.skipWeekends)
          .onChange(async (value) => {
            this.plugin.settings.skipWeekends = value;
            await this.plugin.saveSettings();
          })
      );

    new Setting(containerEl)
      .setName("Default Offset")
      .setDesc("Number of days ahead to create by default (e.g., 2 = day after tomorrow)")
      .addText((text) =>
        text
          .setPlaceholder("1")
          .setValue(String(this.plugin.settings.defaultOffset))
          .onChange(async (value) => {
            const num = parseInt(value, 10);
            if (!isNaN(num) && num >= 1) {
              this.plugin.settings.defaultOffset = num;
              await this.plugin.saveSettings();
            }
          })
      );
  }
}
