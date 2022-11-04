import React, { useState } from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ArtistCard from "../Components/ArtistCard";
import SongList from "../Components/SongList";
import Artist from "../Containers/Artist";

describe("ArtistCard", () => {
  it("renders", () => {
    render(<ArtistCard />);
    expect(screen.getByTestId("ArtistCard")).toBeInTheDocument();

  }); 

  it("renders text", () => {
    render(<ArtistCard />);
    expect(screen.getByTestId("ArtistCard")).toHaveTextContent("ArtistCard");
  });
});

describe("SongList", () => {
  it("renders", () => {
    render(<SongList />);
    expect(screen.getByTestId("SongList")).toBeInTheDocument();
  });

  it("renders text", () => {
    render(<SongList />);
    expect(screen.getByTestId("SongList")).toHaveTextContent("SongList");
  });
});

describe("Artist", () => {
  it("renders", () => {
    render(<Artist />);
    expect(screen.getByTestId("Artist")).toBeInTheDocument();
  });

  it("renders text", () => {
    render(<Artist />);
    expect(screen.getByTestId("Artist")).toHaveTextContent("Artist");
  });
});