import Euler from './Euler';
import RK4 from './RK4';
import Verlet from './Verlet';
import RKF from './RKF';
import PEFRL from './PEFRL';
import Nystrom3 from './Nystrom3';
import Nystrom4 from './Nystrom4';
import Nystrom5 from './Nystrom5';
import Nystrom6 from './Nystrom6';
import RKN64 from './RKN64';

export const integrators = ['RK4', 'Euler', 'Verlet', 'RKF', 'PEFRL', 'Nystrom3', 'Nystrom4', 'Nystrom5', 'Nystrom6', 'RKN64'];

export default function(integrator, config) {
  switch (integrator) {
    case 'RK4':
      return new RK4(config);
    case 'Euler':
      return new Euler(config);
    case 'Verlet':
      return new Verlet(config);
    case 'RKF':
      return new RKF(config);
    case 'PEFRL':
      return new PEFRL(config);
    case 'Nystrom3':
      return new Nystrom3(config);
    case 'Nystrom4':
      return new Nystrom4(config);
    case 'Nystrom5':
      return new Nystrom5(config);
    case 'Nystrom6':
      return new Nystrom6(config);
    case 'RKN64':
      return new RKN64(config);
    default:
      return new RK4(config);
  }
}
