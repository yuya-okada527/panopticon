/**
  タスク詳細画面に対するテストを記載する
 */
import { test, expect } from "@playwright/test";
import TaskDetailPage from "../po/task-detail-page";
import { E2EUtils } from "../utils/e2e-utils";

const projectId = 1;
const taskId = 1;

test.describe("Task Detail", () => {
  E2EUtils.addCommonHooks(test);
  test.beforeEach(async ({ page }) => {
    const taskDetailPage = new TaskDetailPage(page);
    await taskDetailPage.goto(projectId, taskId);
  });
  test.only("タスクを編集できる", async ({ page }) => {
    const taskDetailPage = new TaskDetailPage(page);
  });
});
