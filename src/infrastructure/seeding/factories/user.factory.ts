import { setSeederFactory } from 'typeorm-extension';
import { User } from '@/infrastructure/database/entities/user.entity';

export default setSeederFactory(User, (faker) => {
  const user = new User();

  user.name = 'Matt';

  user.password = faker.internet.password();
  return user;
});
