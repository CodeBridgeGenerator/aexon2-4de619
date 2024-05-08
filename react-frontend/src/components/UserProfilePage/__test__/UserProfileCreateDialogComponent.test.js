import React from "react";
import { render, screen } from "@testing-library/react";

import UserProfileCreateDialogComponent from "../UserProfileCreateDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders userProfile create dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <UserProfileCreateDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("userProfile-create-dialog-component")).toBeInTheDocument();
});
