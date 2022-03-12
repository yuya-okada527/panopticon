/**
  Project一覧画面に対するテストを記載する
 */
import { test, expect } from "@playwright/test";
import ProjectsPage from "../po/projects-page";
import { E2EUtils } from "../utils/e2e-utils";

test.describe("Projects", () => {
  test.describe(ProjectsPage.PATH, () => {
    test.beforeEach(async ({ page }) => {
      const projectsPage = new ProjectsPage(page);
      await projectsPage.goto();
    });
    E2EUtils.addCommonHooks(test);
    test("プロジェクトTOPに遷移できること", async ({ page }) => {
      const projectsPage = new ProjectsPage(page);
      await projectsPage.selectProject("Local Project");
    });
    test("プロジェクトを追加できること", async ({ page }) => {
      const projectsPage = new ProjectsPage(page);
      const projectName = "E2E Project";
      await projectsPage.fillProjectName(projectName);
      await projectsPage.clickAddButton();
      // リロードしないと更新のタイミングが合わない
      await page.reload();
      await projectsPage.isProjectNameVisible(projectName);
    });
  });
});
