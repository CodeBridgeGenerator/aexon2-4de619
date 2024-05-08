import React from "react";
import { render, screen } from "@testing-library/react";

import UserProfilePage from "../UserProfilePage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders userProfile page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <UserProfilePage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("userProfile-datatable")).toBeInTheDocument();
    expect(screen.getByRole("userProfile-add-button")).toBeInTheDocument();
});
