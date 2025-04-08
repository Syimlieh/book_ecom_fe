import { Provider as ReduxProvider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "../../routes";
import { store } from "../redux/store";

const appRouter = createBrowserRouter(routes);

export default function AppProviders() {
    return (
        <ReduxProvider store={store}>
            <RouterProvider router={appRouter} />
        </ReduxProvider>
    );
}