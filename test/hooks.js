import { dropTables, createTables, insertIntoTables } from '../src/utils/db/queryFunctions';

before(async () => {
  await createTables();
  await insertIntoTables();
});

after(async () => {
  await dropTables();
});
