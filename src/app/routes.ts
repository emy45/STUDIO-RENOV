import { createBrowserRouter } from 'react-router';
import { Root } from './pages/Root';
import { Home } from './pages/Home';
import { PeintureFinitions } from './pages/services/PeintureFinitions';
import { SolsPlatrerieCloisonsPage } from './pages/services/SolsPlatrerieCloisonsPage';
import { ElectricitePlomberiePage } from './pages/services/ElectricitePlomberiePage';
import { CuisineSalleDeBainPage } from './pages/services/CuisineSalleDeBainPage';
import { MenuiseriesCombles } from './pages/services/MenuiseriesCombles';
import { CouverturePage } from './pages/services/CouverturePage';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: 'services/peinture-finitions', Component: PeintureFinitions },
      { path: 'services/sols-platrerie-cloisons', Component: SolsPlatrerieCloisonsPage },
      { path: 'services/electricite-plomberie', Component: ElectricitePlomberiePage },
      { path: 'services/cuisine-salle-de-bain', Component: CuisineSalleDeBainPage },
      { path: 'services/menuiseries-combles', Component: MenuiseriesCombles },
      { path: 'services/couverture', Component: CouverturePage },
    ],
  },
]);