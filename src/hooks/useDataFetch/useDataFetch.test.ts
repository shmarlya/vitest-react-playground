import { renderHook, waitFor } from "@testing-library/react";
import useDataFetch from "./useDataFetch";
import { describe, expect, it, vi, afterAll } from "vitest";

describe("useDataFetch Custom Hook", () => {
  //Spy on the global fetch function
  const fetchSpy = vi.spyOn(global, "fetch");

  it("fetches data successfully", async () => {
    const mockResolveValue = {
      ok: true,
      json: async () => ({
        someData: "test data",
      }),
    };

    fetchSpy.mockReturnValue(mockResolveValue as any);

    const { result } = renderHook(() =>
      useDataFetch("https://example.com/api/data")
    );
    await waitFor(() => {
      expect(result.current.data).toEqual({ someData: "test data" });
      // eslint-disable-next-line testing-library/no-wait-for-multiple-assertions
      expect(result.current.loading).toBeFalsy();
      // eslint-disable-next-line testing-library/no-wait-for-multiple-assertions
      expect(result.current.error).toBeNull();
    });
  });

  it("handles network error", async () => {
    const mockResolveValue = {
      ok: false,
      json: async () => {
        throw new Error("Network response was not ok");
      },
    };
    fetchSpy.mockReturnValue(mockResolveValue as any);
    // Mocking the global fetch function to simulate a network error
    const { result } = renderHook(() =>
      useDataFetch("https://example.com/api/data")
    );
    await waitFor(() => {
      expect(result.current.data).toBeNull();

      // eslint-disable-next-line testing-library/no-wait-for-multiple-assertions
      expect(result.current.loading).toBeFalsy();
      // eslint-disable-next-line testing-library/no-wait-for-multiple-assertions
      expect(result.current.error).toEqual(
        new Error("Network response was not ok")
      );
    });
  });

  afterAll(() => {
    fetchSpy.mockRestore();
  });
});
