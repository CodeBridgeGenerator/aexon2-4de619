import React from "react";
import { render, screen } from "@testing-library/react";

import UserProfileEditDialogComponent from "../UserProfileEditDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders userProfile edit dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <UserProfileEditDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("userProfile-edit-dialog-component")).toBeInTheDocument();
});
