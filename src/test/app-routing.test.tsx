import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { routeTree } from "@/routeTree.gen";
import { contact, getProject } from "@/content/site";

describe("App routing", () => {
  const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });
  for (const p of ["/", "/about", "/skills", "/projects", "/projects/devscout-v2", "/playground", "/achievements", "/contact"]) {
    it(`matches ${p}`, () => {
      expect(router.matchRoutes(p).at(-1)?.routeId).not.toBe(rootRouteId);
    });
  }
  it("unknown project slugs have no data", () => {
    expect(getProject("nope")).toBeUndefined();
  });
  it("no invented contact details", () => {
    expect(Object.values(contact).every((v) => v === null)).toBe(true);
  });
});