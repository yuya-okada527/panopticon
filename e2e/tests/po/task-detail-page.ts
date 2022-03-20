import { expect, Page, Locator } from "@playwright/test";
import PageObject from "./page-object";

export default class TaskDetailPage extends PageObject {
  constructor(page: Page) {
    super(page);
  }

  async goto(projectId: number, taskId: number) {
    await this.page.goto(`/${projectId}/task/${taskId}`);
  }

  static async isOnPage(page: Page) {
    expect(page).toHaveURL(/.*\/[0-9]+\/task\/[0-9]+/);
  }
}
