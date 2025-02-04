import { runSeeders } from 'typeorm-extension';
import AppDataSource from './index';

// (async () => {
//   console.log('%c LOG BOOM', 'background: #222; color: #bada55');
//   await AppDataSource.initialize();
//   await runSeeders(AppDataSource);
// })();

AppDataSource.initialize()
  .then(async () => {
    await runSeeders(AppDataSource);
    console.log('Seeding completed!');
  })
  .catch((error) => console.log(error));
