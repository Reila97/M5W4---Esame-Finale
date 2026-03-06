import "@testing-library/jest-dom";
import { render, screen, within } from "@testing-library/react";
import { it, expect, describe, jest } from "@jest/globals";

import App from "./App.jsx";
import userEvent from "@testing-library/user-event";

describe("testApp", () => {
  it("renderizza welcome", () => {
    render(<App />);
    const welcomeTitle = screen.queryByText(
      /Your daily escape, one chapter at a time./i,
    );

    expect(welcomeTitle).toBeInTheDocument();
  });
  it("renderizza 150 card", () => {
    render(<App />);
    const card = screen.queryAllByTestId("bookCard");
    expect(card).toHaveLength(150);
  });

  it("renderizza comment area", async () => {
    globalThis.fetch = jest.fn(() =>
      Promise.resolve({
        ok:true,
        json: () =>
          Promise.resolve([
            {
              _id: "6984c673229be90015853b74",
              comment: "molto bellooooo",
              rate: 1,
              elementId: "0316438960",
              author: "abanobsaid49@gmail.com",
              createdAt: "2026-02-05T16:33:55.646Z",
              updatedAt: "2026-02-05T16:33:55.646Z",
              __v: 0,
            },
            {
              _id: "6989de7f2873cb00150f0275",
              comment: "new comment last wish",
              rate: 1,
              elementId: "0316438960",
              author: "elena.volpato@gmail.com",
              createdAt: "2026-02-09T13:17:51.188Z",
              updatedAt: "2026-02-09T13:17:51.188Z",
              __v: 0,
            },
          ]),
      }),
    );

    render(<App />);
    const card = screen.queryAllByTestId("bookCard");
    const img = within(card[0]).queryByRole("img");
    await userEvent.click(img);
    const title = await screen.findByText(/Write a review/i);
    expect (title).toBeInTheDocument()
  });
});

