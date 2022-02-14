/**
  Task一覧画面に対するテストを記載する
 */
import { test, expect } from "@playwright/test";
import TasksPage from "../po/tasks-page";
import TaskProvidersPage from "../po/task-providers-page";
import TaskDetailPage from "../po/task-detail-page";
import NewTaskPage from "../po/new-task-page";
import { E2EUtils } from "../utils/e2e-utils";

const projectId = 1;

test.describe("Tasks", () => {
  test.describe("/{project_id}/tasks", () => {
    test.beforeEach(async ({ page }) => {
      const tasksPage = new TasksPage(page);
      await tasksPage.goto(projectId);
      await tasksPage.isOnPage(projectId);
    });
    test.afterEach(async ({ page }, testInfo) => {
      const screenshot = await page.screenshot();
      await testInfo.attach("screenshot", {
        body: screenshot,
        contentType: "image/png",
      });
    });
    test("タスクプロバイダページに遷移できる", async ({ page }) => {
      const tasksPage = new TasksPage(page);
      await E2EUtils.sleep(1);
      await tasksPage.gotoProvidersPage();
      await TaskProvidersPage.isOnPage(page);
    });
    test("タスク作成ページに遷移できる", async ({ page }) => {
      const tasksPage = new TasksPage(page);
      await E2EUtils.sleep(1);
      await tasksPage.clickAddButton();
      await NewTaskPage.isOnPage(page);
    });
    test("タスク一覧にタスクが表示できる", async ({ page }) => {
      const tasksPage = new TasksPage(page);
      expect(await tasksPage.countTasks("Todo")).toBe(1);
    });
    test.skip("タスクを移動することができる", async ({ page }) => {});
    test("タスク詳細に遷移することができる", async ({ page }) => {
      const tasksPage = new TasksPage(page);
      await E2EUtils.sleep(1);
      await tasksPage.clickTaskCard("task1");
      await E2EUtils.sleep(1);
      await TaskDetailPage.isOnPage(page);
    });
  });
});
