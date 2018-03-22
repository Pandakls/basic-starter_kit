import HomePage from '../views/home';
import ItemPage from '../views/items';

let route = '#';
let refreshSpa = () => {/*Do nothing*/}

function setRoute(newRoute) {
    route = newRoute;
};

function getActiveComponent() {
    if(route === 'items'){
        return ItemPage;
    }
    return HomePage;
};

function navigate(route) {
    setRoute(route);
    refreshSpa(getActiveComponent());
};

function registerRefresh(refreshPage) {
    refreshSpa = refreshPage;
};

export default {
    navigate : navigate,
    setRoute : setRoute,
    registerRefresh : registerRefresh
};
